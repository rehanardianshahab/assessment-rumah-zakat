"use client";

import { cn } from "@/utils/cn";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: Props) {
  return (
    <div className="flex justify-center gap-2">
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={cn("px-3 py-1 rounded bg-gray-200 disabled:opacity-50", currentPage <= 1 ? 'cursor-not-allowed' : 'cursor-pointer')}
      >
        Prev
      </button>
      <span className="px-3 py-1">
        {currentPage} / {totalPages}
      </span>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={cn("px-3 py-1 rounded bg-gray-200 disabled:opacity-50", currentPage >= totalPages ? 'cursor-not-allowed' : 'cursor-pointer')}
      >
        Next
      </button>
    </div>
  );
}
