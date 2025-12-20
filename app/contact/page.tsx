"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simuler l'envoi du formulaire
    // Dans un vrai projet, vous devriez créer une API route pour gérer l'envoi d'email
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Demandez un devis gratuit ou posez-nous vos questions. Nous vous
            répondrons dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  required
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label
                  htmlFor="sujet"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Sujet *
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  required
                  value={formData.sujet}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="renseignement">Renseignements</option>
                  <option value="urgence">Intervention urgente</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900"
                />
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                  Message envoyé avec succès ! Nous vous répondrons rapidement.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                  Une erreur est survenue. Veuillez réessayer.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Nos coordonnées
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  Téléphone
                </h3>
                <a
                  href="tel:0674469581"
                  className="text-orange-600 hover:text-orange-700 text-lg"
                >
                  06 74 46 95 81
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">✉️</span>
                  Email
                </h3>
                <a
                  href="mailto:bland.terrassement@gmail.com"
                  className="text-orange-600 hover:text-orange-700 text-lg"
                >
                  bland.terrassement@gmail.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  Adresse
                </h3>
                <p className="text-gray-700 text-lg">
                  82 Rue Felix Duchasseint
                  <br />
                  63190 LEZOUX
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="text-2xl mr-3">⏰</span>
                  Zone d'intervention
                </h3>
                <p className="text-gray-700">
                  Nous intervenons dans toute la région Auvergne-Rhône-Alpes,
                  avec une spécialisation sur Lezoux et ses environs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

