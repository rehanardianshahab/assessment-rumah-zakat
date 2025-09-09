import { NextRequest, NextResponse } from "next/server";

const OMDB_URL = process.env.NEXT_PUBLIC_OMDB_URL!;
const OMDB_KEY = process.env.NEXT_PUBLIC_OMDB_KEY!;

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ✅ harus di-await
    const { id } = await context.params;

    const baseUrl = `${OMDB_URL}?i=${id}&apiKey=${OMDB_KEY}`;
    const response = await fetch(baseUrl, { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: response.status }
      );
    }

    const data = await response.json();
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
