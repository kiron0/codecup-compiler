"use client"

import { Button } from "@/components/ui/button"
import {
          Dialog,
          DialogContent,
          DialogDescription,
          DialogFooter,
          DialogHeader,
          DialogTitle,
          DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"

export default function SettingDialog({ button }: { button: ReactNode }) {
          return (
                    <Dialog>
                              <DialogTrigger asChild>
                                        {button}
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                                  <DialogTitle>Edit profile</DialogTitle>
                                                  <DialogDescription>
                                                            Make changes to your profile here. Click save when you&lsquo;re done.
                                                  </DialogDescription>
                                        </DialogHeader>
                                        <div>
                                                  <h1>Settings</h1>
                                        </div>
                                        <DialogFooter>
                                                  <Button type="submit">Save changes</Button>
                                        </DialogFooter>
                              </DialogContent>
                    </Dialog>
          )
}