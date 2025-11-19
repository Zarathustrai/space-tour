import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl mt-auto">
            <div className="container-width py-12 grid md:grid-cols-4 gap-8">

                {/* Brand */}
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <div className="text-xl font-bold tracking-tighter font-sans">
                        SPACE TOUR <span className="text-blue-400">LTD</span>
                    </div>
                    <p className="text-white/60 text-sm max-w-md">
                        Integrated global sourcing & logistics partner. We simplify international trade by bridging the gap between procurement and supply chain management.
                    </p>
                </div>

                {/* Links */}
                <div className="space-y-4">
                    <h4 className="font-semibold">Services</h4>
                    <div className="flex flex-col gap-2 text-sm text-white/60">
                        <Link href="/logistics" className="hover:text-white transition-colors">Logistics Solutions</Link>
                        <Link href="/sourcing" className="hover:text-white transition-colors">Product Sourcing</Link>
                        <Link href="/contact" className="hover:text-white transition-colors">Request Quote</Link>
                    </div>
                </div>

                {/* Contact / Address */}
                <div className="space-y-4">
                    <h4 className="font-semibold">Contact</h4>
                    <div className="flex flex-col gap-2 text-sm text-white/60">
                        <p>hello@spacetour.tech</p>
                        <p className="leading-relaxed">
                            Ormond House<br/>
                            26/27 Boswell Street, Suite 2<br/>
                            London, WC1N 3JZ, UK
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-width py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
                <p>© {new Date().getFullYear()} Space Tour LTD. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0">
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
}