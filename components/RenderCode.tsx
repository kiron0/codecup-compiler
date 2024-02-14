"use client"

import { useAppSelector } from "@/redux/hooks/hook";
import { RootState } from "@/redux/store";

export default function RenderCode() {
  const fullCode = useAppSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const config = useAppSelector(
    (state: RootState) => state.compilerSlice.config
  );

  const combinedCode = `
  <!DOCTYPE html>
  <html>
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ${config.html}
      <style>${fullCode.css}</style>
    </head>
    <body>
      ${fullCode.html}
    </body>
    <script>${fullCode.javascript}</script>
    ${config.javascript}
  </html>`;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;

  return (
    <div className="bg-white h-screen">
      <iframe
        src={iframeCode}
        title="Rendered code"
        className="w-full h-full"
      ></iframe>
    </div>
  );
}
