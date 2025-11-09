import Section from "@/components/Section";


export const metadata = {
    title: "International Logistics Services | Freight Forwarding & Customs Brokerage",
    description: "Comprehensive logistics solutions: freight, customs, warehousing, tracking."
};


export default function Page(){
    return (
        <div className="space-y-10">
            <h1 className="h1">Comprehensive International Logistics Solutions</h1>
            <p className="p-xl max-w-3xl">Navigating international logistics requires expertise and constant attention to detail. Space Tour LTD provides end-to-end logistics management that removes complexity from your operations.</p>


            <Section title="Shipping & Freight Management">
                <p className="p-xl max-w-3xl">Multimodal freight: sea, air, and land transport. Route optimization, competitive rates, and proactive monitoring from departure to delivery.</p>
            </Section>


            <Section title="Customs Clearance & Documentation">
                <p className="p-xl max-w-3xl">Accurate classification, valuation, and documentation. Tariff optimization and duty drawback programs with up-to-date compliance.</p>
            </Section>


            <Section title="Warehousing & Inventory Management">
                <p className="p-xl max-w-3xl">Secure storage, cross-docking, inspections, labeling, and kitting. Real-time visibility for smart planning.</p>
            </Section>


            <Section title="Supply Chain Visibility & Tracking">
                <p className="p-xl max-w-3xl">Full transparency with real-time tracking and regular updates so you can plan with confidence.</p>
            </Section>


            <Section title="The Space Tour Logistics Process">
                <ol className="grid md:grid-cols-2 gap-4 list-decimal pl-6">
                    {["Consultation & Planning","Documentation & Compliance","Freight Booking & Dispatch","In-Transit Management","Customs Clearance","Final Delivery","Post-Delivery Support"].map((s)=> (
                        <li key={s} className="card p-4">{s}</li>
                    ))}
                </ol>
                <div className="mt-8">
                    <a href="/contact" className="btn-primary">Get a Custom Logistics Quote</a>
                </div>
            </Section>
        </div>
    );
}