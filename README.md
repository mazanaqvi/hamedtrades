# Hamed Trades

Public site for the Hamed Trades Discord bot: landing page, terms of service, and privacy policy.

The bot’s code and tokens stay in a separate private project. This repository is safe to publish. Do not add `.env` files, bot tokens, or client secrets here.

## Pages

- `/` — landing page
- `/terms` — Terms of Service
- `/privacy` — Privacy Policy

The invite link uses Discord application id `1549971633723281458`. Change it in `src/invite.js`.

## Develop

```bash
npm install
npm run dev
```

## Discord Developer Portal

After this site is deployed over HTTPS, open the application → **General Information** and set:

- **Privacy Policy URL:** `https://YOUR_DOMAIN/privacy`
- **Terms of Service URL:** `https://YOUR_DOMAIN/terms`

Both URLs have to load without a login.

## Deploy

```bash
npm run build
```

Publish the `dist` folder.

- **Cloudflare Pages:** build command `npm run build`, output directory `dist`. `public/_redirects` keeps `/terms` and `/privacy` working.
- **GitHub Pages:** the build also copies `index.html` to `404.html` so those routes still open.

## Before you rely on it

The contact path on the legal pages is the Discord application owner. If you have a public email, add it to the Contact section on both legal pages.
