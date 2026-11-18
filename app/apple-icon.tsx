// iOS home-screen icon: silicon CPU chip + Y11 badge.
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0e7490 0%, #4f46e5 100%)",
        }}
      >
        <svg width={96} height={96} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <g fill="none" stroke="#ffffff" strokeWidth={8} strokeLinecap="round" strokeLinejoin="round">
            <rect x="24" y="24" width="52" height="52" rx="10" />
            <rect x="38" y="38" width="24" height="24" rx="4" />
            <path d="M36 12v12M50 12v12M64 12v12M36 76v12M50 76v12M64 76v12M12 36h12M12 50h12M12 64h12M76 36h12M76 50h12M76 64h12" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: "#0e7490",
            fontSize: 21,
            fontWeight: 800,
            letterSpacing: 1.5,
          }}
        >
          Y11 CS
        </div>
      </div>
    ),
    { ...size },
  );
}
