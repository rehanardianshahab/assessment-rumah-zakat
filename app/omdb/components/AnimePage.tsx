"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useFetchAnime } from "../hooks/useFetchAnime";
import AnimeCard from "./AnimeCard";
import Spinner from "@/app/components/Spinner";
import { AnimeOmdb } from "@/types/anime";
import Pagination from "./Pagination";
import AnimeFilter from "./AnimeFilter";

export default function AnimePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page") || "1";
  const perPage = "12";
  const keyword = searchParams.get("keyword") || "";
  const sortBy = "title";
  const sortOrder = searchParams.get("sortOrder") || "asc";

  const query = new URLSearchParams({
    page,
    perPage,
    ...(keyword && { keyword }),
    sortBy,
    sortOrder,
  }).toString();

  const { data, pagination, loading, error } = useFetchAnime(query);

  if (loading) return <Spinner />;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="@container/main base-container mx-auto px-4 py-8">
      {/* Filter Component */}
      <AnimeFilter
        currentSearch={keyword}
        onFilterChange={(filters) => {
          const newParams = new URLSearchParams({
            page: "1",
            perPage: perPage,
            ...filters,
          });
          router.push(`/omdb?${newParams.toString()}`);
        }}
      />
      {data.length === 0 ? (
        <p className="text-gray-500 mt-6 text-center">Tidak ada anime ditemukan.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 mt-6">
          {data.map((anime: AnimeOmdb) => (
            <AnimeCard key={anime.imdbID} anime={anime} />
          ))}
        </div>
      )}

      <div className="my-12" />
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
