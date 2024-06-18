"use client"

import Logo from '@/assets/logo.png'
import BaseLayout from '@/components/base-layout'
import { Button } from '@/components/ui/button'
import { Code2 } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { MdCode } from "react-icons/md"
// import { RiJavascriptFill } from "react-icons/ri"

export default function HomePage() {
          return (
                    <BaseLayout>
                              <div className="w-full h-[80%] sm:h-screen flex justify-center items-center flex-col gap-3">
                                        <div className="w-60 h-60">
                                                  <Image src={Logo} alt="CodeCup Compiler" width={100} height={100} draggable={false} className='w-full h-full object-cover select-none' />
                                        </div>
                                        <p className="px-3 sm:px-0 text-gray-300 text-center text-base md:text-lg">
                                                  Compile HTML, CSS, JavaScript Code on the go and share it with your
                                                  friends
                                        </p>
                                        <Link href="/project" className="mt-3">
                                                  <Button variant="outline" className='py-5 md:py-6 md:px-5 bg-transparent border-gray-600 sm:hover:border-accent'>
                                                            <Code2 size={20} className='mr-2' /> Start Project
                                                  </Button>
                                        </Link>
                                        <Link href="/execute" className="mt-2">
                                                  <Button variant="outline" className='py-5 md:py-6 md:px-5 bg-transparent border-gray-600 sm:hover:border-accent'>
                                                            <MdCode size={20} className='mr-2' /> Execute Code
                                                  </Button>
                                        </Link>
                                        {/* <Link href="/compile-js" className="mt-2">
                                                  <Button variant="outline" className='py-5 md:py-6 md:px-5 bg-transparent border-gray-600 sm:hover:border-accent'>
                                                            <RiJavascriptFill size={20} className='mr-2' /> Compile JavaScript
                                                  </Button>
                                        </Link> */}
                              </div>
                    </BaseLayout>
          )
}