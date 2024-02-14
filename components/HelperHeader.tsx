"use client"

import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { CompilerSliceStateType, updateCurrentLanguage } from "@/redux/slices/compilerSlice";
import { RootState } from "@/redux/store";

export default function HelperHeader() {
  const dispatch = useAppDispatch();

  const currentLanguage = useAppSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  return (
    <div className="h-[50px] bg-black/35 text-white p-2 flex justify-between items-center">
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
      <div className="flex gap-1">
        <Button
          className="flex justify-center items-center gap-1"
          variant="secondary"
          size="icon"
        >
          <Save size={16} />
        </Button>
      </div>
    </div>
  );
}
