import type { Metadata } from "next";
import { ENTREPRISE, HORAIRES, SITE_URL } from "@/lib/entreprise";

export const metadata: Metadata = {
  title: "Mentions légales - Bland Terrassement",
  description: "Mentions légales du site de la SARL Bland Terrassement, Lezoux.",
  alternates: { canonical: `${SITE_URL}/mentions-legales` },
};

export default function MentionsLegales() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold mb-10 text-gray-900">Mentions légales</h1>

        <section className="card-relief p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Éditeur du site</h2>
          <p className="text-gray-700 leading-relaxed">
            {ENTREPRISE.raisonSociale}
            <br />
            Société à responsabilité limitée au capital de {ENTREPRISE.capital}
            <br />
            Siège social : {ENTREPRISE.adresse}, {ENTREPRISE.codePostal} {ENTREPRISE.ville}
            <br />
            SIREN : {ENTREPRISE.siren} — SIRET : {ENTREPRISE.siret}
            <br />
            Immatriculée au Registre national des entreprises (RNE)
            <br />
            N° TVA intracommunautaire : {ENTREPRISE.tva}
            <br />
            Téléphone :{" "}
            <a href={ENTREPRISE.telephoneLien} className="text-orange-600">
              {ENTREPRISE.telephone}
            </a>
            <br />
            E-mail :{" "}
            <a href={`mailto:${ENTREPRISE.email}`} className="text-orange-600">
              {ENTREPRISE.email}
            </a>
          </p>
          <p className="text-gray-700 mt-4">
            Directeur de la publication : {ENTREPRISE.gerant}, gérant.
          </p>
        </section>

        <section className="card-relief p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Horaires</h2>
          <ul className="text-gray-700 space-y-1">
            {HORAIRES.map((h) => (
              <li key={h.jours}>
                {h.jours} : {h.heures}
              </li>
            ))}
          </ul>
        </section>

        <section className="card-relief p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">Hébergement</h2>
          <p className="text-gray-700 leading-relaxed">
            Vercel Inc.
            <br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            <br />
            <a href="https://vercel.com" className="text-orange-600">
              vercel.com
            </a>
          </p>
        </section>

        <section className="card-relief p-8 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            Données personnelles
          </h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Les informations envoyées par le formulaire de contact (nom, e-mail,
            téléphone, message) servent uniquement à répondre à votre demande de
            devis. Elles sont transmises par e-mail à {ENTREPRISE.raisonSociale}
            et ne sont ni vendues ni cédées.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Vous pouvez demander l&apos;accès, la rectification ou la suppression de
            vos données en écrivant à{" "}
            <a href={`mailto:${ENTREPRISE.email}`} className="text-orange-600">
              {ENTREPRISE.email}
            </a>
            . Vous pouvez aussi adresser une réclamation à la CNIL (cnil.fr).
          </p>
        </section>

        <section className="card-relief p-8">
          <h2 className="text-2xl font-bold mb-4 text-orange-600">
            Propriété intellectuelle
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Les textes et photos de chantiers de ce site appartiennent à{" "}
            {ENTREPRISE.raisonSociale}. Toute reproduction sans autorisation est
            interdite.
          </p>
        </section>
      </div>
    </div>
  );
}
