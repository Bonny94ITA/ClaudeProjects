/** Servizi offerti — consumati da <Services />. Aggiungi/modifica liberamente. */
export type Service = {
  title: string;
  description: string;
  /** Nome icona (vedi src/components/ui/Icon.astro). */
  icon: string;
  /** A chi è rivolto, in una riga. */
  tag: string;
};

export const services: Service[] = [
  {
    title: "Sito vetrina",
    description:
      "Un sito veloce e curato che racconta cosa fai, dove sei e quando sei aperto. Si legge bene anche dal telefono, senza occhiali.",
    icon: "storefront",
    tag: "Per chi parte da zero",
  },
  {
    title: "Farsi trovare su Google",
    description:
      "Scheda Google Business sistemata, mappe, recensioni e SEO locale: quando qualcuno cerca «idraulico vicino a me», esci tu.",
    icon: "pin",
    tag: "Per chi è invisibile online",
  },
  {
    title: "Prenotazioni e ordini",
    description:
      "Tavoli, appuntamenti e ordini direttamente dal sito o da WhatsApp. Il telefono squilla di meno — e solo per le cose importanti.",
    icon: "calendar-check",
    tag: "Per chi vive al telefono",
  },
  {
    title: "Ci pensiamo noi",
    description:
      "Hosting, sicurezza, gli orari da cambiare, la foto nuova da caricare: scrivici e ce ne occupiamo. Tu pensa al tuo lavoro.",
    icon: "wrench",
    tag: "Per chi non ha tempo",
  },
];
