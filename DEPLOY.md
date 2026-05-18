# Deploy Puttanamane to puttanamane.com (GoDaddy)

Your site is a static React app. After `npm run build`, upload the **`dist`** folder (or use Netlify/Vercel below).

---

## Before you deploy

1. Update **`src/settings.js`** — real phone, WhatsApp, Airbnb URL, address, and your photos in `public/images/`.
2. Run locally: `npm install` then `npm run build`.
3. Test: `npm run preview` → open http://localhost:4173

---

## Option A — GoDaddy Web Hosting (cPanel)

Use this if you bought **hosting + domain** on GoDaddy.

1. Build on your PC:
   ```bash
   npm run build
   ```
2. Log in to **GoDaddy** → **My Products** → your hosting → **cPanel** (or **Manage**).
3. Open **File Manager** → folder **`public_html`** (sometimes `www`).
4. Delete old default files (`index.html`, etc.) if this is a new site.
5. Upload **everything inside** `dist/` (not the `dist` folder itself):
   - `index.html`
   - `assets/` folder
   - `favicon.svg`, `icons.svg`, `images/`, `.htaccess`
6. In GoDaddy → **Domains** → **puttanamane.com** → **DNS**:
   - **A** record `@` → your hosting IP (GoDaddy often sets this automatically).
   - **CNAME** `www` → `puttanamane.com` or hosting hostname.
7. Wait 15 minutes–48 hours for DNS. Visit https://puttanamane.com

**SSL:** In cPanel, use **SSL/TLS** or GoDaddy’s **Secure your site** to enable HTTPS.

---

## Option B — Netlify + GoDaddy domain (recommended, free)

Hosting is free; GoDaddy only points the domain.

1. Push this project to **GitHub** (create a repo, push code).
2. Go to [netlify.com](https://www.netlify.com) → **Add new site** → **Import from Git**.
3. Build settings (auto-filled from `netlify.toml`):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Note your Netlify URL (e.g. `random-name.netlify.app`).
5. Netlify → **Site configuration** → **Domain management** → **Add domain** → `puttanamane.com` and `www.puttanamane.com`.
6. Netlify shows DNS records. In **GoDaddy** → **DNS** for puttanamane.com:

   | Type  | Name | Value                    |
   |-------|------|--------------------------|
   | A     | @    | `75.2.60.5` (Netlify IP) |
   | CNAME | www  | `your-site.netlify.app`  |

   Use the **exact** values Netlify shows (they may change).

7. Enable **HTTPS** in Netlify (automatic after DNS verifies).

---

## Option C — Vercel + GoDaddy domain

Same idea as Netlify:

1. Push to GitHub → [vercel.com](https://vercel.com) → Import project.
2. Add domain `puttanamane.com` in Vercel → copy DNS records to GoDaddy.

---

## Checklist

- [ ] Real contact & Airbnb links in `settings.js`
- [ ] Your photos in `public/images/`
- [ ] `npm run build` succeeds
- [ ] DNS points to hosting (A / CNAME)
- [ ] HTTPS enabled
- [ ] Test on phone: puttanamane.com

---

## Troubleshooting

- **Blank page:** Upload all of `dist/assets/`, not only `index.html`.
- **404 on refresh:** Ensure `.htaccess` is in `public_html` (GoDaddy) or use Netlify/Vercel config included in this repo.
- **Domain not loading:** DNS can take up to 48 hours; check [dnschecker.org](https://dnschecker.org).
