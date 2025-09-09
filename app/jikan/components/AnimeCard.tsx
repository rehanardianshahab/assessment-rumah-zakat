import Image from "next/image";
import { Anime } from "@/types/anime";
import Link from "next/link";

export default function AnimeCard({ anime }: { anime: Anime }) {
  return (
    <div className="rounded-xl shadow-lg p-3 text-black w-full lg:w-60 hover:scale-105 transition-transform mx-auto">
      <Image
        src={anime.images?.jpg?.image_url || "/no-image.png"}
        alt={anime.title}
        width={240}
        height={320}
        className="rounded-lg object-cover w-full h-80"
      />
      <div className="mt-3 p-2">
        <h3 className="font-bold text-lg truncate"><Link href={`/jikan/${anime.mal_id}`}>{anime.title}</Link></h3>
        <p className="text-sm text-gray-300">
          {anime.year || "Unknown"} • {anime.type}
        </p>
        <p className="text-sm text-yellow-400">⭐ {anime.score || "N/A"}</p>
      </div>
    </div>
  );
}
