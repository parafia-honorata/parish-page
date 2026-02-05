"use client";

import Config from "@/config";
import useBlogData from "@/lib/useBlogData";
import { LoaderCircle } from "lucide-react";

export default function News() {
  const { blogData, blogLoading } = useBlogData(Config.bloggerKeys.newsPostKey);

  return (
    <main className="flex flex-col gap-8 md:gap-12">
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
          Ogłoszenia parafialne
        </h1>
        {blogLoading ? (
          <div className="flex justify-center py-8">
            <LoaderCircle className="animate-spin h-10 w-10 text-amber-600" />
          </div>
        ) : (
          <div className="blogger-content prose max-w-none text-muted-foreground leading-relaxed">
            {blogData}
          </div>
        )}
      </section>
    </main>
  );
}
