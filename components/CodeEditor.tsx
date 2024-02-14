"use client"

import { updateCodeValue } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { draculaInit } from "@uiw/codemirror-theme-dracula";
import CodeMirror from "@uiw/react-codemirror";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CodeEditor() {
  const currentLanguage = useSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const dispatch = useDispatch();

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
      theme={draculaInit({
        settings: {
          caret: "#c6c6c6",
          fontFamily: "monospace",
        },
        styles: [{ tag: t.comment, color: "#6272a4" }],
      })}
    />
  );
}
