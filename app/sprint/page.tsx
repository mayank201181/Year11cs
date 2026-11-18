import type { Metadata } from "next";
import { SprintRunner } from "@/components/SprintRunner";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "60s Fluency Sprint",
  description: "60-second Fluency Sprint — quick-fire recall of CIE 0478 binary/hex, Two's Complement, registers, logic gates, pseudocode & SQL.",
};

export default function SprintPage() {
  return <SprintRunner />;
}
