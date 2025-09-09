import { NextResponse } from "next/server";

const JIKAN_URL = process.env.NEXT_PUBLIC_JIKAN_URL;

export async function GET(
  req: Request,
) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";
    const perPage = searchParams.get("perPage") || "12";
    const genre = searchParams.get("genre");
    const search = searchParams.get("keyword");
    const sortBy = searchParams.get("sortBy") || "title";
    const sortOrder = searchParams.get("sortOrder") || "desc";

    const baseUrl = `${JIKAN_URL}/v4/anime`;
    
    // Filter Tabel
    const apiUrl = new URL(baseUrl);
    apiUrl.searchParams.set("page", page);
    apiUrl.searchParams.set("limit", perPage);
    if (genre) apiUrl.searchParams.set("genres", genre);
    if (search) apiUrl.searchParams.set("q", search);
    apiUrl.searchParams.set("order_by", sortBy);
    apiUrl.searchParams.set("sort", sortOrder);

    // Fetch data
    const response = await fetch(apiUrl.toString(), { cache: "no-store" });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: response.status }
      );
    }

    const { data, pagination } = await response.json();

    return NextResponse.json({
      success: true,
      pagination,
      filters: {
        page,
        perPage,
        genre,
        search,
        sortBy,
        sortOrder,
      },
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", detail: (error as Error).message },
      { status: 500 }
    );
  }
}
