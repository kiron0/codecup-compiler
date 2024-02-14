"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HomePage() {
          return (
                    <div className="w-full h-screen text-white flex justify-center items-center flex-col gap-3">
                              <h1 className="text-5xl md:text-6xl font-bold text-center">THK Web Dev Compiler</h1>
                              <p className=" text-gray-500 text-center">
                                        Compiler HTML, CSS, JavaScript Code on the go and share it with your
                                        friends
                              </p>
                              <Link href="/compiler" className="mt-3">
                                        <Button variant="outline">
                                                  Start Compiling
                                        </Button>
                              </Link>
                    </div>
          )
}