"use client";
import { useState } from "react";


export default function ContactForm(){
    const [status,setStatus] = useState<string>("");
    async function onSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setStatus("Sending…");
        const form = new FormData(e.currentTarget);
        const res = await fetch("/api/contact", { method:"POST", body: form });
        setStatus(res.ok ? "Thanks — we’ll be in touch." : "Something went wrong.");
        if(res.ok) e.currentTarget.reset();
    }
    return (
        <form onSubmit={onSubmit} className="card p-6 grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
                <input name="name" required placeholder="Full Name *" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"/>
                <input name="company" placeholder="Company" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"/>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <input name="email" type="email" required placeholder="Email Address *" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"/>
                <input name="phone" placeholder="Phone" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"/>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <select name="interest" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30">
                    <option value="General">General Inquiry</option>
                    <option value="Logistics">Logistics Services</option>
                    <option value="Sourcing">Product Sourcing</option>
                    <option value="Both">Both</option>
                </select>
                <input name="volume" placeholder="Estimated monthly volume (optional)" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"/>
            </div>
            <textarea name="message" required placeholder="Tell us about your requirements *" rows={5} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/30"/>
            <button type="submit" className="btn-primary w-fit">Submit Inquiry</button>
            {status && <p className="text-sm muted">{status}</p>}
        </form>
    );
}