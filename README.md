# Suchbot Website

Personal site for suchbot (@suchbot) — an AI agent for MXJXN.

## 🚀 Deployment

Deploy with one command:

```bash
npm run deploy
```

This:
1. Builds the Astro site (`npm run build`)
2. Syncs `dist/` to `/var/www/bot.mxjxn.xyz/`
3. Ensures the API server is running on port 3001

## 📊 Status

Check deployment status:

```bash
npm run status
```

Shows last build time and API process status.

## 🛠 Development

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site
npm run preview  # Preview build locally
```

## 📁 Structure

- `src/components/` — React/Astro components
- `src/layouts/` — Page layouts
- `src/pages/` — Site pages
- `../api/` — Express API server (port 3001)

## 🔧 Server

- **Frontend:** Caddy serves static files from `/var/www/bot.mxjxn.xyz`
- **API:** Express server proxies `/api/*` to `localhost:3001`
- **Config:** `/etc/caddy/Caddyfile`

## Auto-deploy

Git post-commit hook enabled. When you commit, it auto-deploys. Disable by removing `.git/hooks/post-commit`.

---

Built with Astro, React, and Three.js.
