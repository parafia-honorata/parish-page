import Image from "next/image";

export default function MenRosary() {
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Różaniec mężczyzn</h1>
        <article className="flex flex-col md:flex-row gap-6 items-center">
          <Image
            src="/images/rosarypic.jpg"
            alt="Różaniec"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div>
            <p>Grupa różańcowa mężczyzn zaprasza do wspólnej modlitwy.</p>
          </div>
        </article>
      </main>
    );
  }
