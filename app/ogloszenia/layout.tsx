import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parafia Honorata | Ogłoszenia",
};

export default function OgloszeniaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
