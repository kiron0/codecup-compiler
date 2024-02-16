"use client"

import CodeEditor from "@/components/CodeEditor"
import HelperHeader from "@/components/HelperHeader"
import RenderCode from "@/components/RenderCode"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default function CompilerPage() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
    >
      <ResizablePanel
        className="h-screen min-w-[5%] md:min-w-[35%]"
        defaultSize={40}
      >
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        className="h-screen min-w-[5%] md:min-w-[35%]"
        defaultSize={60}
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}