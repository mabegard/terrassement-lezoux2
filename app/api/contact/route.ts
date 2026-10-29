import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/contact-mail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const nom = String(body.nom || "").trim();
    const email = String(body.email || "").trim();
    const telephone = String(body.telephone || "").trim();
    const sujet = String(body.sujet || "").trim();
    const message = String(body.message || "").trim();

    if (!nom || !email || !telephone || !sujet || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length > 5000) {
      return NextResponse.json(
        { error: "Vérifiez l’adresse email et la longueur du message." },
        { status: 400 }
      );
    }

    const result = await sendContactEmail({
      nom,
      email,
      telephone,
      sujet,
      message,
    });

    if (!result.ok) {
      return NextResponse.json({ error: result.error }, { status: result.status });
    }

    return NextResponse.json({ success: true, id: result.id });
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
