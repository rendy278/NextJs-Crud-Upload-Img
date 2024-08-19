import Card from "@/components/card";
import Link from "next/link";
import { getImages } from "@/lib/data";

export default async function Home() {
  const images = await getImages();
  return (
    <main className="max-w-screen-lg mx-auto py-14">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Latest Image</h1>
        <Link
          href="/create"
          className="p-4 bg-green-500 text-white font-semibold rounded-md"
        >
          Upload New Image
        </Link>
      </div>
      <div className=" grid grid-cols-1 mt-10 md:grid-cols-3 gap-5 place-items-center">
        {images.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </main>
  );
}
