import { Resend } from "resend";

/** Boîte qui reçoit les devis. Ne pas remplacer par une autre adresse. */
export const CONTACT_INBOX = "bland.terrassement@gmail.com";

const FROM = "Bland Terrassement <contact@terrassement-lezoux.fr>";

const SUJET_LABELS: Record<string, string> = {
  devis: "Demande de devis",
  renseignement: "Renseignements",
  urgence: "Intervention urgente",
  autre: "Autre",
};

export type ContactMessage = {
  nom: string;
  email: string;
  telephone: string;
  sujet: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function sujetLabel(sujet: string) {
  return SUJET_LABELS[sujet] || sujet;
}

export async function sendContactEmail(input: ContactMessage) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      ok: false as const,
      status: 500,
      error: "L’envoi d’email est indisponible. Appelez le 06 74 46 95 81.",
    };
  }

  const resend = new Resend(apiKey);
  const label = sujetLabel(input.sujet);

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: [CONTACT_INBOX],
    replyTo: input.email,
    subject: `${label} — ${input.nom}`,
    html: `
      <h2>${escapeHtml(label)}</h2>
      <p><strong>Nom :</strong> ${escapeHtml(input.nom)}</p>
      <p><strong>Email :</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Téléphone :</strong> ${escapeHtml(input.telephone)}</p>
      <p><strong>Message :</strong></p>
      <p>${escapeHtml(input.message).replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    console.error("Erreur Resend:", JSON.stringify(error));
    const message = error.message || "";
    const blocked =
      message.includes("domain") ||
      message.includes("Domain") ||
      message.includes("testing emails") ||
      ("statusCode" in error && error.statusCode === 403);

    return {
      ok: false as const,
      status: 500,
      error: blocked
        ? "L’envoi vers la boîte de l’entreprise n’est pas encore autorisé. Appelez le 06 74 46 95 81."
        : "Le message n’a pas pu être envoyé. Appelez le 06 74 46 95 81.",
    };
  }

  return { ok: true as const, id: data?.id };
}
