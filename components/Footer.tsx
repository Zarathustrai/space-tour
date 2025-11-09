import Link from "next/link";


export default function Footer(){
    return (
        <footer className="border-t border-white/10 bg-black/30">
            <div className="container-px py-10 grid md:grid-cols-3 gap-6 items-center">
                <div className="space-y-2">
                    <div className="font-semibold">Space Tour LTD</div>
                    <p className="muted text-sm">Integrated global sourcing & logistics partner.</p>
                </div>
                <div className="text-sm flex flex-wrap gap-4 md:justify-center">
                    <Link href="/logistics" className="text-white/70 hover:text-white">Logistics</Link>
                    <Link href="/sourcing" className="text-white/70 hover:text-white">Sourcing</Link>
                    <Link href="/about" className="text-white/70 hover:text-white">About</Link>
                    <Link href="/contact" className="text-white/70 hover:text-white">Contact</Link>
                </div>
                <div className="text-right text-xs md:text-right text-white/60">
                    © {new Date().getFullYear()} Space Tour LTD
                </div>
            </div>
        </footer>
    );
}