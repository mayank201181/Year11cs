import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { PrintStyles } from "@/components/Certificate";
import { FormulasVault, type VaultTopicData } from "@/components/FormulasVault";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "CIE 0478 Exam Traps, Pseudocode & SQL Vault",
  description: "Every Cambridge IGCSE Computer Science (0478) mark-scheme trap (Never Write This → Write This Instead), pseudocode syntax rule, SQL query pattern and hardware formula in one printable sheet.",
};

export default function FormulasPage() {
  const vaultTopics: VaultTopicData[] = TOPICS.map((t) => ({
    id: t.id,
    title: t.title,
    icon: t.icon,
    strand: t.strand,
    misconceptions: t.learn?.misconceptions ?? [],
    examMistakes: t.learn?.examMistakes ?? [],
    formulas: t.learn?.formulas ?? [],
  }));

  return (
    <>
      <PrintStyles orientation="portrait" margin="12mm" />
      <FormulasVault topics={vaultTopics} />
    </>
  );
}
