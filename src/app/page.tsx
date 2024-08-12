import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">

      <div className="text-3xl font-bold mb-8">
        Hello (gallery in progress!)
      </div>

      <div className="flex flex-wrap gap-4">
        {
          images.map((image) => (
            <div key={image.id} className="w-48 flex-col">
              <img src={image.url} alt={`Image ${image.name}`} />
              <div>{image.name}</div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
