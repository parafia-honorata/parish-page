import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parafia Honorata | Koło Biblijne",
  description:
    "Koło Biblijne w parafii pw. bł. Honorata Koźmińskiego. Spotkania w bibliotece parafialnej, wspólne czytanie Pisma Świętego i dzielenie się refleksjami.",
};

export default function KoloBiblijneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
