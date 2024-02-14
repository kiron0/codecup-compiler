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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cssConfigSchema } from "@/lib/schema/cssConfig.schema"
import { htmlConfigSchema } from "@/lib/schema/htmlConfig.schema"
import { jsConfigSchema } from "@/lib/schema/jsConfig.schema"
import { ReactNode } from "react"

export default function SettingDialog({ button }: { button: ReactNode }) {
          return (
                    <Dialog>
                              <DialogTrigger asChild>
                                        {button}
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[600px] w-full">
                                        <DialogHeader>
                                                  <DialogTitle>Add Extra Config/CDN</DialogTitle>
                                                  <DialogDescription>
                                                            Add extra configuration to your project to make it more customizable.
                                                  </DialogDescription>
                                        </DialogHeader>
                                        <Tabs defaultValue="html" className="w-full">
                                                  <TabsList className="w-full grid grid-cols-3">
                                                            <TabsTrigger value="html">HTML</TabsTrigger>
                                                            <TabsTrigger value="css">CSS</TabsTrigger>
                                                            <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                                  </TabsList>
                                                  <TabsContent value="html" className="mt-5">
                                                            <Card className="p-4">
                                                                      <ConfigForm
                                                                                schema={htmlConfigSchema}
                                                                                fieldName="htmlConfig"
                                                                                label="Your HTML Config/CDN"
                                                                                placeholder="Input HTML config/CDN"
                                                                      />
                                                            </Card>
                                                  </TabsContent>
                                                  <TabsContent value="css" className="mt-5">
                                                            <Card className="p-4">
                                                                      <ConfigForm
                                                                                schema={cssConfigSchema}
                                                                                fieldName="cssConfig"
                                                                                label="Your CSS Config/CDN"
                                                                                placeholder="Input CSS config/CDN"
                                                                      />
                                                            </Card>
                                                  </TabsContent>
                                                  <TabsContent value="javascript" className="mt-5">
                                                            <Card className="p-4">
                                                                      <ConfigForm
                                                                                schema={jsConfigSchema}
                                                                                fieldName="jsConfig"
                                                                                label="Your JavaScript Config/CDN"
                                                                                placeholder="Input JavaScript config/CDN"
                                                                      />
                                                            </Card>
                                                  </TabsContent>
                                        </Tabs>
                              </DialogContent>
                    </Dialog>
          )
}