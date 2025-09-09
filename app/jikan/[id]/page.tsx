'use server'
import Image from "next/image";
import { Suspense } from "react";
import Spinner from "@/app/components/Spinner";

interface DetailProps {
  params: { id: string };
}

export default async function Detail({ params }: DetailProps) {
  const { id } = await params;

  return <Suspense fallback={<Spinner/>}>
    <Content id={id}/>
  </Suspense>
}

async function Content({ id }: { id: string }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/anime/jikan/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch anime detail");
  }

  const { data } = await res.json();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Gambar Anime */}
        <div className="w-full md:w-1/3">
          <Image
            src={data.images.jpg.image_url}
            alt={data.title}
            width={400}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{data.title}</h1>

          <div className="flex gap-4 text-sm">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
              {data.type}
            </span>
            <span className="bg-green-600 text-white px-3 py-1 rounded-full">
              {data.episodes} eps
            </span>
            <span className="bg-yellow-600 text-white px-3 py-1 rounded-full">
              ⭐ {data.score || "N/A"}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {data.synopsis || "No synopsis available."}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mt-4">
            <p><span className="font-semibold">Status:</span> {data.status}</p>
            <p><span className="font-semibold">Duration:</span> {data.duration}</p>
            <p><span className="font-semibold">Year:</span> {data.year || "N/A"}</p>
            <p><span className="font-semibold">Season:</span> {data.season || "N/A"}</p>
            <p><span className="font-semibold">Rating:</span> {data.rating}</p>
          </div>
        </div>
      </div>

      {/* Trailer */}
      {data.trailer?.embed_url && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={data.trailer.embed_url}
              title={data.title}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
