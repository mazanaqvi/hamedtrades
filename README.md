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

Pushes to `main` build the React app and publish `dist` with GitHub Actions. The site is served from `/hamedtrades/`, so asset URLs and routes include that path.

- **Privacy Policy URL:** `https://mazanaqvi.github.io/hamedtrades/privacy`
- **Terms of Service URL:** `https://mazanaqvi.github.io/hamedtrades/terms`

Cloudflare Pages can still use build command `npm run build` and output directory `dist`. Leave `VITE_BASE` unset there so the site is served from `/`.

## Before you rely on it

The contact path on the legal pages is the Discord application owner. If you have a public email, add it to the Contact section on both legal pages.
