"use client"

import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { CompilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DownloadDialog from "./download-dialog";

export default function HelperHeader() {
  const dispatch = useAppDispatch();

  const currentLanguage = useAppSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  const fullCode = useAppSelector(
    (state: RootState) => state.compilerSlice.fullCode
  );

  return (
    <div className="h-[50px] bg-black/35 text-white p-2 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Link href='/' className="flex justify-end">
          <Image src={Logo} alt="CodeCup Compiler" className="w-12" />
        </Link>
        {
          fullCode.html !== "" || fullCode.css !== "" || fullCode.javascript !== "" ? (
            <DownloadDialog button={
              <Button
                variant="outline"
                className="px-3.5 bg-transparent"
              >
                <Download size={15} />
              </Button>
            } />
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
