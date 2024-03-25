"use client"

import NotFoundImg from "@/assets/not-found.webp";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
          return (
                    <div className="flex items-center justify-center h-[80vh] md:h-screen">
                              <div className="flex flex-col justify-center items-center">
                                        <Image src={NotFoundImg} alt="Not Found" width={300} height={300} className="select-none rounded-2xl" placeholder="blur" priority={true} draggable={false} />
                                        <p className="text-base md:text-lg mt-3 px-4 md:px-0 text-center">The page you are looking for does not exist.</p>
                                        <Link href="/">
                                                  <Button size="sm" className="mt-5 text-xs">Go Home</Button>
                                        </Link>
                              </div>
                    </div>
          )
}