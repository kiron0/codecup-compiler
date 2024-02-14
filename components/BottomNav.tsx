"use client"

import DevDialog from "@/components/DevDialog";
import SettingDialog from "@/components/SettingDialog";
import { Button } from "@/components/ui/button";
import { Bolt, Code2, Home } from "lucide-react";
import Link from "next/link";

export default function BottomNav() {
          return (
                    <div className="absolute bottom-0 left-4 mb-4">
                              <div className="w-full h-full flex justify-center items-center gap-3 px-4 py-2 rounded-xl border border-input bg-background shadow-sm sm:hover:bg-accent sm:hover:text-accent-foreground duration-300">
                                        <SettingDialog
                                                  button={<Button variant="ghost" size="icon" className="hover:bg-transparent">
                                                            <Bolt size={20} />
                                                  </Button>}
                                        />
                                        <Link href="/">
                                                  <Button variant="ghost" size="icon" className="hover:bg-transparent">
                                                            <Home size={20} />
                                                  </Button>
                                        </Link>
                                        <DevDialog
                                                  button={<Button variant="ghost" size="icon" className="hover:bg-transparent">
                                                            <Code2 size={20} />
                                                  </Button>}
                                        />
                              </div>
                    </div>
          )
}