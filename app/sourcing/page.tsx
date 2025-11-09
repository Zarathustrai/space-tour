import Section from "@/components/Section";


export const metadata = {
    title: "Global Product Sourcing Services | B2B Procurement & Supplier Management",
    description: "Expert product sourcing with end-to-end management and QA."
};


export default function Page(){
    return (
        <div className="space-y-10">
            <h1 className="h1">Global Product Sourcing for Your Business</h1>
            <p className="p-xl max-w-3xl">We leverage a global network to find, vet, negotiate, and quality‑assure products that meet your requirements—then connect seamlessly to logistics.</p>


            <Section title="Our Sourcing Process">
                <ul className="grid md:grid-cols-2 gap-4">
                    {["Discovery & Requirements Analysis","Supplier Identification & Vetting","Negotiation & Terms","Quality Control & Compliance","Ongoing Relationship Management"].map((s)=> (
                        <li key={s} className="card p-4">{s}</li>
                    ))}
                </ul>
            </Section>


            <Section title="Product Categories We Source">
                <div className="grid md:grid-cols-2 gap-4">
                    {["Electronics & Components","Home Appliances","Home & Lifestyle Goods","Clothing & Textiles","Tools & Hobby Goods","Furniture & Home Decor","Specialty Consumables","Gaming & Entertainment","Marketplace Goods for Resale"].map((c)=> (
                        <div key={c} className="card p-4">{c}</div>
                    ))}
                </div>
            </Section>


            <Section title="Quality Control & Assurance">
                <p className="p-xl max-w-3xl">Pre‑production approvals, in‑process checks, and pre‑shipment inspections with documented reports and certification verification.</p>
                <div className="mt-8">
                    <a href="/contact" className="btn-primary">Discuss Your Sourcing Needs</a>
                </div>
            </Section>
        </div>
    );
}