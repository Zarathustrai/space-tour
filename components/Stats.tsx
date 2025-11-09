export default function Stats(){
    const data = [
        { k: "12+", v: "Years in Trade & Logistics" },
        { k: "35+", v: "Countries in Network" },
        { k: "2,500+", v: "Containers Shipped / Yr" },
        { k: "94%", v: "Client Retention" }
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.map((d)=> (
                <div key={d.v} className="card p-6 text-center animate-float">
                    <div className="text-3xl font-semibold">{d.k}</div>
                    <div className="muted text-sm mt-1">{d.v}</div>
                </div>
            ))}
        </div>
    );
}