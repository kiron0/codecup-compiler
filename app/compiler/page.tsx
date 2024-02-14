import BottomNav from "@/app/compiler/BottomNav";
import CompilerPage from "@/app/compiler/Compiler";

export default function Compiler() {
          return (
                    <div className="relative">
                              <CompilerPage />
                              <BottomNav />
                    </div>
          )
}