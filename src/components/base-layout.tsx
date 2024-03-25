"use client"

import { ReactNode } from "react"

export default function BaseLayout({ children }: { children: ReactNode }) {
          return (
                    <div className="glowingBackdrop left-0 top-0 -z-10 size-full bg-center bg-no-repeat opacity-100"
                              style={{ backgroundImage: "url('/hexagon-grid.svg')" }}
                    >
                              {children}
                    </div>
          )
}