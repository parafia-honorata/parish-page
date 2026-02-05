"use client";

import Config from "@/config";
import useBlogData from "@/lib/useBlogData";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";

export default function ParishRoom() {
  const { blogData, blogLoading } = useBlogData(
    Config.bloggerKeys.parishRoomKey
  );

  return (
    <main className="flex flex-col gap-8 md:gap-12">
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
          <div className="w-full sm:w-auto flex-shrink-0">
            <Image
              src="/images/pic5.jpg"
              alt="Salka parafialna"
              width={320}
              height={420}
              className="rounded-lg object-cover w-full sm:w-[320px] h-auto shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Salka parafialna
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Przy kościele znajduje się salka parafialna wyposażona w stoły
                do ping-ponga i piłkarzyków. Zapraszamy do kontaktu
                telefonicznego z koordynatorem:
              </p>
              {blogLoading ? (
                <div className="flex justify-center py-4">
                  <LoaderCircle className="animate-spin h-8 w-8 text-amber-600" />
                </div>
              ) : (
                <div className="blogger-content prose max-w-none">{blogData}</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
