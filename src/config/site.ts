/**
 * Configurazione centrale del sito (single source of truth).
 * Modifica QUI nome, contatti e social: tutto il sito si aggiorna.
 */
export const site = {
  /** Nome del brand (placeholder: cambialo col nome della tua attività). */
  name: "Bottega Web",
  /** Slogan breve mostrato vicino al logo / nei meta. */
  tagline: "Siti web per piccole attività",
  /** Descrizione usata per SEO / OpenGraph. */
  description:
    "Siti web semplici, veloci e curati per artigiani, negozi e professionisti. Farsi trovare su Google, prenotazioni online e assistenza continua. Parliamo come mangiamo, e il preventivo è quello vero.",
  /** Dominio definitivo del sito (cambialo dopo l'acquisto del dominio). */
  url: "https://www.bottegaweb.it",

  /** Contatti — usati in header, CTA e footer. */
  email: "ciao@bottegaweb.it",
  /** Numero WhatsApp in formato internazionale senza + e senza spazi. */
  whatsapp: "393330000000",
  /** Messaggio precompilato per WhatsApp. */
  whatsappMessage: "Ciao! Vorrei informazioni per portare online la mia attività.",

  /** Città/zona di riferimento (per SEO locale). */
  area: "Italia",

  /** Profili social (usa "#" per nasconderli finché non li hai). */
  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
} as const;

/** Link WhatsApp pronto all'uso. */
export const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export type Site = typeof site;
