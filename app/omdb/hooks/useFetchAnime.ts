"use client";

import { useEffect, useState } from "react";
import { AnimeOmdb } from "@/types/anime";

interface Pagination {
  current_page: number;
  last_visible_page: number;
  has_next_page: boolean;
}

interface FetchResult {
  data: AnimeOmdb[];
  pagination: Pagination;
  loading: boolean;
  error: string | null;
}

const BASE_URL = process.env.NEXT_PUBLIC_URL

export function useFetchAnime(query: string): FetchResult {
  const [data, setData] = useState<AnimeOmdb[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    current_page: 1,
    last_visible_page: 1,
    has_next_page: false,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAnime() {
      setLoading(true);
      setError(null);

      try {
        const url = `${BASE_URL}/api/anime/omdb?${query}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Gagal mengambil data dari API");

        const json = await res.json();

        setData(json.data || []);
        setPagination({
          current_page: json.pagination?.current_page || 1,
          last_visible_page: json.pagination?.last_visible_page || 1,
          has_next_page: json.pagination?.has_next_page || false,
        });
      } catch (err) {
        const { message } = err as Error;
        setError(message);
      } finally {
        setLoading(false);
      }
    }

    fetchAnime();
  }, [query]);

  return { data, pagination, loading, error };
}
