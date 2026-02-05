import Image from "next/image";
import { Phone } from "lucide-react";

export default function AboutParish() {
  return (
    <main className="flex flex-col gap-8 md:gap-12">
      {/* Parish History */}
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
          <div className="w-full sm:w-auto flex-shrink-0">
            <Image
              src="/images/pic21.jpg"
              alt="Kościół parafialny"
              width={320}
              height={420}
              className="rounded-lg object-cover w-full sm:w-[320px] h-auto shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              O parafii
            </h1>
            <h2 className="text-lg sm:text-xl font-medium text-foreground mb-4">
              Krótka historia parafii
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Historia parafii sięga 1989 roku. Z powodu rozległości i ilości
                wiernych parafii pw. św. Katarzyny, biskup ordynariusz Stanisław
                Nowak zlecił stworzenie wikariatu terenowego. Pierwszy jego
                duszpasterz – ksiądz Leszek Kołczyk, pozyskał od dyrekcji kopalni
                &quot;Grodziec&quot; lokal dla tworzącej się parafii.
              </p>
              <p>
                Pierwsza kaplica założona została w baraku otrzymanym z parafii
                św. Krzysztofa w Tychach. Już w 1990 odprawiono tam pierwszą mszę
                i wybrano błogosławionego Honorata Koźmińskiego na patrona nowo
                powstającej parafii.
              </p>
              <p>
                Równo w nowej parafii zaczęto budowę nowego kościoła. Delegacja
                parafian spotkała się z Ojcem Świętym Janem Pawłem II, by ten
                pobłogosławił kamień węgielny. Uroczystego wmurowania kamienia
                dokonał biskup nowo utworzonej diecezji sosnowieckiej Adam
                Śmigielski.
              </p>
              <p>
                Po prawie dziesięciu latach udało się zakończyć budowę. Kościół
                ma plan sześciokąta foremnego i może pomieścić około 500 osób.
                Szybka i sprawna budowa udała się dzięki wspaniałej ofiarności
                parafian. W 2000 roku nastąpiła uroczysta konsekracja świątyni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Priests */}
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6 text-center">
          Nasi Księża
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center items-center sm:items-start">
          <div className="flex flex-col items-center text-center max-w-[240px]">
            <Image
              src="/images/priestpic1.jpg"
              alt="Ksiądz Proboszcz Marek Zaręba"
              width={200}
              height={280}
              className="rounded-lg object-cover shadow-md mb-4"
            />
            <h3 className="font-semibold text-foreground text-lg">
              Ksiądz Proboszcz Marek Zaręba
            </h3>
            <div className="flex items-center gap-2 mt-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+48690649750" className="hover:underline">
                690-649-750
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center text-center max-w-[240px]">
            <Image
              src="/images/priestpic2.jpg"
              alt="Ksiądz Wikariusz Janusz Pieśniewski"
              width={200}
              height={280}
              className="rounded-lg object-cover shadow-md mb-4"
            />
            <h3 className="font-semibold text-foreground text-lg">
              Ksiądz Wikariusz Janusz Pieśniewski
            </h3>
            <div className="flex items-center gap-2 mt-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <a href="tel:+48503605330" className="hover:underline">
                503-605-330
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Former Priests */}
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-10 items-center lg:items-start">
          <div className="w-full sm:w-auto flex-shrink-0">
            <Image
              src="/images/stockpic3.jpg"
              alt="Wnętrze kościoła"
              width={320}
              height={420}
              className="rounded-lg object-cover w-full sm:w-[320px] h-auto shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
              Historia duszpasterstwa
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Byli proboszczowie
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Leszek Kołczyk
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Andrzej Gliszta
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Czesław Mielczarek
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-foreground mb-3">
                  Byli wikariusze
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Krzysztof Słomian
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Mariusz Smętek
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Dariusz Grojec
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Tomasz Kaczur
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Andrzej Uliniarz
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Gerard Małodobry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    ks. Władysław Barcicki
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
