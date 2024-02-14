import StoreProvider from "@/app/StoreProvider";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Nunito } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "THK Web Compiler",
  description: "Compile HTML, CSS, JavaScript Code on the go and share it with your friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className={nunito.className}>
          <NextTopLoader
            color="#D70040"
          />
          <StoreProvider>
            <ThemeProvider
              defaultTheme="dark"
            >
              {children}
            </ThemeProvider>
          </StoreProvider>
        </body>
      </html>
    </>
  );
}
