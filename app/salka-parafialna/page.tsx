"use client"

import Config from "@/config";
import useBlogData from "@/lib/useBlogData";
import {LoaderCircle} from "lucide-react"
import Image from "next/image";

export default function ParishRoom() {
    const {blogData, blogLoading} = useBlogData(Config.bloggerKeys.parishRoomKey);
    if (blogLoading) return (<LoaderCircle className="animate-spin h-12 w-12 mt-12"/>)
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Salka parafialna</h1>
        <article className="flex flex-col md:flex-row gap-6 items-center">
          <Image
            src="/images/pic5.jpg"
            alt="Salka parafialna"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div>
            <p>Przy kościele znajduje się salka parafialna wyposażona w stoły do ping-ponga i piłkarzyków. Zapraszamy do kontaktu telefonicznego z koordynatorem:</p>
            {blogData}
          </div>
        </article>
      </main>
    );
}
  