"use client"

import Logo from "@/assets/logo.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getTemplate } from "@/lib/template";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { CompilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "./ui/button";

export default function HelperHeader() {
  const dispatch = useAppDispatch();

  const currentLanguage = useAppSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useAppSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  const config = useAppSelector(
    (state: RootState) => state.compilerSlice.config
  );

  const handleDownloadCode = () => {
    if (
      fullCode.html === "" &&
      fullCode.css === "" &&
      fullCode.javascript === ""
    ) {
      toast.error("Code is Empty");
    } else {
      const htmlTemplate = getTemplate(fullCode, config);

      const htmlCode = new Blob([htmlTemplate], { type: "text/html" });
      const cssCode = new Blob([fullCode.css], { type: "text/css" });
      const javascriptCode = new Blob([fullCode.javascript], {
        type: "text/javascript",
      });

      const htmlLink = document.createElement("a");
      const cssLink = document.createElement("a");
      const javascriptLink = document.createElement("a");

      htmlLink.href = URL.createObjectURL(htmlCode);
      htmlLink.download = "index.html";
      document.body.appendChild(htmlLink);

      cssLink.href = URL.createObjectURL(cssCode);
      cssLink.download = "style.css";
      document.body.appendChild(cssLink);

      javascriptLink.href = URL.createObjectURL(javascriptCode);
      javascriptLink.download = "script.js";
      document.body.appendChild(javascriptLink);

      if (fullCode.html !== "") {
        htmlLink.click();
      }
      if (fullCode.css !== "") {
        cssLink.click();
      }
      if (fullCode.javascript !== "") {
        javascriptLink.click();
      }

      document.body.removeChild(htmlLink);
      document.body.removeChild(cssLink);
      document.body.removeChild(javascriptLink);

      toast.success("Code Downloaded Successfully!", {
        style: {
          color: "white",
          background: "#020817",
          border: "none"
        },
      });
    }
  };

  return (
    <div className="h-[50px] bg-black/35 text-white p-2 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Link href='/' className="flex justify-end">
          <Image src={Logo} alt="CodeCup Compiler" className="w-12" />
        </Link>
        {
          fullCode.html !== "" || fullCode.css !== "" || fullCode.javascript !== "" ? (
            <Button
              variant="outline"
              onClick={handleDownloadCode}
              className="px-3.5 bg-transparent"
            >
              <Download size={15} />
            </Button>
          ) : null
        }
      </div>
      <div className="flex justify-center items-center gap-2">
        <small className="hidden sm:block">Current Language: </small>
        <Select
          defaultValue={currentLanguage}
          onValueChange={(value) =>
            dispatch(
              updateCurrentLanguage(
                value as CompilerSliceStateType["currentLanguage"]
              )
            )
          }
        >
          <SelectTrigger className="w-[120px] outline-none focus:ring-0">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="html">HTML</SelectItem>
            <SelectItem value="css">CSS</SelectItem>
            <SelectItem value="javascript">JavaScript</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
