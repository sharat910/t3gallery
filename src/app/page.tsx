import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/4033f3b2-0fc9-4a6e-95be-37009f50e078-7qajqq.png",
  "https://utfs.io/f/93fe9634-fea2-4314-956b-7ae7f700ae5b-qa0vsq.png",
  "https://utfs.io/f/4709ed08-e620-4c42-9d65-94af53585014-lf3twj.png",
  "https://utfs.io/f/c494ae05-dd1a-459a-b09d-bbe37a140853-qikpqu.1.png",
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">

      <div className="text-3xl font-bold mb-8">
        Hello (gallery in progress!)
      </div>

      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (
            <div key={post.id} className="w-48">
              {post.name}
            </div>
          ))
        }
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt={`Image ${image.id}`} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
