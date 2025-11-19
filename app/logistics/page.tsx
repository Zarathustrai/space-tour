import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowRight, Ship, Plane, Package, FileText, MapPin, Layers } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "International Logistics Services | Space Tour LTD",
    description: "Comprehensive logistics solutions: freight, customs, warehousing, tracking."
};

export default function LogisticsPage() {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero */}
            <section className="container-width pt-12 text-center max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Comprehensive International Logistics Solutions</h1>
                <p className="text-xl text-white/60">
                    Navigating international logistics requires expertise. We provide end-to-end management that removes complexity from your operations.
                </p>
            </section>

            {/* Features Grid */}
            <section className="container-width">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <Ship className="w-10 h-10 text-blue-400 mb-2" />
                            <CardTitle className="text-2xl">Shipping & Freight Management</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white/70">
                            Multimodal freight solutions giving you flexibility. We manage sea freight for cost-effective bulk shipments, air freight for time-sensitive cargo, and land transport for regional distribution.
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <FileText className="w-10 h-10 text-purple-400 mb-2" />
                            <CardTitle className="text-2xl">Customs Clearance</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white/70">
                            Our brokerage specialists navigate complex regulatory requirements. We manage tariff optimization, duty drawback programs, and regulatory filings to minimize delays.
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <Layers className="w-10 h-10 text-emerald-400 mb-2" />
                            <CardTitle className="text-2xl">Warehousing & Inventory</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white/70">
                            Secure storage with flexible terms. Value-added services including quality inspections, labeling, and kitting. Real-time inventory visibility allows for smart planning.
                        </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10">
                        <CardHeader>
                            <MapPin className="w-10 h-10 text-orange-400 mb-2" />
                            <CardTitle className="text-2xl">Visibility & Tracking</CardTitle>
                        </CardHeader>
                        <CardContent className="text-white/70">
                            Complete transparency with real-time tracking. From departure to destination, you have visibility into shipment progress and estimated arrival times.
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="container-width">
                <div className="bg-black/40 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
                    <h2 className="text-3xl font-bold mb-10 text-center">The Logistics Process</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { step: "01", title: "Consultation", desc: "Route analysis & strategy design." },
                            { step: "02", title: "Compliance", desc: "Documentation & regulatory prep." },
                            { step: "03", title: "Booking", desc: "Securing capacity with top carriers." },
                            { step: "04", title: "Clearance", desc: "Smooth customs processing." },
                        ].map((item) => (
                            <div key={item.step} className="relative">
                                <div className="text-5xl font-bold text-white/5 font-mono absolute -top-6 -left-2">{item.step}</div>
                                <div className="relative z-10">
                                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                                    <p className="text-sm text-white/60">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="container-width text-center py-12">
                <div className="max-w-2xl mx-auto space-y-6">
                    <h2 className="text-3xl font-bold">Ready to streamline your logistics?</h2>
                    <p className="text-white/60">Our team will design a customized solution that reduces costs and accelerates delivery.</p>
                    <Link href="/contact">
                        <Button size="lg" className="rounded-full">Get a Custom Quote <ArrowRight className="ml-2 w-4 h-4" /></Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}