/** Metodo di lavoro — consumato da <Method />. */
export type Step = {
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    title: "Un caffè",
    description:
      "Ci racconti il tuo lavoro: cosa fai, chi sono i tuoi clienti, cosa ti manca. Mezz'ora, anche al telefono.",
  },
  {
    title: "Costruiamo",
    description:
      "Prepariamo il sito e te lo mostriamo passo passo. Il prezzo lo decidiamo prima, insieme — e non si muove più.",
  },
  {
    title: "Restiamo",
    description:
      "Dopo la consegna non spariamo: aggiornamenti, assistenza e consigli quando servono. Come un fornitore di fiducia.",
  },
];

/** I patti chiari mostrati sotto ai passi. */
export const patti = [
  "Un solo referente, sempre lo stesso",
  "Niente parole difficili",
  "Se una cosa non ti serve, te lo diciamo",
];
