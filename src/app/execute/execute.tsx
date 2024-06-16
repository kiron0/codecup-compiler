"use client"

import BaseLayout from "@/components/base-layout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { API, LANGUAGE_VERSIONS } from "@/utils";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";
import CodeMirror from "@uiw/react-codemirror";
import Link from "next/link";
import { useState } from "react";
import { GoCodescan } from "react-icons/go";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RxReset } from "react-icons/rx";

const languages = Object.entries(LANGUAGE_VERSIONS);

export default function Execute() {
          const [code, setCode] = useState<string>('');
          const [lang, setLang] = useState<keyof typeof LANGUAGE_VERSIONS>('javascript');
          const [output, setOutput] = useState<string>('');
          const [isLoading, setIsLoading] = useState<boolean>(false);
          const [error, setError] = useState<string>('');

          const compileCode = async () => {
                    setIsLoading(true);
                    try {
                              const res = await API.post('/execute', {
                                        language: lang,
                                        version: LANGUAGE_VERSIONS[lang],
                                        files: [
                                                  {
                                                            content: code
                                                  }
                                        ],
                              });

                              const data = res.data;
                              const output = data?.run?.output;

                              if (data?.run?.stderr === "") {
                                        setError('');
                                        setOutput(output);
                                        setIsLoading(false);
                              } else {
                                        setOutput('');
                                        setError(output);
                                        setIsLoading(false);
                              }
                    } catch (error) {
                              console.error('Error compiling code:', error);
                              setError('Error compiling code');
                              setIsLoading(false);
                    }
          };

          return (
                    <BaseLayout className="relative z-0">
                              <div className="flex flex-col w-full h-screen">
                                        <div className='flex flex-col items-center w-full p-3 md:container mx-auto'>
                                                  <h1 className='text-2xl md:text-3xl text-center mt-5 mb-5 font-bold'>Online Code Compiler</h1>
                                                  <div className="flex justify-end">
                                                            <div className="flex justify-center items-center gap-2 mb-5">
                                                                      <small className="hidden sm:block">Current Language: </small>
                                                                      <Select
                                                                                defaultValue={lang}
                                                                                onValueChange={(value) => setLang(value as keyof typeof LANGUAGE_VERSIONS)}
                                                                      >
                                                                                <SelectTrigger className="w-[180px] capitalize outline-none focus:ring-0">
                                                                                          <SelectValue />
                                                                                </SelectTrigger>
                                                                                <SelectContent>
                                                                                          {languages.map(([language, version]) => (
                                                                                                    <SelectItem key={language} value={language} className="capitalize">
                                                                                                              {language} ({version})
                                                                                                    </SelectItem>
                                                                                          ))}
                                                                                </SelectContent>
                                                                      </Select>
                                                            </div>
                                                  </div>
                                                  <CodeMirror
                                                            value={code}
                                                            height="60vh"
                                                            className="w-full text-base md:text-lg"
                                                            extensions={[loadLanguage(lang)!]}
                                                            onChange={(value) => setCode(value)}
                                                            theme={tokyoNightInit({
                                                                      settings: {
                                                                                caret: "#c6c6c6",
                                                                                fontFamily: "monospace",
                                                                      },
                                                                      styles: [{ tag: t.comment, color: "#6272a4" }],
                                                            })}
                                                  />
                                                  <div className='mt-5 flex items-center gap-3'>
                                                            <Link href='/' className={buttonVariants({ size: "sm" })}>
                                                                      <HiOutlineArrowNarrowLeft /> Back
                                                            </Link>
                                                            <Button size="sm" loading={isLoading} disabled={!code} onClick={compileCode}>
                                                                      {isLoading ? 'Compiling...' : <>Compile <GoCodescan /></>}
                                                            </Button>
                                                            {
                                                                      output || error ? (
                                                                                <Button
                                                                                          size='icon'
                                                                                          variant="default"
                                                                                          onClick={() => {
                                                                                                    setCode('');
                                                                                                    setOutput('');
                                                                                                    setError('');
                                                                                          }}
                                                                                >
                                                                                          <RxReset size={15} />
                                                                                </Button>
                                                                      ) : null
                                                            }
                                                  </div>
                                                  {
                                                            output || error ? (
                                                                      <>
                                                                                <h2 className='mb-5 mt-10 font-bold text-xl md:text-2xl'>Output:</h2>
                                                                                {output && <Textarea
                                                                                          readOnly
                                                                                          value={output}
                                                                                          placeholder="Output will appear here..."
                                                                                          className={`p-4 text-base md:text-lg bg-transparent resize-none w-full h-96 rounded-md focus-visible:ring-0 cursor-default select-none`}
                                                                                />}
                                                                                {error && <Textarea
                                                                                          readOnly
                                                                                          value={error}
                                                                                          placeholder="Error will appear here..."
                                                                                          className={`p-4 text-base md:text-lg bg-transparent resize-none w-full h-96 rounded-md focus-visible:ring-0 cursor-default select-none border border-red-500 text-red-500`}
                                                                                />}
                                                                      </>
                                                            ) : null
                                                  }
                                        </div>
                              </div>
                    </BaseLayout>
          )
}