import { Button } from "@/components/ui/button";
import { CheckCircle2, Search, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Global Product Sourcing | Space Tour LTD",
    description: "Expert product sourcing with end-to-end management and QA."
};

export default function SourcingPage() {
    const categories = [
        "Electronics & Components", "Home Appliances", "Home & Lifestyle",
        "Clothing & Textiles", "Tools & Hobby Goods", "Furniture & Decor",
        "Specialty Consumables", "Gaming & Entertainment", "Marketplace Resale"
    ];

    return (
        <div className="space-y-20 pb-20">
            <section className="container-width pt-12">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                        Global Product Sourcing
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed">
                        We don't just connect you with suppliers; we manage the entire sourcing process including negotiation, quality verification, and compliance checking.
                    </p>
                </div>
            </section>

            {/* Process Horizontal Scroll/Grid */}
            <section className="container-width">
                <div className="border-l border-white/10 pl-6 space-y-12">
                    {[
                        { icon: Search, title: "Discovery & Vetting", desc: "We identify potential suppliers from our network across 35+ countries, conducting rigorous facility assessments and financial checks." },
                        { icon: Handshake, title: "Negotiation & Terms", desc: "We leverage purchasing volume to negotiate favorable pricing, payment terms, and production schedules." },
                        { icon: ShieldCheck, title: "Quality Control", desc: "Pre-production approvals, in-process checks, and pre-shipment inspections to ensure compliance." }
                    ].map((item, idx) => (
                        <div key={idx} className="relative">
                            <div className="absolute -left-[39px] top-1 h-6 w-6 rounded-full bg-blue-500 border-4 border-[#030712]" />
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <item.icon className="text-blue-400 w-6 h-6" /> {item.title}
                            </h3>
                            <p className="text-white/60 mt-2 max-w-2xl">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories Bento */}
            <section className="container-width">
                <h2 className="text-3xl font-bold mb-8">Categories We Source</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.map((cat) => (
                        <div key={cat} className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-default">
                            <CheckCircle2 className="w-5 h-5 text-blue-500 mb-3" />
                            <span className="font-medium">{cat}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* QA Highlight */}
            <section className="container-width">
                <div className="bg-blue-950/20 border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Rigorous Quality Assurance</h2>
                    <p className="text-white/70 max-w-2xl mx-auto mb-8">
                        Quality failures damage your reputation. We document all inspections with detailed reports including photographs, measurements, and test results.
                    </p>
                    <Link href="/contact">
                        <Button>Discuss Sourcing Needs</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}