export const SITE_URL = "https://www.terrassement-lezoux.fr";

export const ENTREPRISE = {
  nom: "Bland Terrassement",
  raisonSociale: "SARL Bland Terrassement",
  telephone: "06 74 46 95 81",
  telephoneLien: "tel:0674469581",
  email: "bland.terrassement@gmail.com",
  adresse: "82 A rue Félix Duchasseint",
  codePostal: "63190",
  ville: "Lezoux",
  siren: "840 498 208",
  siret: "840 498 208 00023",
  tva: "FR06 840 498 208",
  capital: "5 000 €",
  gerant: "Yannick Bland",
} as const;

export const HORAIRES = [
  { jours: "Lundi – vendredi", heures: "8h – 19h" },
  { jours: "Samedi", heures: "8h – 12h" },
  { jours: "Dimanche", heures: "Fermé" },
] as const;

/** Communes citées sur les pages métiers. Ne pas en ajouter d'autres. */
export const COMMUNES = [
  "Lezoux",
  "Thiers",
  "Pont-du-Château",
  "Maringues",
  "Cournon-d'Auvergne",
] as const;
