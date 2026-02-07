import Image from "next/image";
import type { Metadata } from "next";
import basePath from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Parafia Honorata | Różaniec mężczyzn",
  description:
    "Grupa różańcowa mężczyzn w parafii pw. bł. Honorata Koźmińskiego. Zapraszamy mężczyzn do wspólnej modlitwy i budowania braterskiej wspólnoty.",
};

export default function MenRosary() {
  return (
    <main className="flex flex-col gap-8 md:gap-12">
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
          <div className="w-full sm:w-auto flex-shrink-0">
            <Image
              src={`${basePath}/images/rosarypic.jpg`}
              alt="Różaniec"
              width={320}
              height={420}
              className="rounded-lg object-cover w-full sm:w-[320px] h-auto shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Różaniec mężczyzn
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Grupa różańcowa mężczyzn zaprasza do wspólnej modlitwy. To
                wyjątkowa inicjatywa, która gromadzi mężczyzn pragnących
                pogłębiać swoją wiarę poprzez modlitwę różańcową.
              </p>
              <p>
                Wspólna modlitwa różańcowa mężczyzn to czas duchowego
                wyciszenia, refleksji nad tajemnicami życia Chrystusa i Maryi,
                oraz budowania braterskiej wspólnoty.
              </p>
              <p>
                Serdecznie zapraszamy wszystkich mężczyzn do dołączenia do
                naszej grupy i wspólnego odkrywania głębi modlitwy różańcowej.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
