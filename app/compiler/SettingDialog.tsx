"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
          Dialog,
          DialogContent,
          DialogDescription,
          DialogHeader,
          DialogTitle,
          DialogTrigger
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReactNode } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

export default function SettingDialog({ button }: { button: ReactNode }) {
          const formSchema = z.object({
                    htmlConfig: z.string().min(1, "HTML config/CDN is cannot be empty."),
          })

          const form = useForm<z.infer<typeof formSchema>>({
                    resolver: zodResolver(formSchema),
                    defaultValues: {
                              htmlConfig: "",
                    },
          })

          function onSubmit(values: z.infer<typeof formSchema>) {
                    console.log(values)
          }

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
                                        <div>
                                                  <Tabs defaultValue="html" className="w-full">
                                                            <TabsList className="w-full grid grid-cols-3">
                                                                      <TabsTrigger value="html">HTML</TabsTrigger>
                                                                      <TabsTrigger value="css">CSS</TabsTrigger>
                                                                      <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                                                            </TabsList>
                                                            <TabsContent value="html" className="mt-5">
                                                                      <Card className="p-4">
                                                                                <Form {...form}>
                                                                                          <form onSubmit={form.handleSubmit(onSubmit)}>
                                                                                                    <FormField
                                                                                                              control={form.control}
                                                                                                              name="htmlConfig"
                                                                                                              render={({ field }) => (
                                                                                                                        <FormItem>
                                                                                                                                  <FormLabel>Your HTML Config/CDN</FormLabel>
                                                                                                                                  <FormControl>
                                                                                                                                            <Textarea
                                                                                                                                                      typeof="text"
                                                                                                                                                      placeholder="Input HTML config/CDN"
                                                                                                                                                      className="resize-none h-40 md:h-52 w-full mt-2"
                                                                                                                                                      {...field}
                                                                                                                                            />
                                                                                                                                  </FormControl>
                                                                                                                                  <FormMessage />
                                                                                                                        </FormItem>
                                                                                                              )}
                                                                                                    />
                                                                                                    <div className="flex justify-end">
                                                                                                              <Button type="submit" className="mt-4" size="sm" disabled={form.formState.isSubmitting}>ADD</Button>
                                                                                                    </div>
                                                                                          </form>
                                                                                </Form>
                                                                      </Card>
                                                            </TabsContent>
                                                            <TabsContent value="css" className="mt-5">
                                                                      <Card className="p-4">
                                                                                <Label htmlFor="css">Your CSS Config/CDN</Label>
                                                                                <Textarea
                                                                                          typeof="text"
                                                                                          placeholder="Input CSS config/CDN"
                                                                                          className="resize-none h-40 md:h-52 w-full mt-2"
                                                                                />
                                                                                <div className="flex justify-end">
                                                                                          <Button className="mt-4" size="sm">ADD</Button>
                                                                                </div>
                                                                      </Card>
                                                            </TabsContent>
                                                            <TabsContent value="javascript" className="mt-5">
                                                                      <Card className="p-4">
                                                                                <Label htmlFor="javascript">Your JavaScript Config/CDN</Label>
                                                                                <Textarea
                                                                                          typeof="text"
                                                                                          placeholder="Input JavaScript config/CDN"
                                                                                          className="resize-none h-40 md:h-52 w-full mt-2"
                                                                                />
                                                                                <div className="flex justify-end">
                                                                                          <Button className="mt-4" size="sm">ADD</Button>
                                                                                </div>
                                                                      </Card>
                                                            </TabsContent>
                                                  </Tabs>
                                        </div>
                              </DialogContent>
                    </Dialog>
          )
}