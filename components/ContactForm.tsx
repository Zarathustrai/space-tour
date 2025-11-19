"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactForm(){
    const [status,setStatus] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        setIsLoading(true);
        setStatus("");

        const form = new FormData(e.currentTarget);
        const res = await fetch("/api/contact", { method:"POST", body: form });

        setIsLoading(false);
        setStatus(res.ok ? "Thanks — we’ll be in touch." : "Something went wrong.");
        if(res.ok) e.currentTarget.reset();
    }

    return (
        <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Full Name *</label>
                    <input name="name" required className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"/>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Company</label>
                    <input name="company" className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"/>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Email *</label>
                    <input name="email" type="email" required className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"/>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium leading-none">Phone</label>
                    <input name="phone" className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"/>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Area of Interest</label>
                <select name="interest" className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                    <option value="General">General Inquiry</option>
                    <option value="Logistics">Logistics Services</option>
                    <option value="Sourcing">Product Sourcing</option>
                    <option value="Both">Both</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium leading-none">Message *</label>
                <textarea name="message" required rows={4} className="flex min-h-[80px] w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"/>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Submit Inquiry"}
            </Button>

            {status && <p className="text-sm text-center text-white/70 mt-2">{status}</p>}
        </form>
    );
}