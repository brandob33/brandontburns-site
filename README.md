# brandontburns-site

Personal portfolio for Brandon T. Burns — plain HTML/CSS/JS, hosted free on GitHub Pages.

## Structure

```
index.html        Page content (About / Projects / Contact)
css/style.css      Styling (dark, high-tech / terminal theme)
js/main.js         Nav toggle, typing effect, footer year
assets/            Static files (put resume.pdf here)
```

## Edit before publishing

- `index.html`: replace the placeholder project cards (`Project Title One/Two/Three`) with real projects, and update the `mailto:`, LinkedIn, and GitHub links in the Contact section.
- `assets/`: add your real `resume.pdf` (see `assets/PLACE_RESUME_HERE.txt`), then delete that placeholder file.

## Deploy to GitHub Pages

1. Create a new GitHub repo (public), e.g. `brandontburns-site`.
2. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: repo **Settings → Pages** → Source: `Deploy from a branch` → Branch: `main`, folder `/ (root)` → Save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Connect your GoDaddy domain (later step)

1. In the GitHub repo, add a file named `CNAME` (no extension) at the root containing just your domain, e.g. `brandontburns.com`.
2. In GitHub **Settings → Pages**, set the custom domain to the same value and save.
3. In GoDaddy DNS settings for your domain:
   - Add 4 `A` records for `@` pointing to GitHub Pages' IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Add a `CNAME` record for `www` pointing to `<your-username>.github.io`.
4. Wait for DNS to propagate (can take up to a few hours), then enable **Enforce HTTPS** in GitHub Pages settings.

We'll walk through this together when you're ready — just say the word.
