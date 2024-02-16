"use client"

import Logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import { Code2 } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'
import { RiJavascriptFill } from "react-icons/ri"

export default function HomePage() {
          return (
                    <div className="w-full h-[80vh] md:h-screen text-white flex justify-center items-center flex-col gap-3">
                              <div className="w-60 h-60">
                                        <Image src={Logo} alt="CodeCup Compiler" width={100} height={100} draggable={false} className='w-full h-full object-cover select-none' />
                              </div>
                              <p className="px-3 sm:px-0 text-gray-500 text-center text-base md:text-lg">
                                        Compile HTML, CSS, JavaScript Code on the go and share it with your
                                        friends
                              </p>
                              <Link href="/project" className="mt-3">
                                        <Button variant="outline" className='md:py-6 md:px-5'>
                                                  <Code2 size={20} className='mr-2' /> Start Project
                                        </Button>
                              </Link>
                              <Link href="/compile-js" className="mt-2">
                                        <Button variant="outline" className='py-5 md:py-6 md:px-5'>
                                                  <RiJavascriptFill size={20} className='mr-2' /> Compile JavaScript
                                        </Button>
                              </Link>
                    </div>
          )
}