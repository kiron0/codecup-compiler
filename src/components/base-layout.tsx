"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface BaseLayoutProps {
          children: ReactNode
          className?: string
}

export default function BaseLayout({ children, className }: BaseLayoutProps) {
          return (
                    <div className={cn("overflow-auto absolute left-0 top-0 -z-10 size-full bg-center bg-no-repeat after:fixed after:inset-0 after:m-auto after:aspect-square after:w-[300px] after:rounded-full after:bg-gray-300 after:blur-[120px] after:content-[''] after:dark:bg-gray-800 sm:after:dark:bg-gray-700 after:-z-10", className)}
                              style={{ backgroundImage: "url('/hexagon-grid.svg')" }}
                    >
                              {children}
                    </div>
          )
}