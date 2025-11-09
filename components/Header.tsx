import Link from "next/link";


const links = [
    { href: "/logistics", label: "Logistics" },
    { href: "/sourcing", label: "Product Sourcing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
];


export default function Header(){
    return (
        <header className="fixed top-0 inset-x-0 z-40">
            <div className="container-px flex h-16 items-center justify-between backdrop-blur-xl bg-black/20 border-b border-white/10 rounded-b-2xl">
                <Link href="/" className="font-semibold tracking-tight">Space Tour <span className="text-white/60">LTD</span></Link>
                <nav className="hidden md:flex gap-6 text-sm">
                    {links.map(l=> (
                        <Link key={l.href} href={l.href} className="text-white/80 hover:text-white">{l.label}</Link>
                    ))}
                </nav>
                <Link href="/contact" className="btn-primary">Request Quote</Link>
            </div>
        </header>
    );}