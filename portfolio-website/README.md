# NorthSummit.agency

Modern agency website built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form (Resend)

The contact form uses [Resend](https://resend.com) to send emails.

### Local development

1. Sign up at [resend.com](https://resend.com) and create an API key
2. Create a `.env.local` file in the project root:

```
RESEND_API_KEY=re_your_api_key_here
```

3. Run `npm run dev` and test the form at `/contact`

### Production (Vercel)

1. Go to your Vercel project settings
2. Navigate to **Settings > Environment Variables**
3. Add `RESEND_API_KEY` with your production API key
4. Redeploy

### Production (Netlify)

1. Go to your Netlify site settings
2. Navigate to **Site configuration > Environment variables**
3. Add `RESEND_API_KEY` with your production API key
4. Trigger a redeploy

> **Note:** For Resend to send from a custom domain (e.g., `hello@northsummit.agency`), verify your domain in the Resend dashboard. Until then, use the default `onboarding@resend.dev` sender.

## Portfolio Screenshots

Project screenshots are stored in `public/projects/`. To add or replace:

1. Take a screenshot of the live site (recommended: 1200x675px or 16:9 ratio)
2. Save as PNG in `public/projects/`
3. Update the project entry in `src/data/site.ts`

Current projects and their image files:

| Project | Image file |
|---------|-----------|
| Roofing Business | `roofing01.png` |
| Plumber | `plumber001.png` |
| Digital Agency | `digital-agency.png` |
| Garage / Car Service | `garagecar.png` |
| Gym / Personal Trainer | `gym001.png` |
| Cleaners | `cleaners.png` |
| Veterinary Surgeon | `sonia-vet.png` |

## Deployment

### Netlify

The site is configured for Netlify deployment. Connect your GitHub repo and it will auto-detect the Next.js setup.

### Vercel

```bash
npx vercel
```

## Editing Content

All editable content (pricing, projects, process steps, agency info) is in `src/data/site.ts`.
