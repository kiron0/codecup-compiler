import CompileJSPage from "@/app/compile-js/CompileJSPage";
import BottomNav from "@/components/BottomNav";
import getBaseURL from "@/lib/getBaseURL";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
          const BASE_URL = await getBaseURL();

          return {
                    metadataBase: new URL(BASE_URL),
                    title: "Online JavaScript Compiler - CodeCup Compiler",
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

export default function CompileJS() {
          return (
                    <>
                              <BottomNav />
                              <CompileJSPage />
                    </>
          )
}