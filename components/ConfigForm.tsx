"use client"

import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook"
import { updateConfig } from "@/redux/slices/compilerSlice"
import { RootState } from "@/redux/store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

type ConfigFormProps = {
          schema: z.ZodObject<any, any>
          fieldName: string
          label: string
          subtitle?: string
          placeholder: string
}

type CompilerSliceStateType = {
          fullCode: {
                    html: string
                    css: string
                    javascript: string
          }
          config: {
                    html: string
                    javascript: string
          }
          currentLanguage: "html" | "css" | "javascript"
}

export default function ConfigForm({ label, subtitle, fieldName, schema, placeholder }: ConfigFormProps) {
          const dispatch = useAppDispatch();

          const config = useAppSelector(
                    (state: RootState) => state.compilerSlice.config
          );

          const form = useForm<z.infer<typeof schema>>({
                    resolver: zodResolver(schema),
                    defaultValues: {
                              fieldName: "",
                    },
          })

          function onSubmit(values: z.infer<typeof schema>) {
                    const value = values[fieldName];

                    dispatch(updateConfig({ ...config, [fieldName]: value }))
          }

          useEffect(() => {
                    form.setValue(fieldName, config[fieldName as keyof CompilerSliceStateType["config"]])
          }, [config, fieldName, form])

          return (
                    <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)}>
                                        <FormField
                                                  control={form.control}
                                                  name={fieldName}
                                                  render={({ field }) => (
                                                            <FormItem>
                                                                      <FormLabel>{label}</FormLabel>
                                                                      <small className="text-gray-500 block">
                                                                                {subtitle}
                                                                      </small>
                                                                      <FormControl>
                                                                                <Textarea
                                                                                          typeof="text"
                                                                                          placeholder={placeholder}
                                                                                          className="resize-none h-40 md:h-52 w-full mt-2"
                                                                                          {...field}
                                                                                />
                                                                      </FormControl>
                                                            </FormItem>
                                                  )}
                                        />
                                        <div className="flex justify-end">
                                                  <DialogClose>
                                                            <Button type="submit" className="mt-4" variant='outline' disabled={form.formState.isSubmitting}>ADD</Button>
                                                  </DialogClose>
                                        </div>
                              </form>
                    </Form>
          )
}