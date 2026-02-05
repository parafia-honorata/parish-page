import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parafia Honorata | Intencje",
  description:
    "Intencje mszalne w parafii pw. bł. Honorata Koźmińskiego. Sprawdź aktualne intencje na Msze Święte w naszym kościele.",
};

export default function IntencjeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
