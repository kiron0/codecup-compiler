"use client"

import BaseLayout from "@/components/base-layout";
import { Button, buttonVariants } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { API, CODE_SNIPPETS, LANGUAGE_VERSIONS } from "@/utils";
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";
import CodeMirror from "@uiw/react-codemirror";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { GoCodescan } from "react-icons/go";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { RxReset } from "react-icons/rx";

const languages = Object.entries(LANGUAGE_VERSIONS);

interface OutputProps {
          output: ReactNode;
          error: string;
          isLoading: boolean;
}

export default function Execute() {
          const [code, setCode] = useState<string>(CODE_SNIPPETS.javascript);
          const [lang, setLang] = useState<keyof typeof LANGUAGE_VERSIONS>('javascript');
          const [output, setOutput] = useState<OutputProps>({ output: '', error: '', isLoading: false });

          const compileCode = async () => {
                    setOutput({ ...output, isLoading: true });
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

                              const data = res?.data;

                              if (data?.run?.stderr) {
                                        setOutput({ ...output, error: data.run.stderr, output: <></> });
                              } else if (data?.run?.output) {
                                        setOutput({
                                                  ...output,
                                                  output: data?.compile?.output || data?.compile?.stderr ?
                                                            <>
                                                                      {data.run.output} <br /> <br />
                                                                      <span className="text-red-500">
                                                                                Error: ${data.compile.output}
                                                                      </span>
                                                            </> : data.run.output,
                                                  error: ''
                                        });
                              } else {
                                        setOutput({ ...output, error: 'Error compiling code or no output found' });
                              }

                    } catch (error) {
                              setOutput({ ...output, error: 'Error compiling code or no output found' });
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
                                                                                value={lang}
                                                                                onValueChange={(value) => {
                                                                                          setLang(value as keyof typeof LANGUAGE_VERSIONS);
                                                                                          setCode(CODE_SNIPPETS[value as keyof typeof CODE_SNIPPETS]);
                                                                                }}
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
                                                            <Button size="sm" loading={output.isLoading} disabled={!code || output.isLoading} onClick={compileCode}>
                                                                      {output.isLoading ? 'Compiling...' : <>Compile <GoCodescan /></>}
                                                            </Button>
                                                            {
                                                                      output.output || output.error ? (
                                                                                <Button
                                                                                          size='sm'
                                                                                          onClick={() => {
                                                                                                    setOutput({ output: '', error: '', isLoading: false });
                                                                                          }}
                                                                                >
                                                                                          <RxReset size={15} />
                                                                                </Button>
                                                                      ) : null
                                                            }
                                                  </div>
                                                  {
                                                            output.output || output.error ? (
                                                                      <>
                                                                                <h2 className='mb-5 mt-10 font-bold text-xl md:text-2xl'>Output:</h2>
                                                                                {output.output &&
                                                                                          <div className={cn(
                                                                                                    "p-4 text-base md:text-lg bg-transparent w-full h-96 rounded-md focus-visible:ring-0 cursor-default select-none border overflow-auto",
                                                                                                    output.error ? 'border-red-500 text-red-500' : ''
                                                                                          )}>
                                                                                                    {output.output && <pre>{output.output}</pre>}
                                                                                                    {output.error && <pre>{output.error}</pre>}
                                                                                          </div>
                                                                                }
                                                                      </>
                                                            ) : null
                                                  }
                                        </div>
                              </div>
                    </BaseLayout>
          )
}