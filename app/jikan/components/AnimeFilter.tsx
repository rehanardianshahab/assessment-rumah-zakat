"use client";

import { useState } from "react";

interface Props {
  currentGenre?: string;
  currentSearch?: string;
  currentSortBy?: string;
  currentSortOrder?: string;
  onFilterChange: (filters: Record<string, string>) => void;
}

export default function AnimeFilter({
  currentGenre,
  currentSearch,
  currentSortOrder,
  onFilterChange,
}: Props) {
  const [search, setSearch] = useState(currentSearch || "");
  const [genre, setGenre] = useState(currentGenre || "");
  const [sortOrder, setSortOrder] = useState(currentSortOrder || "asc");

  const handleApply = () => {
    onFilterChange({ keyword: search, genre, sortBy: 'title', sortOrder: sortOrder });
  };

  return (
    <div className="flex flex-wrap items-center gap-4 bg-gray-100 dark:bg-gray-200 p-4 rounded-lg justify-center">
      <input
        type="text"
        placeholder="Cari anime..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-3 py-2 rounded-xl border"
      />
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="px-3 py-2 rounded-xl border"
      >
        <option value="">Semua Genre</option>
        <option value="1">Action</option>
        <option value="2">Adventure</option>
        <option value="4">Comedy</option>
        <option value="10">Fantasy</option>
        <option value="14">Horror</option>
        <option value="7">Mystery</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="px-3 py-2 rounded-xl border"
      >
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
      <button
        onClick={handleApply}
        className="bg-red-700 text-white px-4 py-2 hover:bg-red-800 cursor-pointer rounded-xl"
      >
        Cari
      </button>
    </div>
  );
}
