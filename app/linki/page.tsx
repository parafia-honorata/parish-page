import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import basePath from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Parafia Honorata | Linki",
  description:
    "Przydatne linki religijne i katolickie. Strona diecezji, Pismo Święte online, portale katolickie i profile społecznościowe parafii.",
};

const links = [
  {
    title: "Strona diecezji",
    url: "http://diecezja.sosnowiec.pl/",
    description: "Oficjalna strona Diecezji Sosnowieckiej",
  },
  {
    title: "Pismo Święte",
    url: "https://biblia.deon.pl/",
    description: "Biblia online na portalu Deon",
  },
  {
    title: "Wiara.pl",
    url: "https://www.wiara.pl/",
    description: "Portal informacyjny o tematyce religijnej",
  },
  {
    title: "Modlitwa.pl",
    url: "http://modlitwa.pl/",
    description: "Serwis poświęcony modlitwie",
  },
  {
    title: "Katolik.pl",
    url: "https://www.katolik.pl/?nom=1",
    description: "Portal katolicki",
  },
  {
    title: "Teologia.pl",
    url: "https://www.teologia.pl/",
    description: "Serwis teologiczny",
  },
  {
    title: "Opoka.org.pl",
    url: "https://opoka.org.pl/",
    description: "Katolicki serwis informacyjny",
  },
  {
    title: "Niezbędnik Niedzieli",
    url: "https://niezbednik.niedziela.pl/",
    description: "Praktyczne materiały liturgiczne",
  },
  {
    title: "Grupy Rodzinne Al-Anon",
    url: "https://al-anon.org.pl/informacje-dla-sluzby/",
    description: "Wsparcie dla rodzin osób uzależnionych",
  },
  {
    title: "Christianitas",
    url: "https://christianitas.org/",
    description: "Pismo poświęcone tradycji katolickiej",
  },
  {
    title: "Nasz profil Facebookowy",
    url: "https://www.facebook.com/ParafiaHonorata/",
    description: "Oficjalny profil parafii na Facebooku",
  },
  {
    title: "Standardy Ochrony Dzieci w parafii",
    url: "https://docs.google.com/document/d/11ABUCQNt68bjKYfPFnjRa4e7iGpvTIMm/edit?usp=sharing&ouid=117760918704177320189&rtpof=true&sd=true",
    description: "Dokument dotyczący ochrony małoletnich",
  },
];

export default function Links() {
  return (
    <main className="flex flex-col gap-8 md:gap-12">
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
          <div className="w-full sm:w-auto flex-shrink-0">
            <Image
              src={`${basePath}/images/stockpic2.jpg`}
              alt="Przydatne linki"
              width={320}
              height={420}
              className="rounded-lg object-cover w-full sm:w-[320px] h-auto shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
              Przydatne linki
            </h1>
            <div className="grid gap-3">
              {links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </span>
                    <p className="text-sm text-muted-foreground mt-0.5">
                      {link.description}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
