import type { MetadataRoute } from "next";

// Web app manifest: makes IGCSE CS 0478 installable on iPad ("Add to Home Screen").
export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 11 IGCSE Computer Science (0478)",
    short_name: "IGCSE CS 0478",
    description: "Cambridge IGCSE Computer Science (0478) — discovery lessons, CIE mark-scheme traps, interactive hardware/logic/SQL labs, drills, mock papers and narrated sitcoms.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f5f6fb",
    theme_color: "#0e7490",
    categories: ["education"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
