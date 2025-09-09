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
  currentSearch,
  onFilterChange,
}: Props) {
  const [search, setSearch] = useState(currentSearch || "");

  const handleApply = () => {
    onFilterChange({ keyword: search});
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
      <button
        onClick={handleApply}
        className="bg-red-700 text-white px-4 py-2 hover:bg-red-800 cursor-pointer rounded-xl"
      >
        Cari
      </button>
    </div>
  );
}
