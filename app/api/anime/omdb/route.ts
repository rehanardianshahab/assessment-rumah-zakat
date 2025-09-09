import { NextResponse } from "next/server";

const OMDB_URL = process.env.NEXT_PUBLIC_OMDB_URL;
const OMDB_KEY = process.env.NEXT_PUBLIC_OMDB_KEY;

export async function GET(
  req: Request,
) {
  try {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page") || "1";
    const perPage = searchParams.get("perPage") || "12";
    const genre = searchParams.get("genre");
    const search = searchParams.get("keyword")|| 'demon slayer';
    const sortBy = searchParams.get("sortBy") || "title";
    const sortOrder = searchParams.get("sortOrder") || "desc";

    const baseUrl = `${OMDB_URL}`;
    
    // Filter Tabel
    const apiUrl = new URL(baseUrl);
    apiUrl.searchParams.set("apikey", `${OMDB_KEY}`);
    apiUrl.searchParams.set("i", "tt3896198");
    apiUrl.searchParams.set("page", page);
    apiUrl.searchParams.set("limit", perPage);
    if (genre) apiUrl.searchParams.set("genres", genre);
    if (search) apiUrl.searchParams.set("s", search);
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

    const { Search, pagination } = await response.json();
    
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
      data: Search,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", detail: (error as Error).message },
      { status: 500 }
    );
  }
}
