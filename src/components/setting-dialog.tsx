"use client"

import ConfigForm from "@/components/config-form"
import { Card } from "@/components/ui/card"
import {
          Dialog,
          DialogContent,
          DialogDescription,
          DialogHeader,
          DialogTitle,
          DialogTrigger
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { htmlConfigSchema } from "@/utils/schema/htmlConfig.schema"
import { jsConfigSchema } from "@/utils/schema/jsConfig.schema"
import { ReactNode } from "react"

export default function SettingDialog({ button }: { button: ReactNode }) {
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
                                                  <TabsList className="w-full grid grid-cols-2">
                                                            <TabsTrigger value="html">HTML</TabsTrigger>
                                                            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
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
                                        </Tabs>
                              </DialogContent>
                    </Dialog>
          )
}