import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default async function Icon() {
  const fontData = await readFile(
    join(process.cwd(), "assets/fonts/BigShoulders-Black.woff")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070c13",
          borderRadius: 12,
        }}
      >
        <span
          style={{
            fontFamily: "Big Shoulders",
            fontWeight: 900,
            fontSize: 46,
            lineHeight: 1,
            color: "#ebeff4",
            transform: "translateY(2px)",
          }}
        >
          C
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Big Shoulders",
          data: fontData,
          weight: 900,
          style: "normal",
        },
      ],
    }
  );
}
