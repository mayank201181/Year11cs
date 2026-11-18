// Browser-tab icon: rounded indigo/cyan square with a crisp CPU chip glyph.
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0e7490 0%, #4f46e5 100%)",
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="#ffffff" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round">
            <rect x="24" y="24" width="52" height="52" rx="10" />
            <rect x="40" y="40" width="20" height="20" rx="3" />
            <path d="M36 10v14M64 10v14M36 76v14M64 76v14M10 36h14M10 64h14M76 36h14M76 64h14" />
          </g>
        </svg>
      </div>
    ),
    { ...size },
  );
}
