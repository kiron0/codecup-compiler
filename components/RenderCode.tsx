"use client"

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function RenderCode() {
  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const combinedCode = `
  <html>
    <head>
      <style>${fullCode.css}</style>
    </head>
    <body>
      ${fullCode.html}
    </body>
    <script>${fullCode.javascript}</script>
  </html>`;

  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;

  return (
    <div className="bg-white h-screen">
      <iframe className="w-full h-full" src={iframeCode} />
    </div>
  );
}
