import StoreProvider from "@/app/StoreProvider";
import getBaseURL from "@/lib/getBaseURL";
import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const nunito = Nunito({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const BASE_URL = await getBaseURL();

  return {
    metadataBase: new URL(BASE_URL),
    title: "CodeCup Compiler",
    description: "Compile HTML, CSS, JavaScript Code on the go and share it with your friends",
    openGraph: {
      images: [
        {
          url: new URL('/logo.png', BASE_URL),
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
      <head />
      <body className={`${nunito.className} dark`}>
        <StoreProvider>
          <NextTopLoader
            color="#694CFB"
          />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
