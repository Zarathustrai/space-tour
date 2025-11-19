import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Route } from "next";

// Explicitly type the array so 'href' is recognized as a valid Route, not just a string
const links: { href: Route; label: string }[] = [
    { href: "/logistics", label: "Logistics" },
    { href: "/sourcing", label: "Product Sourcing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

export default function Header() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-lg">
            <div className="container-width flex h-16 items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tighter font-sans">
                    SPACE TOUR <span className="text-blue-400">LTD</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} className="text-white/70 hover:text-white transition-colors">
                            {l.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/contact">
                        <Button variant="default" className="rounded-full">Request Quote</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}