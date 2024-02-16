"use client"

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { COMPILER_API } from '@/lib';
import { tags as t } from "@lezer/highlight";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import { tokyoNightInit } from "@uiw/codemirror-theme-tokyo-night";
import CodeMirror from "@uiw/react-codemirror";
import axios from 'axios';
import { useState } from 'react';

export default function CompileJSPage() {
          const [code, setCode] = useState<string>('');
          const [output, setOutput] = useState<string>('');
          const [isLoading, setIsLoading] = useState<boolean>(false);
          const [error, setError] = useState<string>('');

          const compileCode = async () => {
                    setIsLoading(true);
                    try {
                              setError('');
                              const res = await axios.post(`${COMPILER_API}/compile`, { code });
                              const data = res.data?.result;
                              setOutput(data);
                              setIsLoading(false);
                    } catch (error) {
                              console.error('Error compiling code:', error);
                              setError('Error compiling code');
                              setIsLoading(false);
                    }
          };

          return (
                    <div className='flex flex-col justify-center items-center w-full p-3 md:container mx-auto'>
                              <h1 className='text-2xl md:text-3xl text-center mt-5 mb-5 font-bold'>Online JavaScript Compiler</h1>
                              <CodeMirror
                                        value={code}
                                        height="60vh"
                                        className="w-full text-base md:text-lg"
                                        extensions={[loadLanguage("javascript")!]}
                                        onChange={(value) => setCode(value)}
                                        theme={tokyoNightInit({
                                                  settings: {
                                                            caret: "#c6c6c6",
                                                            fontFamily: "monospace",
                                                  },
                                                  styles: [{ tag: t.comment, color: "#6272a4" }],
                                        })}
                              />
                              <div className='mt-5'>
                                        <Button variant="default" loading={isLoading} disabled={!code} onClick={compileCode}>
                                                  {isLoading ? 'Compiling...' : 'Compile'}
                                        </Button>
                              </div>
                              <h2 className='mb-5 mt-10 font-bold text-xl md:text-2xl'>Output:</h2>
                              <Textarea
                                        readOnly
                                        value={output || error}
                                        placeholder="Output will appear here..."
                                        className={`p-4 text-base md:text-lg bg-transparent resize-none w-full h-96 rounded-md focus-visible:ring-0 cursor-default select-none ${error ? 'text-red-500' : ''}`}
                              />
                    </div>
          )
}