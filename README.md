# Bottega Web — sito vetrina per attività locali

Sito one-page in stile Apple per proporre servizi web a piccole attività —
artigiani, negozi, professionisti. **100% statico**, veloce e pronto per
essere hostato gratuitamente. Nessun backend: i contatti arrivano via
WhatsApp ed email.

Costruito con **[Astro](https://astro.build)** + **Tailwind CSS v4**.

---

## 🚀 Avvio rapido

```bash
npm install        # installa le dipendenze
npm run dev        # avvia il dev server su http://localhost:4321
npm run build      # genera il sito statico in dist/
npm run preview    # anteprima della build di produzione
npm run check      # type-check (Astro + TypeScript)
```

## 🎨 Design — "La bottega, ma digitale"

- **Palette**: bianco calce `#f6f4f0`, blu inchiostro `#161c28`,
  **blu tuta da lavoro** `#2c5b84`, **ambra insegna** `#e8a33c`.
- **Font**: Bricolage Grotesque (titoli) + Instrument Sans (testo),
  self-hosted via `@fontsource` per privacy/GDPR e performance.
- **Tema scuro automatico** (`prefers-color-scheme`): la bottega di sera,
  con la luce della vetrina accesa.
- **Elemento firma**: la "vetrina digitale" nell'hero — un browser con tenda
  da negozio e cartellino APERTO; al passaggio del mouse si accende la luce.
- Micro-animazioni con rispetto di `prefers-reduced-motion`.

## ✏️ Personalizzazione (parti da qui)

Tutto il branding è centralizzato — non serve toccare i componenti:

| Cosa | Dove |
|---|---|
| Nome, contatti, WhatsApp, social | `src/config/site.ts` |
| Colori e font del brand | `src/styles/global.css` (blocco `@theme`) |
| Servizi offerti | `src/data/services.ts` |
| Metodo di lavoro e patti | `src/data/process.ts` |
| Testimonianze | `src/data/testimonials.ts` |

## 🏗️ Architettura

```
src/
├─ config/site.ts      → single source of truth (brand, contatti)
├─ data/*.ts           → contenuti tipizzati, separati dalla presentazione
├─ styles/global.css   → design system (token colori/font, tema scuro)
├─ scripts/reveal.ts   → animazioni "reveal" allo scroll (no dipendenze)
├─ components/
│  ├─ ui/              → primitive riusabili (Section, Button, Icon, BrandMark)
│  └─ *.astro          → sezioni della one-page (Hero, PainPoints, Services,
│                        Method, Testimonials, FinalCta)
├─ layouts/Base.astro  → <head> SEO/OpenGraph + JSON-LD, header/footer
└─ pages/              → index, privacy, 404
```

Principi: contenuti **data-driven** (modifichi i `.ts`, non l'HTML), primitive
UI riusabili, configurazione centralizzata, SEO/JSON-LD integrati, accessibilità
e performance mobile-first.

---

## ☁️ Hosting & costi

Essendo un sito **statico**, l'hosting può essere **gratuito**. L'unico costo
certo è il **dominio (~8–15 €/anno)**.

| Opzione | Costo | Note |
|---|---|---|
| **Cloudflare Pages** ⭐ | Gratis | Banda illimitata, CDN globale, SSL, dominio custom. Consigliato. |
| **Azure Static Web Apps** | Free tier | SSL + dominio custom, Functions gratis se servisse. Ideale se resti su Azure. |
| Netlify / Vercel | Free tier | Setup semplicissimo, limiti di banda sul piano free. |
| GitHub Pages | Gratis | Semplice, ma niente serverless. |
| AWS S3 + CloudFront | ~1–3 €/mese | Robusto ma più da configurare; overkill per i volumi attesi. |

### Deploy su Cloudflare Pages (consigliato)
1. Push del repo su GitHub.
2. Cloudflare Pages → *Create project* → collega il repo.
3. Build command: `npm run build` · Output directory: `dist`.
4. Aggiungi il dominio custom dalle impostazioni del progetto.

### Deploy su Azure Static Web Apps
1. Portale Azure → *Static Web Apps* → *Create* → collega GitHub.
2. Preset: **Custom** · App location: `/` · Output location: `dist`.
3. Azure crea da solo la GitHub Action di deploy.

> L'hosting effettivo lo configuriamo in un secondo momento: il sito è già pronto.

---

## 📄 Note

- Testi e testimonianze sono **placeholder professionali** in italiano: personalizzali.
- La pagina `/privacy` è un modello base: adattala ai dati reali prima di pubblicare.
- Font self-hosted (`@fontsource`) per privacy/GDPR e performance.
