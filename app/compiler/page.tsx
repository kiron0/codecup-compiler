import CompilerPage from "@/app/compiler/Compiler";
import BottomNav from "@/components/BottomNav";
import getBaseURL from "@/lib/getBaseURL";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
          const BASE_URL = await getBaseURL();

          return {
                    metadataBase: new URL(BASE_URL),
                    title: "Compiler - CodeCup Compiler",
                    description: "Compile HTML, CSS, JavaScript Code on the go and share it with your friends",
                    openGraph: {
                              images: [
                                        {
                                                  url: new URL('/favicon.png', BASE_URL),
                                                  width: 800,
                                                  height: 600,
                                                  alt: 'CodeCup Compiler',
                                        },
                              ],
                    },
          }
}

export default function Compiler() {
          return (
                    <div className="relative">
                              <CompilerPage />
                              <BottomNav />
                    </div>
          )
}