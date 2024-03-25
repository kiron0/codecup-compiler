
import getBaseURL from "@/lib/getBaseURL";
import StoreProvider from "@/redux/StoreProvider";
import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "sonner";
import "./globals.css";

const nunito = Nunito({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const BASE_URL = await getBaseURL();

  return {
    metadataBase: new URL(BASE_URL),
    title: "CodeCup Compiler - Compile HTML, CSS, JavaScript Code on the go and Solve Problems Online",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.className} dark`}>
        <StoreProvider>
          <NextTopLoader
            color="#694CFB"
          />
          {children}
        </StoreProvider>
        <Toaster />
      </body>
    </html>
  );
}
