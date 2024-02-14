"use client"

import { Button } from "@/components/ui/button";
import { Bolt, Home } from "lucide-react";
import Link from "next/link";
import SettingDialog from "./SettingDialog";

export default function BottomNav() {
          return (
                    <div className="absolute bottom-0 left-4 mb-4">
                              <div className="w-full h-full flex justify-center items-center gap-5 text-white bg-black/35 px-4 py-2 rounded-xl shadow-lg">
                                        <Link href="/">
                                                  <Button variant="ghost" size="icon" className="hover:bg-transparent">
                                                            <Home size={20} />
                                                  </Button>
                                        </Link>
                                        <SettingDialog
                                                  button={<Button variant="ghost" size="icon" className="hover:bg-transparent">
                                                            <Bolt size={20} />
                                                  </Button>}
                                        />
                              </div>
                    </div>
          )
}