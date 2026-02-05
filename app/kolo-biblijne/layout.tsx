import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parafia Honorata | Koło Biblijne",
};

export default function KoloBiblijneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
