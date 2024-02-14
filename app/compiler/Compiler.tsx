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
        className="h-screen md:min-w-[40%]"
        defaultSize={50}
      >
        <HelperHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        className="h-screen md:min-w-[40%]"
        defaultSize={50}
      >
        <RenderCode />
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}