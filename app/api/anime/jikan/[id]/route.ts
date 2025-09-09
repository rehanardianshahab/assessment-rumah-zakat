import { NextRequest, NextResponse } from "next/server";

const JIKAN_URL = process.env.NEXT_PUBLIC_JIKAN_URL!;

export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // ✅ params harus di-await karena di Next 15 build-time typing dianggap Promise
    const { id } = await context.params;

    const response = await fetch(`${JIKAN_URL}/v4/anime/${id}`, {
      cache: "no-store",
    });

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
