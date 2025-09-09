"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useFetchAnime } from "./hooks/useFetchAnime";
import AnimeCard from "./components/AnimeCard";
import Spinner from "@/app/components/Spinner";
import { AnimeOmdb } from "@/types/anime";
import Pagination from "./components/Pagination";

export default function AnimePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Ambil query dari URL
  const page = searchParams.get("page") || "1";
  const perPage = "12";
  const keyword = searchParams.get("keyword") || "";
  const sortBy = "title";
  const sortOrder = searchParams.get("sortOrder") || "asc";

  // Build query string untuk API
  const query = new URLSearchParams({
    page,
    perPage: perPage,
    ...(keyword && { keyword }),
    sortBy: sortBy,
    sortOrder: sortOrder,
  }).toString();

  const { data, pagination, loading, error } = useFetchAnime(query);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="@container/main base-container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {keyword}
      </h1>

      {/* Anime List */}
      {data.length === 0 ? (
        <p className="text-gray-500 mt-6 text-center">Tidak ada anime ditemukan.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-6">
          {data.map((anime: AnimeOmdb) => (
            <AnimeCard key={anime.imdbID} anime={anime} />
          ))}
        </div>

      )}
      <div className="my-12" />
      {/* Pagination */}
      <Pagination
        currentPage={pagination.current_page}
        totalPages={pagination.last_visible_page}
        onPageChange={(newPage) => {
          const newParams = new URLSearchParams({
            page: String(newPage),
            perPage,
            ...(keyword && { keyword }),
            sortBy,
            sortOrder,
          });
          router.push(`/omdb?${newParams.toString()}`);
        }}
      />

    </div>
  );
}
