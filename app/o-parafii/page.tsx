import Image from "next/image";

export default function AboutParish() {
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">O parafii</h1>
        <article className="flex flex-col md:flex-row gap-6 items-center">
          <Image
            src="/images/pic21.jpg"
            alt="Kościół parafialny"
            width={400}
            height={500}
            className="rounded-lg object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold mb-4">Krótka historia parafii</h2>
            <p>Historia parafii sięga 1989 roku. Z powodu rozległości i ilości wiernych parafii pw. św. Katarzyny, biskup ordynariusz Stanisław Nowak zlecił stworzenie wikariatu terenowego. Pierwszy jego duszpasterz – ksiądz Leszek Kołczyk, pozyskał od dyrekcji kopalni &quot;Grodziec&quot; lokal dla tworzącej się parafii.</p>
            <p>Pierwsza kaplica założona została w baraku otrzymanym z parafii św. Krzysztofa w Tychach. Już w 1990 odprawiono tam pierwszą mszę i wybrano błogosławionego Honorata Koźmińskiego na patrona nowo powstającej parafii.</p>
            <p>Równo w nowej parafii zaczęto budowę nowego kościoła. Delegacja parafian spotkała się z Ojcem Świętym Janem Pawłem II, by ten pobłogosławił kamień węgielny. Uroczystego wmurowania kamienia dokonał biskup nowo utworzonej diecezji sosnowieckiej Adam Śmigielski.</p>
            <p>Po prawie dziesięciu latach udało się zakończyć budowę. Kościół ma plan sześciokąta foremnego i może pomieścić około 500 osób. Szybka i sprawna budowa udała się dzięki wspaniałej ofiarności parafian. W 2000 roku nastąpiła uroczysta konsekracja świątyni.</p>
          </div>
        </article>

        <h2 className="text-xl font-bold mt-8">Nasi Księża</h2>
        <article className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/priestpic1.jpg"
              alt="Ksiądz Proboszcz Marek Zaręba"
              width={200}
              height={280}
              className="rounded-lg object-cover"
            />
            <h3 className="font-semibold mt-2">Ksiądz Proboszcz Marek Zaręba</h3>
            <p>Tel: 690-649-750</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/priestpic2.jpg"
              alt="Ksiądz Wikariusz Janusz Pieśniewski"
              width={200}
              height={280}
              className="rounded-lg object-cover"
            />
            <h3 className="font-semibold mt-2">Ksiądz Wikariusz Janusz Pieśniewski</h3>
            <p>Tel: 503-605-330</p>
          </div>
        </article>

        <article className="flex flex-col md:flex-row gap-6 items-center mt-4">
          <Image
            src="/images/pic21.jpg"
            alt="Kościół parafialny"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">Byli proboszczowie</h3>
            <ul className="list-disc list-inside mb-4">
              <li>ks. Leszek Kołczyk</li>
              <li>ks. Andrzej Gliszta</li>
              <li>ks. Czesław Mielczarek</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">Byli wikariusze</h3>
            <ul className="list-disc list-inside">
              <li>ks. Krzysztof Słomian</li>
              <li>ks. Mariusz Smętek</li>
              <li>ks. Dariusz Grojec</li>
              <li>ks. Tomasz Kaczur</li>
              <li>ks. Andrzej Uliniarz</li>
              <li>ks. Gerard Małodobry</li>
              <li>ks. Władysław Barcicki</li>
            </ul>
          </div>
        </article>
      </main>
    );
  }
