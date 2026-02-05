"use client";

import Config from "@/config";
import useBlogData from "@/lib/useBlogData";

export default function FlashNews() {
  const { blogData, blogLoading } = useBlogData(Config.bloggerKeys.flashNews);

  // Don't render anything while loading or if no content
  if (blogLoading || !blogData) return null;

  return (
    <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-xl p-4 sm:p-5 shadow-md">
      <div className="text-amber-50 prose prose-sm prose-invert max-w-none [&_a]:text-amber-200 [&_a]:underline [&_a:hover]:text-white">
        {blogData}
      </div>
    </div>
  );
}
