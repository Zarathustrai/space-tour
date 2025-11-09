import type { Metadata } from "next";
import "./globals.css";
import { Outfit, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";


const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const plex = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400","500"], variable: "--font-plex" });


export const metadata: Metadata = {
    title: "Space Tour LTD | Global Sourcing & Logistics",
    description: "End-to-end product sourcing and international logistics for B2B.",
    metadataBase: new URL("https://spacetour.tech")
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${outfit.variable} ${plex.variable}`}>
        <body>
        <Background />
        <Header />
        <main className="container-px min-h-[70vh] pt-20 pb-24">{children}</main>
        <Footer />
        </body>
        </html>
    );
}