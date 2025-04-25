"use client"

import Config from "@/config";
import useBlogData from "@/lib/useBlogData";
import {LoaderCircle} from "lucide-react"

export default function News() {
    const {blogData, blogLoading} = useBlogData(Config.bloggerKeys.newsPostKey);
    if (blogLoading) return (<LoaderCircle className="animate-spin h-12 w-12 mt-12"/>)
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {blogData}
      </main>
    );
}
  