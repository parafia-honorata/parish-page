"use client"

import Config from "@/config";
import useBlogData from "@/lib/useBlogData";
import {LoaderCircle} from "lucide-react"
import Image from "next/image";

export default function BibleGroup() {
    const {blogData, blogLoading} = useBlogData(Config.bloggerKeys.bibleMeetingKey);
    if (blogLoading) return (<LoaderCircle className="animate-spin h-12 w-12 mt-12"/>)
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Koło Biblijne</h1>
        <article className="flex flex-col md:flex-row gap-6 items-center">
          <Image
            src="/images/biblepic.jpg"
            alt="Pismo Święte"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div>
            <p>W naszej parafii odbywają się spotkania koła biblijnego. Około raz na trzy tygodnie zbieramy się w bibliotece parafialnej. Wspólnie czytamy pismo i wymieniamy się naszymi spostrzeżeniami.</p>
            {blogData}
          </div>
        </article>
      </main>
    );
}
  