# brandontburns-site

Personal portfolio for Brandon T. Burns — plain HTML/CSS/JS, hosted free on GitHub Pages.

## Structure

```
index.html        Page content (About / Projects / Quest Log / Contact)
css/style.css      Styling (dark, high-tech / terminal theme)
js/main.js         Nav toggle, typing effect, footer year
assets/            Static files (resume.pdf)
```

## Edit before publishing

- `assets/resume.pdf`: replace this file to update the resume (keep the phone number off, since the site is public).

## Deploy to GitHub Pages

Repo: https://github.com/brandob33/brandontburns-site (already pushed).

On GitHub: repo **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main`, folder `/ (root)` → Save.
Site is live at `https://brandob33.github.io/brandontburns-site/` within a minute or two of enabling Pages.

## Custom domain: brandontburns.com

The `CNAME` file at the repo root already contains `brandontburns.com`.

1. In GitHub **Settings → Pages → Custom domain**, enter `brandontburns.com` and save.
2. In GoDaddy DNS settings for `brandontburns.com`:
   - **Turn off Domain Forwarding** if GoDaddy has any forwarding/parking set up for the domain — it conflicts with the records below.
   - Delete any existing `A` records on `@` and add these 4 `A` records for `@` (root domain), each pointing to one GitHub Pages IP:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add/edit a `CNAME` record: name `www`, value `brandob33.github.io`.
3. Wait for DNS to propagate (usually minutes, occasionally a few hours).
4. Back in GitHub Pages settings, enable **Enforce HTTPS** once it becomes available (GitHub needs to verify DNS and issue a certificate first).

Result: `brandontburns.com` is the primary address; `www.brandontburns.com` automatically redirects to it.
