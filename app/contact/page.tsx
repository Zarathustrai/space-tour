import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
    title: "Contact Space Tour LTD",
    description: "Get a Custom Supply Chain Quote."
};

export default function ContactPage() {
    return (
        <div className="container-width py-12">
            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Optimize Your Supply Chain</h1>
                    <p className="text-lg text-white/60 mb-8">
                        Share your requirements with us, and our team will develop a customized solution. Whether you need sourcing, logistics, or both—we are ready to help.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <Mail className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Email</h4>
                                <p className="text-white/60">hello@spacetour.tech</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <Clock className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Office Hours</h4>
                                <p className="text-white/60">Mon–Fri, 9:00–18:00</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                                <MapPin className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="font-semibold">Headquarters</h4>
                                <p className="text-white/60 max-w-xs leading-relaxed">
                                    Ormond House<br/>
                                    26/27 Boswell Street, Suite 2<br/>
                                    London, WC1N 3JZ<br/>
                                    United Kingdom
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}