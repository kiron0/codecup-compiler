"use client"

import BaseLayout from "@/components/base-layout"
import CodeEditor from "@/components/code-editor"
import HelperHeader from "@/components/helper-header"
import RenderCode from "@/components/render-code"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default function CompilerPage() {
  return (
    <BaseLayout className="relative z-0">
      <ResizablePanelGroup
        direction="horizontal"
      >
        <ResizablePanel
          className="h-screen min-w-[5%] md:min-w-[40%]"
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
    </BaseLayout>
  )
}