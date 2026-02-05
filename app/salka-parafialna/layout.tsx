import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parafia Honorata | Salka parafialna",
};

export default function SalkaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
