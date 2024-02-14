import CompilerPage from "@/app/compiler/Compiler";
import BottomNav from "@/components/BottomNav";
import { Metadata } from "next";

export const metadata: Metadata = {
          title: "Compiler - THK Web Compiler",
          description: "Compile HTML, CSS, JavaScript Code on the go and share it with your friends",
};

export default function Compiler() {
          return (
                    <div className="relative">
                              <CompilerPage />
                              <BottomNav />
                    </div>
          )
}