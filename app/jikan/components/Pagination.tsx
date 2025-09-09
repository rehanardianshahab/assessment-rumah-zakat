"use client";

import { cn } from "@/utils/cn";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  const getPageNumbers = () => {
    const delta = 2;
    const pages: (number | string)[] = [];

    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      pages.push(i);
    }

    // Cek Page kiri
    if (typeof pages[0] === "number" && pages[0] > 1) {
      if (pages[0] !== 2) pages.unshift("...");
      pages.unshift(1);
    }

    // Cek Page kanan
    const lastPage = pages[pages.length - 1];
    if (typeof lastPage === "number" && lastPage < totalPages) {
      if (lastPage !== totalPages - 1) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      {/* List Page */}
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page as number)}
            className={cn(
              "px-3 py-2 rounded-lg transition cursor-pointer",
              page === currentPage
                ? "bg-red-800 text-white font-bold"
                : "bg-gray-200 hover:bg-gray-300"
            )}
          >
            {page}
          </button>
        )
      )}
    </div>
  );
}
