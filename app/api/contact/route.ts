import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, phone, type, layout, city, timeline, message } = body;

  if (!name || !email) {
    return NextResponse.json(
      { error: "Jméno a e-mail jsou povinné." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    phone: phone || null,
    type: type || null,
    layout: layout || null,
    city: city || null,
    timeline: timeline || null,
    message: message || null,
  });

  if (error) {
    console.error("Supabase insert error:", error);
    return NextResponse.json(
      { error: "Chyba při ukládání. Zkuste to prosím znovu." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
