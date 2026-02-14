import MassesAndOffice from "@/components/MassesAndOffice";
import HeroGallery from "@/components/HeroGallery";
import FlashNews from "@/components/FlashNews";
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
