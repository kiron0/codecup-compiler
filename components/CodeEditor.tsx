"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { updateCodeValue } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
// import { andromedaInit } from "@uiw/codemirror-theme-andromeda";
// import { copilotInit } from "@uiw/codemirror-theme-copilot";
// import { draculaInit } from "@uiw/codemirror-theme-dracula";
// import { nordInit } from "@uiw/codemirror-theme-nord";
import { tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback } from "react";

export default function CodeEditor() {
  const dispatch = useAppDispatch();

  const currentLanguage = useAppSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useAppSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const onChange = useCallback((value: string) => {
    dispatch(updateCodeValue(value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CodeMirror
      value={fullCode[currentLanguage]}
      height="calc(100vh - 50px)"
      extensions={[loadLanguage(currentLanguage)!]}
      onChange={onChange}
      theme={tokyoNightInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}
