"use client"

import ConfigForm from "@/components/ConfigForm"
import { Card } from "@/components/ui/card"
import {
          Dialog,
          DialogContent,
          DialogDescription,
          DialogHeader,
          DialogTitle,
          DialogTrigger
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { htmlConfigSchema } from "@/lib/schema/htmlConfig.schema"
import { jsConfigSchema } from "@/lib/schema/jsConfig.schema"
import { useAppDispatch } from "@/redux/hooks/hook"
import { AppSliceStateType, updateTheme } from "@/redux/slices/appSlice"
import { ReactNode } from "react"

export default function SettingDialog({ button }: { button: ReactNode }) {
          const dispatch = useAppDispatch();

          const handleAddTheme = (e: AppSliceStateType["theme"]) => {
                    dispatch(updateTheme(e))
          }

          return (
                    <Dialog>
                              <DialogTrigger asChild>
                                        {button}
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px] w-[95%] rounded-2xl">
                                        <DialogHeader>
                                                  <DialogTitle>Add Extra Config/CDN</DialogTitle>
                                                  <DialogDescription>
                                                            Add extra configuration to your project to make it more customizable.
                                                  </DialogDescription>
                                        </DialogHeader>
                                        <Tabs defaultValue="html" className="w-full">
                                                  <TabsList className="w-full grid grid-cols-3">
                                                            <TabsTrigger value="html">HTML</TabsTrigger>
                                                            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                                            <TabsTrigger value="editorTheme">Editor Theme</TabsTrigger>
                                                  </TabsList>
                                                  <TabsContent value="html" className="mt-5">
                                                            <Card className="p-4">
                                                                      <ConfigForm
                                                                                schema={htmlConfigSchema}
                                                                                fieldName="html"
                                                                                label="HTML Config/CDN"
                                                                                subtitle="This will be added inside the head tag of your HTML file"
                                                                                placeholder="Input HTML config/CDN"
                                                                      />
                                                            </Card>
                                                  </TabsContent>
                                                  <TabsContent value="javascript" className="mt-5">
                                                            <Card className="p-4">
                                                                      <ConfigForm
                                                                                schema={jsConfigSchema}
                                                                                fieldName="javascript"
                                                                                label="JavaScript Config/CDN"
                                                                                subtitle="This will be added after the body tag of your HTML file"
                                                                                placeholder="Input JavaScript config/CDN"
                                                                      />
                                                            </Card>
                                                  </TabsContent>
                                                  <TabsContent value="editorTheme" className="mt-5">
                                                            <Card className="p-4">
                                                                      <Label>Editor Theme</Label>
                                                                      <small className="text-gray-500 block mb-3">
                                                                                Select your favorite editor theme
                                                                      </small>
                                                                      <Select
                                                                                onValueChange={(e: Partial<AppSliceStateType["theme"]> | undefined) => handleAddTheme(e as AppSliceStateType["theme"])}
                                                                      >
                                                                                <SelectTrigger className="w-full">
                                                                                          <SelectValue placeholder="Select a theme" />
                                                                                </SelectTrigger>
                                                                                <SelectContent>
                                                                                          <SelectGroup>
                                                                                                    <SelectLabel>All Themes</SelectLabel>
                                                                                                    <SelectItem value="tokyoNightInit">Tokyo Night</SelectItem>
                                                                                                    <SelectItem value="andromedaInit">Andromeda</SelectItem>
                                                                                                    <SelectItem value="copilotInit">Copilot</SelectItem>
                                                                                                    <SelectItem value="draculaInit">Dracula</SelectItem>
                                                                                                    <SelectItem value="nordInit">Nord</SelectItem>
                                                                                          </SelectGroup>
                                                                                </SelectContent>
                                                                      </Select>
                                                            </Card>
                                                  </TabsContent>
                                        </Tabs>
                              </DialogContent>
                    </Dialog>
          )
}