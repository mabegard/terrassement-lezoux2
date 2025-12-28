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
    // TEMPORAIRE : Utilise onboarding@resend.dev car le domaine n'est pas encore vérifié
    // Une fois terrassement-lezoux.fr vérifié sur Resend, changez pour contact@terrassement-lezoux.fr
    // En mode test, Resend n'envoie qu'à l'adresse email du compte (mabegard@gmail.com)
    const recipientEmail = process.env.RESEND_RECIPIENT_EMAIL || "mabegard@gmail.com";
    
    const { data, error } = await resend.emails.send({
      from: "Contact Bland Terrassement <onboarding@resend.dev>",
      to: [recipientEmail],
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
      console.error("Erreur Resend complète:", JSON.stringify(error, null, 2));
      
      // Gestion des erreurs spécifiques Resend
      let errorMessage = "Erreur lors de l'envoi de l'email";
      const errorMsg = error.message || String(error);
      const statusCode = 'statusCode' in error ? (error.statusCode as number) : undefined;
      
      if (errorMsg.includes("domain") || errorMsg.includes("Domain")) {
        errorMessage = "Le domaine terrassement-lezoux.fr n'est pas encore vérifié sur Resend. Veuillez vérifier votre domaine dans les paramètres Resend ou utiliser onboarding@resend.dev temporairement.";
      } else if (errorMsg.includes("API key") || errorMsg.includes("api key") || statusCode === 401) {
        errorMessage = "Clé API Resend invalide ou manquante. Veuillez vérifier que RESEND_API_KEY est configurée sur Vercel.";
      } else if (statusCode === 403) {
        errorMessage = "Permission refusée. Vous ne pouvez envoyer qu'à votre adresse email de compte (mabegard@gmail.com) jusqu'à ce que le domaine soit vérifié.";
      } else if (errorMsg.includes("testing emails")) {
        errorMessage = "En mode test, vous ne pouvez envoyer qu'à votre adresse email de compte Resend (mabegard@gmail.com).";
      }
      
      return NextResponse.json(
        { 
          error: errorMessage, 
          details: errorMsg,
          statusCode: statusCode,
          fullError: process.env.NODE_ENV === 'development' ? error : undefined
        },
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

