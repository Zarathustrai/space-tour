export const metadata = {
    title: "About Space Tour LTD | Your Global Trade & Logistics Partner",
    description: "Our mission, values, and team."
};


export default function Page(){
    return (
        <div className="space-y-8">
            <h1 className="h1">About Space Tour LTD</h1>
            <p className="p-xl max-w-3xl">Businesses waste resources coordinating between separate sourcing agents and logistics providers. We built an integrated company where procurement and supply chain work together.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-6">
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="muted mt-2">Remove barriers from international trade by being a single accountable partner for sourcing and logistics.</p>
                </div>
                <div className="card p-6">
                    <h3 className="text-xl font-semibold">Our Values</h3>
                    <ul className="mt-2 space-y-1 text-white/80 list-disc pl-5">
                        <li>Reliability</li>
                        <li>Transparency</li>
                        <li>Partnership</li>
                        <li>Continuous Improvement</li>
                    </ul>
                </div>
            </div>
            <div className="card p-6">
                <h3 className="text-xl font-semibold">Our Team</h3>
                <p className="muted mt-2">Procurement specialists, logistics pros, and customs brokers with decades of combined experience across 35+ countries.</p>
            </div>
        </div>
    );
}