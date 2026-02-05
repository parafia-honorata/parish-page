import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parafia Honorata | Żywy Różaniec",
  description:
    "Żywy Różaniec w parafii pw. bł. Honorata Koźmińskiego. Dołącz do wspólnoty modlitewnej i odmawiaj codziennie jedną tajemnicę różańcową w intencjach Kościoła i świata.",
};

export default function LivingRosary() {
  return (
    <main className="flex flex-col gap-8 md:gap-12">
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
          <div className="w-full sm:w-auto flex-shrink-0">
            <Image
              src="/images/rosarypic.jpg"
              alt="Różaniec"
              width={320}
              height={420}
              className="rounded-lg object-cover w-full sm:w-[320px] h-auto shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Żywy Różaniec
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Aktywna grupa żywego różańca zaprasza do dołączenia i wspólnej
                modlitwy. Żywy Różaniec to wspólnota osób, które modlą się na
                różańcu w intencjach Kościoła i świata.
              </p>
              <p>
                Każdy członek Żywego Różańca odmawia codziennie jedną tajemnicę
                różańcową. Raz w miesiącu następuje zmiana tajemnic, dzięki
                czemu w ciągu roku każdy członek odmawia wszystkie tajemnice
                różańcowe.
              </p>
              <p>
                Serdecznie zapraszamy wszystkich chętnych do włączenia się w tę
                piękną formę modlitwy maryjnej.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
