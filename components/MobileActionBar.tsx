export default function MobileActionBar() {
  const mailSubject = encodeURIComponent("Demande de devis – Bland Terrassement");
  const mailBody = encodeURIComponent(
    [
      "Bonjour,",
      "",
      "Je souhaiterai un devis pour :",
      "",
      "Type de travaux :",
      "______________",
      "",
      "Adresses du chantier :",
      "____________________",
      "",
      "Détails supplémentaires :",
      "_______________________",
      "",
      "Nom Prénom :",
      "__________",
      "",
      "Téléphone :",
      "_________",
      "",
      "Merci,",
    ].join("\n")
  );

  return (
    <div className="md:hidden fixed inset-x-0 bottom-3 z-50 px-3 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-md rounded-2xl shadow-2xl shadow-black/30 ring-1 ring-black/10 bg-white/90 backdrop-blur-md px-2 py-2">
        <div className="flex gap-2">
          <a
            href="tel:0674469581"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-orange-600 text-white text-sm font-semibold rounded-xl px-3 py-2.5 shadow-md shadow-black/20 hover:bg-orange-700 transition-transform duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            aria-label="Appeler"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4.5 w-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.31 1.7.57 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.09a2 2 0 0 1 2.11-.45c.8.26 1.64.45 2.5.57A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Appeler</span>
          </a>

          <a
            href={`mailto:bland.terrassement@gmail.com?subject=${mailSubject}&body=${mailBody}`}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-white/60 border border-gray-300/80 text-gray-900 text-sm font-semibold rounded-xl px-3 py-2.5 shadow-sm shadow-black/10 hover:bg-white/85 hover:border-gray-300 hover:shadow-md hover:shadow-black/15 hover:ring-1 hover:ring-black/10 transition-all duration-200 active:scale-95 active:shadow-sm active:shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
            aria-label="Envoyer un mail"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4.5 w-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            <span>Mail</span>
          </a>
        </div>
        <p className="mt-1 text-center text-[11px] leading-tight font-medium italic text-blue-950">
          Réponse sous 24–48h
        </p>
      </div>
    </div>
  );
}

