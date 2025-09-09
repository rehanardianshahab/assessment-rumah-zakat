import Image from "next/image";
import { AnimeOmdb } from "@/types/anime";
import Link from "next/link";

export default function AnimeCard({ anime }: { anime: AnimeOmdb }) {
  return (
    <div className="rounded-xl shadow-lg p-3 text-black w-full lg:w-60 hover:scale-105 transition-transform mx-auto">
      <Image
        src={anime.Poster || "/no-image.png"}
        alt={anime.Title}
        width={240}
        height={320}
        className="rounded-lg object-cover w-full h-80"
      />
      <div className="mt-3 p-2">
        <h3 className="font-bold text-lg truncate"><Link href={`/omdb/${anime.imdbID}`}>{anime.Title}</Link></h3>
        <p className="text-sm text-gray-300">
          {anime.Year || "Unknown"} • {anime.Type}
        </p>
      </div>
    </div>
  );
}
