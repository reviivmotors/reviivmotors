# Reviiv Motors deployment

The active Astro project is in `reviiv-site/`. The top-level `index.html` is the previous website and is not used by the current deployment.

## Existing hosting

- GitHub repository: `reviivmotors/reviivmotors`
- Production branch: `main`
- Cloudflare Worker: `reviivmotors`
- Custom domains: `reviivmotors.ca` and `www.reviivmotors.ca`
- Existing Cloudflare root directory: `/`
- Existing deploy command: `npx wrangler deploy`

Cloudflare installs the root dependencies, then Wrangler's custom build runs `npm run build`. That installs the Astro project's locked dependencies and builds its static pages into `reviiv-site/dist`. Wrangler publishes only that directory. Source artwork, local backups, and unrelated top-level source folders are not published.

The configuration retains the existing Worker name, account, compatibility date, compatibility flag, workers.dev URL, and custom domains. Authentication remains with Cloudflare's existing GitHub integration and build token; no credentials are stored in this repository.

## Local commands

From the repository root:

```sh
npm ci
npm run build
npx wrangler deploy --dry-run
```

The Node version is pinned in `.node-version` for Cloudflare Builds. For local Astro development, use the existing scripts in `reviiv-site/`.

## Editing content

- Vehicles and body types: `reviiv-site/src/data/inventory.ts`
- Opening hours: `reviiv-site/src/data/business.ts`
- Homepage: `reviiv-site/src/pages/index.astro`
- What We Offer: `reviiv-site/src/pages/what-we-offer.astro`
- Shared navigation and footer: `reviiv-site/src/layouts/SiteLayout.astro`

Push reviewed changes to `main` to trigger the existing Cloudflare build. Confirm the latest Cloudflare deployment succeeds before considering a change live. Previous Worker versions remain available in Cloudflare for rollback.
