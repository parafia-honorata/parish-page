import Image from "next/image";

export default function LivingRosary() {
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Żywy Różaniec</h1>
        <article className="flex flex-col md:flex-row gap-6 items-center">
          <Image
            src="/images/rosarypic.jpg"
            alt="Różaniec"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div>
            <p>Aktywna grupa żywego różańca zaprasza do dołączenia i wspólnej modlitwy.</p>
          </div>
        </article>
      </main>
    );
  }
