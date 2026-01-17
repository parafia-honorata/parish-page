"use client"

import Config from "@/config";
import useBlogData from "@/lib/useBlogData";
import { LoaderCircle } from "lucide-react"

export default function MassesAndOffice() {
  const { blogData, blogLoading } = useBlogData(Config.bloggerKeys.massesAndOffice);

  return (
    <article>
      {blogLoading ? (
        <LoaderCircle className="animate-spin h-12 w-12 mt-12" />
      ) : (
        blogData
      )}
    </article>
  );
}
