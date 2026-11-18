import { Suspense } from "react";
import type { Metadata } from "next";
import { TOPICS } from "@/lib/server/content";
import { buildTopicCramPack } from "@/lib/cram";
import { CramSheet } from "@/components/CramSheet";

export const metadata: Metadata = {
  title: "Exam Cram Sheet — Year 11 IGCSE Computer Science (0478)",
  description: "Select any Paper 1 or Paper 2 topics in your test for an instant CIE 0478 Exam Cram & Mark-Savers Sheet.",
};

export default function CramPage() {
  const packs = TOPICS.map(buildTopicCramPack);
  return (
    <Suspense fallback={<p className="p-6 text-ink-2">Building CIE 0478 Exam Cram Sheet…</p>}>
      <CramSheet packs={packs} subjectLabel="Year 11 IGCSE Computer Science (0478)" />
    </Suspense>
  );
}
