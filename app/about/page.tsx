"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Shield, Users, Lightbulb, ArrowRight, Globe, Target } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
};

export default function AboutPage() {
    return (
        <div className="space-y-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-12 container-width">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-4xl"
                >
                    <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-300 mb-6">
                        About Space Tour LTD
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Bridging the gap between <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Global Sourcing</span> &
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"> Logistics</span>
                    </h1>
                    <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
                        We built an integrated company where procurement and supply chain work together, removing the barriers of international trade for businesses worldwide.
                    </p>
                </motion.div>
            </section>

            {/* The Story / Mission Grid */}
            <section className="container-width">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div {...fadeInUp} className="space-y-6">
                        <h2 className="text-3xl font-bold">Our Story</h2>
                        <div className="space-y-4 text-white/70 text-lg">
                            <p>
                                Space Tour LTD was founded on a simple observation: businesses waste enormous resources coordinating between separate sourcing agents and logistics providers. This fragmentation creates communication gaps, increases risk, and slows down growth.
                            </p>
                            <p>
                                We set out to change that. Over more than a decade, we have developed deep relationships with manufacturers across 35+ countries while building robust logistics capabilities spanning all transport modes.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Target className="w-32 h-32 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <Rocket className="text-blue-400 w-6 h-6" /> Our Mission
                        </h3>
                        <p className="text-white/70 text-lg leading-relaxed">
                            We exist to be the single, accountable partner for your entire supply chain. By integrating sourcing and logistics, we enable businesses of all sizes to compete globally—accessing the same advantages previously available only to major corporations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="container-width">
                <motion.div {...fadeInUp} className="mb-12">
                    <h2 className="text-3xl font-bold">Our Core Values</h2>
                    <p className="text-white/60 mt-2">The principles that guide our global operations.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Shield, title: "Reliability", desc: "We do what we promise. Your business depends on consistency, and we deliver it." },
                        { icon: Users, title: "Partnership", desc: "Your success is our success. We invest in understanding your business deeply." },
                        { icon: Lightbulb, title: "Transparency", desc: "Honest communication about capabilities and timelines. No surprises." },
                        { icon: Globe, title: "Global Mindset", desc: "Bridging cultures and timezones to make the world your marketplace." }
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                                <CardHeader>
                                    <item.icon className="w-10 h-10 text-blue-400 mb-2" />
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-white/60">
                                    {item.desc}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team / Stats Section */}
            <section className="container-width">
                <div className="bg-black/40 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                            <p className="text-white/70 text-lg mb-6">
                                Space Tour LTD brings together procurement specialists, logistics professionals, and customs brokers with decades of combined experience. We speak your language—literally and figuratively.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <div className="text-2xl font-bold text-white">35+</div>
                                    <div className="text-sm text-white/50">Countries in Network</div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-lg border border-white/5">
                                    <div className="text-2xl font-bold text-white">12+</div>
                                    <div className="text-sm text-white/50">Years Experience</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-full min-h-[300px] bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">
                                {Array.from({ length: 36 }).map((_, i) => (
                                    <div key={i} className="bg-white/10 rounded-sm" />
                                ))}
                            </div>
                            <Globe className="w-32 h-32 text-blue-500/50 relative z-10" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}