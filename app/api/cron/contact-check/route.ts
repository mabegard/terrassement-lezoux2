import { NextRequest, NextResponse } from "next/server";
import { CONTACT_INBOX, sendContactEmail } from "@/lib/contact-mail";

export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization");

  if (!secret || auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const when = new Intl.DateTimeFormat("fr-FR", {
    timeZone: "Europe/Paris",
    dateStyle: "full",
    timeStyle: "short",
  }).format(new Date());

  const result = await sendContactEmail({
    nom: "Bland Terrassement",
    email: CONTACT_INBOX,
    telephone: "06 74 46 95 81",
    sujet: "Test du dimanche",
    message: [
      `Test du ${when}.`,
      "Si ce message est dans bland.terrassement@gmail.com, le formulaire de devis fonctionne.",
      "S’il n’arrive pas, les demandes des clients ne partent pas non plus.",
    ].join("\n"),
  });

  if (!result.ok) {
    console.error("Test dimanche échoué:", result.error);
    return NextResponse.json({ ok: false, error: result.error }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: result.id });
}
