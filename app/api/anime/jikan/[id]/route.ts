import { NextResponse } from "next/server";

const JIKAN_URL = process.env.NEXT_PUBLIC_JIKAN_URL;

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const baseUrl = `${JIKAN_URL}/v4/anime/${id}`;

    const response = await fetch(baseUrl, { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: response.status }
      );
    }

    const { data } = await response.json();
    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error", detail: (error as Error).message },
      { status: 500 }
    );
  }
}
