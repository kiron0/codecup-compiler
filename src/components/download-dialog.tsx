"use client"

import { Button } from "@/components/ui/button"
import {
          Dialog,
          DialogClose,
          DialogContent,
          DialogDescription,
          DialogHeader,
          DialogTitle,
          DialogTrigger
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { downloadSchema } from "@/lib/schema/download.schema"
import { getTemplate } from "@/lib/template"
import { useAppSelector } from "@/redux/hooks/hook"
import { RootState } from "@/redux/store"
import { zodResolver } from "@hookform/resolvers/zod"
import JSZip from "jszip"
import { ReactNode } from "react"
import { useForm, UseFormReturn } from "react-hook-form"
import { HiArrowLongLeft } from 'react-icons/hi2'
import { toast } from "sonner"
import { z } from "zod"

export default function DownloadDialog({ button }: { button: ReactNode }) {
          const zip = new JSZip();

          const fullCode = useAppSelector(
                    (state: RootState) => state.compilerSlice.fullCode
          );

          const config = useAppSelector(
                    (state: RootState) => state.compilerSlice.config
          );

          const handleDownloadCode = (title: string) => {
                    if (fullCode.html === "" && fullCode.css === "" && fullCode.javascript === "") {
                              return toast.error("Code is Empty");
                    } else {
                              const htmlTemplate = getTemplate(fullCode, config);

                              const htmlCode = new Blob([htmlTemplate], { type: "text/html" });
                              const cssCode = new Blob([fullCode.css], { type: "text/css" });
                              const javascriptCode = new Blob([fullCode.javascript], {
                                        type: "text/javascript",
                              });

                              zip.file("index.html", htmlCode);
                              zip.file("style.css", cssCode);
                              zip.file("script.js", javascriptCode);

                              zip.generateAsync({ type: "blob" }).then((content) => {
                                        const url = URL.createObjectURL(content);
                                        const a = document.createElement("a");
                                        a.href = url;
                                        a.download = `${title} - CodeCup Compiler.zip`;
                                        a.click();
                              });

                              toast.success("Code Downloaded Successfully!", {
                                        style: {
                                                  color: "white",
                                                  background: "#020817",
                                                  border: "none"
                                        },
                              });
                    }
          };

          const form = useForm<z.infer<typeof downloadSchema>>({
                    resolver: zodResolver(downloadSchema),
                    defaultValues: {
                              title: "Untitled Project",
                    },
          }) as UseFormReturn<z.infer<typeof downloadSchema>>;

          function onSubmit(values: z.infer<typeof downloadSchema>) {
                    const { title } = values;

                    handleDownloadCode(title);
                    form.reset();
          }

          return (
                    <Dialog>
                              <DialogTrigger asChild>
                                        {button}
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[450px] w-[95%] rounded-2xl">
                                        <DialogHeader>
                                                  <DialogTitle>Download</DialogTitle>
                                                  <DialogDescription>
                                                            Download your code as a zip file
                                                  </DialogDescription>
                                        </DialogHeader>
                                        <div>
                                                  <Form {...form}>
                                                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                                                      <FormField
                                                                                control={form.control}
                                                                                name="title"
                                                                                render={({ field }) => (
                                                                                          <FormItem>
                                                                                                    <div className="flex items-center gap-2">
                                                                                                              <FormLabel>Title</FormLabel> {form.formState.errors.title ? <><HiArrowLongLeft className="text-destructive" /> <FormMessage /></> : <span className="text-destructive">*</span>}
                                                                                                    </div>
                                                                                                    <FormControl>
                                                                                                              <Input
                                                                                                                        type="text"
                                                                                                                        placeholder="Enter the title of your project"
                                                                                                                        className="w-full mt-2"
                                                                                                                        {...field}
                                                                                                              />
                                                                                                    </FormControl>
                                                                                          </FormItem>
                                                                                )}
                                                                      />
                                                                      <div className="flex justify-end">
                                                                                <DialogClose asChild
                                                                                          // if form is error free, then close the dialog, else keep it open
                                                                                          disabled={!form.formState.isDirty || form.formState.isSubmitting || !form.formState.isValid}
                                                                                >
                                                                                          <Button type="submit" className="mt-4" variant='outline' disabled={form.formState.isSubmitting}>
                                                                                                    Download
                                                                                          </Button>
                                                                                </DialogClose>
                                                                      </div>
                                                            </form>
                                                  </Form>
                                        </div>
                              </DialogContent>
                    </Dialog>
          )
}