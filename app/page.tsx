import Link from "next/link";
import Section from "@/components/Section";
import Stats from "@/components/Stats";


export const metadata = {
    title: "Space Tour LTD | Global Sourcing & International Logistics Partner",
    description: "Your single partner for end-to-end supply chain solutions."
};


export default function Page(){
    return (
        <div className="space-y-20">
            <section className="pt-8 md:pt-16">
                <div className="container-px text-center">
                    <h1 className="h1">Your Single Partner for Global Sourcing and Seamless Logistics</h1>
                    <p className="p-xl mt-4 max-w-3xl mx-auto">We handle the entire cycle—from finding the right products worldwide to delivering them to your door—simplifying your supply chain and driving your growth.</p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Link href="/contact" className="btn-primary">Optimize Your Supply Chain Today</Link>
                        <Link href="/logistics" className="btn-ghost">Explore Services</Link>
                    </div>
                </div>
            </section>


            <Section>
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-3">
                        <h3 className="h2">Why Partner with Space Tour LTD?</h3>
                        <ul className="space-y-3 text-white/80">
                            <li><span className="font-medium">End-to-End Supply Chain Management.</span> One partner handles everything—from sourcing to final delivery.</li>
                            <li><span className="font-medium">Global Reach with Local Expertise.</span> Vetted suppliers + deep regulatory know-how.</li>
                            <li><span className="font-medium">Risk Reduction & Quality Assurance.</span> Compliance, documentation, inspections.</li>
                            <li><span className="font-medium">Cost & Time Efficiency.</span> Better rates, faster turnaround, less overhead.</li>
                        </ul>
                    </div>
                    <Stats />
                </div>
            </Section>


            <Section title="What we do" subtitle="Integrated sourcing and logistics—pick what you need or use both for maximum leverage.">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="card p-6">
                        <h4 className="text-xl font-semibold">Comprehensive Logistics Services</h4>
                        <p className="muted mt-2">Sea & air freight, customs brokerage, warehousing, tracking.</p>
                        <Link href="/logistics" className="btn-ghost mt-6 w-fit">Explore Our Logistics →</Link>
                    </div>
                    <div className="card p-6">
                        <h4 className="text-xl font-semibold">Strategic Product Sourcing</h4>
                        <p className="muted mt-2">Access vetted suppliers, negotiate terms, and guarantee quality.</p>
                        <Link href="/sourcing" className="btn-ghost mt-6 w-fit">Discover Sourcing →</Link>
                    </div>
                </div>
            </Section>
        </div>
    );
}