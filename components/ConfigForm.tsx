"use client"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type ConfigFormProps = {
          schema: z.ZodObject<any, any>
          fieldName: string
          label: string
          placeholder: string
}

export default function ConfigForm({ label, fieldName, schema, placeholder }: ConfigFormProps) {
          const form = useForm<z.infer<typeof schema>>({
                    resolver: zodResolver(schema),
                    defaultValues: {
                              fieldName: "",
                    },
          })

          function onSubmit(values: z.infer<typeof schema>) {
                    const value = values[fieldName]
                    console.log(value);
          }

          return (
                    <Form {...form}>
                              <form onSubmit={form.handleSubmit(onSubmit)}>
                                        <FormField
                                                  control={form.control}
                                                  name={fieldName}
                                                  render={({ field }) => (
                                                            <FormItem>
                                                                      <FormLabel>{label}</FormLabel>
                                                                      <FormControl>
                                                                                <Textarea
                                                                                          typeof="text"
                                                                                          placeholder={placeholder}
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
          )
}