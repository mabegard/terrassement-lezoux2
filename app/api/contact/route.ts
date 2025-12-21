import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.warn("RESEND_API_KEY n'est pas configurée. L'envoi d'emails ne fonctionnera pas.");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: NextRequest) {
  try {
    // Vérifier que Resend est configuré
    if (!resend || !resendApiKey) {
      console.error("RESEND_API_KEY n'est pas configurée");
      return NextResponse.json(
        { error: "Configuration email manquante. Veuillez contacter l'administrateur." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { nom, email, telephone, sujet, message } = body;

    // Validation basique
    if (!nom || !email || !telephone || !sujet || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    // Envoi de l'email via Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Site Web <onboarding@resend.dev>", // À changer avec votre domaine vérifié
      to: ["bland.terrassement@gmail.com"],
      replyTo: email,
      subject: `Nouveau message de contact - ${sujet}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${telephone}</p>
        <p><strong>Sujet :</strong> ${sujet}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Email envoyé avec succès", id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}

