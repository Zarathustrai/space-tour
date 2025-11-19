"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Globe, ShieldCheck, Truck, Clock, Activity } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function HomePage() {
    return (
        <div className="space-y-24 pb-20">

            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden">
                <div className="container-width flex flex-col items-center text-center z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-6"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
                        Your Global Trade Partner
                    </motion.div>

                    <motion.h1
                        {...fadeInUp}
                        className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50 mb-6"
                    >
                        Your Single Partner for Global Sourcing & Seamless Logistics
                    </motion.h1>

                    <motion.p
                        {...fadeInUp}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-white/60 max-w-2xl mb-10"
                    >
                        We handle the entire cycle—from finding the right products worldwide to delivering them to your door—simplifying your supply chain and driving your growth.
                    </motion.p>

                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link href="/contact">
                            <Button size="lg" className="rounded-full text-base h-12 px-8">Optimize Your Supply Chain</Button>
                        </Link>
                        <Link href="/logistics">
                            <Button variant="outline" size="lg" className="rounded-full text-base h-12 px-8">Explore Services</Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* USP Section */}
            <section className="container-width">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Why Partner with Space Tour LTD?</h2>
                        <p className="text-white/70 text-lg">
                            We combine comprehensive procurement capabilities with full-service logistics management, eliminating the complexity of working with multiple vendors.
                        </p>
                        <ul className="space-y-4 mt-4">
                            {[
                                { title: "End-to-End Management", desc: "One partner for sourcing, QA, and delivery.", icon: Activity },
                                { title: "Global Reach, Local Expertise", desc: "Vetted suppliers & deep regulatory know-how.", icon: Globe },
                                { title: "Risk Reduction", desc: "Compliance, documentation, and inspections.", icon: ShieldCheck },
                                { title: "Efficiency", desc: "Better rates and faster turnaround times.", icon: Clock }
                            ].map((item) => (
                                <li key={item.title} className="flex gap-4 items-start">
                                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                                        <item.icon className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{item.title}</h4>
                                        <p className="text-sm text-white/50">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { k: "12+", v: "Years Experience" },
                            { k: "35+", v: "Countries" },
                            { k: "2.5k+", v: "Containers/Yr" },
                            { k: "94%", v: "Retention Rate" }
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.k}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm text-center hover:border-blue-500/30 transition-colors"
                            >
                                <div className="text-4xl font-bold text-white mb-1 font-mono">{stat.k}</div>
                                <div className="text-sm text-white/50 uppercase tracking-wider font-medium">{stat.v}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Teaser */}
            <section className="container-width">
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="group relative overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                        <CardContent className="p-8 space-y-4">
                            <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                                <Truck className="w-6 h-6 text-blue-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Logistics Services</h3>
                            <p className="text-white/60">
                                From sea and air freight to customs brokerage and warehousing, our logistics solutions ensure your products move efficiently across borders.
                            </p>
                            <Link href="/logistics" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium pt-4">
                                Explore Logistics <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="group relative overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 transition-all">
                        <CardContent className="p-8 space-y-4">
                            <div className="h-12 w-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                <Globe className="w-6 h-6 text-purple-400" />
                            </div>
                            <h3 className="text-2xl font-bold">Strategic Sourcing</h3>
                            <p className="text-white/60">
                                Gain access to a vast portfolio spanning electronics, home goods, and textiles. We identify reliable suppliers and ensure quality.
                            </p>
                            <Link href="/sourcing" className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium pt-4">
                                Discover Sourcing <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </div>
    );
}