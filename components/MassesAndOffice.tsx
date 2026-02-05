"use client"

import Config from "@/config";
import useBlogData from "@/lib/useBlogData";
import { LoaderCircle } from "lucide-react"
import Image from "next/image";

export default function MassesAndOffice() {
  const { blogData, blogLoading } = useBlogData(Config.bloggerKeys.massesAndOffice);

  return (
    <article>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
        <div className="w-full sm:w-auto flex-shrink-0">
          <Image
            src="/images/stockpic1.jpg"
            alt="Msze święte"
            width={320}
            height={420}
            className="rounded-lg object-cover w-full sm:w-[320px] h-auto shadow-md"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
            Msze i kancelaria
          </h2>
          {blogLoading ? (
            <div className="flex justify-center py-8">
              <LoaderCircle className="animate-spin h-10 w-10 text-amber-600" />
            </div>
          ) : (
            <div className="prose prose-stone max-w-none">
              {blogData}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
