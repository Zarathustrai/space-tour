import type { Metadata } from "next";
import "./globals.css";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarBackground from "@/components/StarBackground";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-plex" });

export const metadata: Metadata = {
    title: "Space Tour LTD | Global Sourcing & Logistics",
    description: "End-to-end product sourcing and international logistics for B2B.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${outfit.variable} ${plex.variable} dark`}>
        <body className="font-sans min-h-screen flex flex-col relative overflow-x-hidden">
        <StarBackground />
        <Header />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        </body>
        </html>
    );
}