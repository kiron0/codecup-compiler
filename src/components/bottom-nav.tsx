"use client"

import DevDialog from "@/components/dev-dialog";
import SettingDialog from "@/components/setting-dialog";
import { Button } from "@/components/ui/button";
import { Bolt, Code2, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
          const pathname = usePathname();

          return (
                    <div className={`${pathname === '/project' ? 'absolute bottom-16 md:bottom-0 right-4 mb-4' : 'flex justify-center items-center mt-5'}`}>
                              <div className={`flex justify-center items-center gap-3 ${pathname === '/project' ? ' px-4 py-2' : 'px-2 py-1'} rounded-xl border border-input bg-background shadow-sm sm:hover:bg-accent sm:hover:text-accent-foreground duration-300`}>
                                        {
                                                  pathname === "/project" ? (
                                                            <>
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
                                                            </>
                                                  ) : (
                                                            <>
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
                                                            </>
                                                  )
                                        }
                              </div>
                    </div>
          )
}