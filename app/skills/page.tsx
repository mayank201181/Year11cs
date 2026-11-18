import type { Metadata } from "next";
import { SkillsMap } from "@/components/SkillsMap";
import { TOPICS } from "@/lib/server/content";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Skills & Procedural Drills",
  description: "Every Year 11 IGCSE Computer Science (0478) procedural skill across Paper 1 and Paper 2 — from binary/hex & KiB maths to truth tables, trace tables and SQL.",
};

export default function SkillsPage() {
  return <SkillsMap readyTopicIds={TOPICS.map((t) => t.id)} />;
}
