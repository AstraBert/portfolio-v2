import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
const inter = Roboto({ weight: "400", style: "normal", subsets: ["greek"] });

export const metadata: Metadata = {
    title: "Home - Clelia ",
    description: "Hello there I am Clelia, a Python developer and I love to build products that solve real-world problems. I am a technical blogger and I love to write about AI, ML, DevOps, and more.",
    openGraph: {
        images: "https://www.theshiva.xyz/_next/static/media/banner.e6bde3c9.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} dark:bg-black bg-white`} suppressHydrationWarning>
                <ThemeProvider enableColorScheme={true} attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    <Toaster />
                    <NextTopLoader color="#808080" initialPosition={0.08} crawlSpeed={200} height={3} crawl={true} showSpinner={false} easing="ease" speed={200} zIndex={1600} showAtBottom={false} />
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
