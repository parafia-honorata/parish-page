import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parafia Honorata | Intencje",
};

export default function IntencjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
