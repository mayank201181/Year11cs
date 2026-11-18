import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/lib/store";
import { AppGate } from "@/components/AppGate";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Year 11 IGCSE Computer Science (0478)", template: "%s · Year 11 IGCSE CS (0478)" },
  description: "Vanishree's Cambridge IGCSE Computer Science (0478) hub — AoPS discovery lessons, CIE mark-scheme traps, interactive hardware/logic/SQL labs, skill drills, mock papers and narrated sitcoms.",
  applicationName: "IGCSE CS 0478",
  appleWebApp: { capable: true, statusBarStyle: "default", title: "IGCSE CS 0478" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0e7490" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1020" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Apply a saved theme before paint (no flash).
const themeScript = `try{var t=localStorage.getItem("y11cs.theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={nunito.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">
        <ErrorBoundary>
          <StoreProvider>
            <AppGate>{children}</AppGate>
          </StoreProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
