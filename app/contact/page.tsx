import ContactForm from "@/components/ContactForm";


export const metadata = {
    title: "Contact Space Tour LTD | Get Your Custom Supply Chain Quote",
    description: "Tell us your requirements and we’ll design a tailored program."
};


export default function Page(){
    return (
        <div className="space-y-8">
            <h1 className="h1">Let's Optimize Your Supply Chain</h1>
            <p className="p-xl max-w-3xl">Share your requirements and we’ll come back with a customized solution.</p>
            <ContactForm />
            <div className="grid md:grid-cols-3 gap-6">
                <div className="card p-6"><div className="font-medium">Email</div><div className="muted">hello@spacetour.tech</div></div>
                <div className="card p-6"><div className="font-medium">Office Hours</div><div className="muted">Mon–Fri, 9:00–18:00</div></div>
                <div className="card p-6"><div className="font-medium">Address</div><div className="muted">Space Tour LTD, UK, London</div></div>
            </div>
        </div>
    );
}