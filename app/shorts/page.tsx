import { Suspense } from "react";
import type { Metadata } from "next";
import { ShortsHub } from "@/components/ShortsHub";

export const metadata: Metadata = {
  title: "Concept Shorts — Year 11 IGCSE CS (0478)",
  description: "Bite-sized concept Shorts for every Cambridge IGCSE Computer Science (0478) topic.",
};

export default function ShortsPage() {
  return (
    <Suspense fallback={<p className="p-6">Loading Concept Shorts…</p>}>
      <ShortsHub subjectLabel="IGCSE CS (0478)" />
    </Suspense>
  );
}
