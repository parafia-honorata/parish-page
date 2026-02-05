import MassesAndOffice from "@/components/MassesAndOffice";
import HeroGallery from "@/components/HeroGallery";
import FlashNews from "@/components/FlashNews";
import Image from "next/image";
import { MapPin, Mail, Phone, CreditCard } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 md:gap-12">
      <HeroGallery />

      {/* Flash News */}
      <FlashNews />

      {/* Masses and Office Schedule */}
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <MassesAndOffice />
      </section>

      {/* About the Parish */}
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-center lg:items-start">
          <div className="w-full sm:w-auto flex-shrink-0">
            <Image
              src="/images/pic5.jpg"
              alt="Kościół parafialny"
              width={320}
              height={420}
              className="rounded-lg object-cover w-full sm:w-[320px] h-auto shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              O parafii
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Parafia pw. błogosławionego Honorata Koźmińskiego została powołana
                stosunkowo niedawno i jest najmłodszą parafią w Będzinie-Grodźcu.
                Założono ją w celu posługi duszpasterskiej dla mieszkańców
                kopalnianego osiedla przy ulicy Konopnickiej.
              </p>
              <p>
                Choć ustanowienia parafii dokonał biskup częstochowski Stanisław
                Nowak, obecnie należy ona do Diecezji Sosnowieckiej. Biskup Adam
                Śmigielski dokonał jej uroczystej konsekracji 15 października 2000 r.
              </p>
              <p>
                W parafii działa Koło Żywego Różańca. W każdą środę zmawiana jest
                Nowenna do Matki Bożej Nieustającej pomocy, a w piątki Koronka do
                Bożego Miłosierdzia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blessed Honorat */}
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col lg:flex-row-reverse gap-6 lg:gap-10 items-center lg:items-start">
          <div className="w-full sm:w-auto flex-shrink-0">
            <Image
              src="/images/honorat.jpg"
              alt="Błogosławiony Honorat Koźmiński"
              width={320}
              height={420}
              className="rounded-lg object-cover w-full sm:w-[320px] h-auto shadow-md"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Błogosławiony Honorat Koźmiński
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Życie błogosławionego Honorata pokazuje, że Pan Bóg ma dla każdego z
                nas plan, oraz że drogę do świętości poprzedza czasem zwątpienie i
                kryzys wiary. Buntownik z pobożnej inteligenckiej rodziny stał się
                jedną z najważniejszych postaci życia religijnego polaków pod zaborami.
              </p>
              <p>
                W młodości, idąc za przykładem ojca, uczył się na architekta. Wstąpił
                do płockiego gimnazjum. Zostaje doświadczony na wiele sposobów,
                młodzieńczym niedowiarstwem, przedwczesną śmiercią ojca, a wreszcie
                wtrąceniem do carskiego więzienia. Z warszawskiej Cytadeli wyszedł
                odmieniony. Po przeżytym nawróceniu stał się spokojny i pogodzony z
                Bogiem. Niedługo później rozpoczął swoje życie zakonne jako Kapucyn.
              </p>
              <p>
                W trudnych warunkach zaborów, nieustannie podejrzewany przez władzę
                rosyjskie o działalność wywrotową i konspirację, założył 23
                zgromadzenia zakonne i 26 stowarzyszeń tercjarskich. Jednocześnie też
                promował ukryte zgromadzenia zakonne, jako formę oporu wobec rosyjskiej
                opresji. Był uznanym spowiednikiem, tytanem pracy i niestrudzonym
                organizatorem. Zmarł w 1916 r. w opinii świętości.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Location */}
      <section className="bg-card rounded-xl border border-border p-6 sm:p-8 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
          Kontakt i lokalizacja
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2550!2d19.0796174!3d50.3553147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d134aa59bc3d%3A0xd7b96cb54ef11ff8!2sKo%C5%9Bci%C3%B3%C5%82%20Rzymskokatolicki%20pw.%20b%C5%82.%20Honorata%20Ko%C5%BAmi%C5%84skiego%20w%20B%C4%99dzinie!5e0!3m2!1spl!2spl"
              className="w-full h-[280px] sm:h-[320px] rounded-lg border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa lokalizacji parafii"
            />
          </div>
          <div className="flex-1 space-y-6">
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Marii Konopnickiej 11A</p>
                  <p className="text-muted-foreground">42-506 Będzin</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:parafiahonorat@gmail.com"
                  className="text-primary hover:underline"
                >
                  parafiahonorat@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+48690649750" className="text-foreground hover:underline">
                  690-649-750
                </a>
              </div>
            </address>

            <div className="pt-4 border-t border-border">
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground mb-1">Numer konta:</p>
                  <p className="text-muted-foreground font-mono text-sm sm:text-base">
                    77 8591 0007 0410 0690 4678 0002
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Przelewy prosimy składać z dopiskiem &quot;Darowizna&quot;.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 italic">
                    Za wszelkie datki serdeczne Bóg zapłać!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
