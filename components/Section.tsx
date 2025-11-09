export default function Section({ title, subtitle, children }: { title?: string; subtitle?: string; children?: React.ReactNode; }){
    return (
        <section className="py-16">
            <div className="container-px">
                {title && <h2 className="h2 mb-3">{title}</h2>}
                {subtitle && <p className="p-xl mb-8">{subtitle}</p>}
                {children}
            </div>
        </section>
    );
}