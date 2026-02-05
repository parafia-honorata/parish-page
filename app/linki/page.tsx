import Image from "next/image";

export default function Links() {
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Przydatne linki</h1>
        <article className="flex flex-col md:flex-row gap-6 items-center">
          <Image
            src="/images/stockpic2.jpg"
            alt="Kościół"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div>
            <ul className="list-disc list-inside space-y-2">
              <li><a href="http://diecezja.sosnowiec.pl/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Strona diecezji</a></li>
              <li><a href="https://biblia.deon.pl/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Pismo Święte</a></li>
              <li><a href="https://www.wiara.pl/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Wiara.pl</a></li>
              <li><a href="http://modlitwa.pl/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Modlitwa.pl</a></li>
              <li><a href="https://www.katolik.pl/?nom=1" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Katolik.pl</a></li>
              <li><a href="https://www.teologia.pl/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Teologia.pl</a></li>
              <li><a href="https://opoka.org.pl/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Opoka.org.pl</a></li>
              <li><a href="https://niezbednik.niedziela.pl/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Niezbędnik Niedzieli</a></li>
              <li><a href="https://al-anon.org.pl/informacje-dla-sluzby/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Grupy Rodzinne Al-Anon</a></li>
              <li><a href="https://christianitas.org/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Christianitas</a></li>
              <li><a href="https://www.facebook.com/ParafiaHonorata/" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Nasz profil Facebookowy</a></li>
              <li><a href="https://docs.google.com/document/d/11ABUCQNt68bjKYfPFnjRa4e7iGpvTIMm/edit?usp=sharing&ouid=117760918704177320189&rtpof=true&sd=true" rel="noreferrer" target="_blank" className="text-blue-600 hover:underline">Standardy Ochrony Dzieci w parafii</a></li>
            </ul>
          </div>
        </article>
      </main>
    );
  }
