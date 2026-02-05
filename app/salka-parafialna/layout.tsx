import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parafia Honorata | Salka parafialna",
  description:
    "Salka parafialna przy kościele pw. bł. Honorata Koźmińskiego. Stoły do ping-ponga i piłkarzyków. Informacje o dostępności i kontakt.",
};

export default function SalkaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
