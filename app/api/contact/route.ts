import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";


const resend = new Resend(process.env.RESEND_API_KEY);
const TO = "hello@spacetour.tech"; // change if needed


export async function POST(req: NextRequest){
    const form = await req.formData();
    const data = Object.fromEntries(form.entries());
    const html = `
<h2>New Inquiry</h2>
<pre>${JSON.stringify(data, null, 2)}</pre>
`;
    await resend.emails.send({ from: "Space Tour <onboarding@resend.dev>", to: TO, subject: "New Website Inquiry", html });
    return NextResponse.json({ ok: true });
}