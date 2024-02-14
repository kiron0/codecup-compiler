"use client"

import { Button } from "@/components/ui/button";
import { Code, Copy, Save, Share2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { useState } from "react";
import { toast } from "sonner";

export default function HelperHeader() {
  const [shareBtn, setShareBtn] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const currentLanguage = useAppSelector(
    (state: RootState) => state.compilerSlice.currentLanguage
  );

  return (
    <div className="h-[50px] bg-black/35 text-white p-2 flex justify-between items-center">
      <div className="flex gap-1">
        <Button
          className="flex justify-center items-center gap-1"
          variant="secondary"
          size="icon"
        >
          <Save size={16} />
        </Button>
        {shareBtn && (
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="secondary">
                <Share2 size={16} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="flex gap-1 justify-center items-center">
                  <Code />
                  Share your Code!
                </DialogTitle>
                <div className="flex justify-center items-center gap-1">
                  <input
                    type="text"
                    disabled
                    className="w-full p-2 rounded bg-slate-800 text-slate-400 select-none"
                    value={window.location.href}
                  />
                  <Button
                    variant="outline"
                    className="h-full"
                    onClick={() => {
                      window.navigator.clipboard.writeText(
                        window.location.href
                      );
                      toast("URL Copied to your clipboard!");
                    }}
                  >
                    <Copy size={14} />
                  </Button>
                </div>
                <p className="text-center text-slate-400 text-xs">
                  Share this URL with your friends to collaborate.
                </p>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <div className="flex justify-center items-center gap-1">
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
          <SelectTrigger className="w-[120px] bg-gray-800 outline-none focus:ring-0">
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
