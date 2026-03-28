import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parafia Honorata | Dodatkowe ogłoszenia",
  description:
    "Dodatkowe ogłoszenia parafialne. Informacje o wydarzeniach, nabożeństwach i ważnych sprawach parafii pw. bł. Honorata Koźmińskiego w Będzinie-Grodźcu.",
};

export default function DodatkoweOgloszeniaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
