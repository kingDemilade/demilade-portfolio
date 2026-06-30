# MPL Recovery Launch Setup Guide

Last updated: June 26, 2026

Goal: move the MPL Recovery website from the personal dev URL to the client-owned production domain:

- Primary domain: `mplrecovery.org`
- Recommended canonical URL: `https://www.mplrecovery.org`
- Recommended redirect: `https://mplrecovery.org` -> `https://www.mplrecovery.org`

Current dev URL:

- `https://dev.demilade-creatives.com/projects/website-projects/mpl-recovery-site/`

## Recommended Ownership Setup

Use client-owned accounts, with Demilade added as admin/maintainer.

This is the cleanest setup because:

- The client owns their domain, hosting, repo, billing, and long-term web property.
- Demilade can still make updates quickly as an admin.
- Future handoff is simple if the client changes vendors.
- Billing and access are not tied to a personal portfolio or agency account.
- The MPL Recovery site can live as its own standalone project instead of being nested inside the portfolio repo.

Avoid making the final production setup depend on Demilade's personal GitHub or Netlify account unless it is temporary.

## Recommended Account Structure

### Domain

Owned by:

- MPL Recovery / the client

Registrar options:

- Netlify Domains
- Cloudflare Registrar
- Namecheap
- GoDaddy
- Squarespace Domains

Recommendation:

- If the client wants the simplest setup, buy/manage the domain through Netlify.
- If the client already has a preferred registrar, buy it there and use either Netlify DNS or external DNS.

### GitHub

Owned by:

- A client-owned GitHub organization, ideally named something like `mpl-recovery`

Recommended repo:

- `mpl-recovery-site`

Recommended access:

- Client: organization owner
- Demilade: organization owner or repo admin

Recommendation:

- Use a GitHub organization if possible. It is cleaner than placing the repo under one person's personal account.

### Netlify

Owned by:

- A client-owned Netlify team/account

Recommended site name:

- `mpl-recovery`
- or `mpl-recovery-site`

Recommended access:

- Client: team owner
- Demilade: team owner/admin or developer with enough access to deploy and manage domains

## High-Level Launch Plan

1. Secure `mplrecovery.org`.
2. Create or confirm a client-owned GitHub organization.
3. Create a standalone GitHub repo for the MPL site.
4. Move/copy the current site files into that standalone repo.
5. Create or confirm a client-owned Netlify team.
6. Connect Netlify to the GitHub repo.
7. Deploy to a temporary Netlify URL.
8. Add `mplrecovery.org` and `www.mplrecovery.org` in Netlify.
9. Configure DNS.
10. Enable/verify HTTPS.
11. Test the production site.
12. Keep Demilade's admin access in GitHub and Netlify for future updates.

## Phase 1 - Secure The Domain

Do this first.

1. Go to the chosen registrar.
2. Search for `mplrecovery.org`.
3. Buy/register the domain using the client's email and payment method.
4. Turn on auto-renew.
5. Save registrar login access in the client's password manager.
6. Add Demilade as a delegated user/admin if the registrar supports it.

Optional but recommended:

- Buy `mpl-recovery.org` and redirect it to `mplrecovery.org`.
- If budget allows, also consider securing `mplrecovery.com` to protect the brand.

Do not point DNS yet unless the Netlify site already exists.

## Phase 2 - Create Client-Owned GitHub Setup

Best option:

- Create a GitHub organization for MPL Recovery.

Suggested organization name:

- `mpl-recovery`
- `mplrecovery`

Steps:

1. Client signs into GitHub.
2. Client creates a new organization.
3. Client adds Demilade as an organization member.
4. Give Demilade either Owner access or repo Admin access.
5. Create a new repository named `mpl-recovery-site`.

Repository visibility:

- Private is recommended while the site is still being prepared.
- Public is acceptable only if the client is comfortable with the source being visible.

When creating the repo:

- Do not initialize with a README if you plan to push existing files directly.
- Do not add a starter `.gitignore` if the local repo already has one.
- Do not add a license unless the client has chosen one.

## Phase 3 - Prepare The Site As A Standalone Repo

The current site lives inside the portfolio repo at:

```text
projects/website-projects/mpl-recovery-site/
```

For production, the site should become its own repo.

Recommended standalone repo structure:

```text
mpl-recovery-site/
  index.html
  about.html
  services.html
  testimonials.html
  survey.html
  book.html
  css/
  data/
  docs/
  images/
  js/
```

Before pushing to GitHub, check:

1. The homepage is named `index.html`.
2. All CSS, JS, image, and page links are relative and still work from the repo root.
3. Placeholder links are intentional.
4. `.DS_Store` files are ignored.
5. Final client-sensitive credentials are not committed.
6. `js/testimonials-config.js` is safe to publish.

Current known cleanup items before launch:

- Fix the About founder image `alt` text mismatch.
- Decide what to do with the placeholder Videos nav link.
- Replace missing About and Testimonials image placeholders.
- Replace or remove the homepage quiz placeholder.
- Replace or remove the hidden Calendly placeholder embed.
- Confirm whether Google Apps Script URLs in `js/testimonials-config.js` should be public client-side config.

## Phase 4 - Push The Site To GitHub

After the client-owned repo exists, push the standalone site files to it.

General command shape:

```bash
git init
git add .
git commit -m "Initial MPL Recovery site"
git branch -M main
git remote add origin git@github.com:CLIENT_ORG/mpl-recovery-site.git
git push -u origin main
```

Replace:

- `CLIENT_ORG` with the actual GitHub organization name.

Important:

- Do this from the standalone `mpl-recovery-site/` folder, not from the root of the portfolio repo.
- If using HTTPS instead of SSH, use the HTTPS remote GitHub provides.

## Phase 5 - Create Client-Owned Netlify Setup

Best option:

- Client owns the Netlify team.
- Demilade is added as an admin or developer.

Steps:

1. Client signs into Netlify.
2. Client creates a team/account for MPL Recovery.
3. Client invites Demilade.
4. Demilade accepts the invite.
5. In Netlify, create a new site from Git.
6. Connect GitHub.
7. Select the client-owned `mpl-recovery-site` repo.

Build settings for the current static site:

- Build command: leave blank
- Publish directory: `.`

If Netlify requires a publish directory value, use:

```text
.
```

After setup:

1. Trigger the first deploy.
2. Open the temporary Netlify URL.
3. Click through every page.
4. Confirm CSS, images, scripts, forms, dark mode, and mobile menu work.

## Phase 6 - Add The Custom Domain In Netlify

In Netlify:

1. Open the MPL Recovery site.
2. Go to Domain management.
3. Add `mplrecovery.org`.
4. Add `www.mplrecovery.org`.
5. Choose the primary domain.

Recommended primary domain:

```text
www.mplrecovery.org
```

Recommended redirect:

```text
mplrecovery.org -> www.mplrecovery.org
```

Why:

- Netlify's docs recommend making the `www` subdomain primary when using third-party external DNS, because external DNS apex setups can have performance limitations.
- If using Netlify DNS, either apex or `www` can work well, but `www` primary is still a clean, conventional setup.

## Phase 7 - Configure DNS

There are two clean options.

### Option A - Use Netlify DNS

This is the simplest option if the domain is only used for the website.

Steps:

1. Add the domain to the Netlify site.
2. In Netlify, start Netlify DNS setup.
3. Netlify will provide name servers.
4. Go to the domain registrar.
5. Replace the registrar's name servers with Netlify's name servers.
6. Wait for DNS propagation.
7. Verify the domain inside Netlify.

Pros:

- Easier Netlify setup.
- SSL is usually smoother.
- DNS is managed in the same place as hosting.

Cons:

- If the client later needs email or other DNS records, those records must be added in Netlify DNS.

### Option B - Keep DNS At The Registrar

Use this if the client wants to keep DNS at Namecheap, GoDaddy, Cloudflare, etc.

For `www.mplrecovery.org`:

```text
Type: CNAME
Name: www
Value: YOUR-NETLIFY-SITE-NAME.netlify.app
```

For `mplrecovery.org` apex:

Preferred, if registrar supports ALIAS/ANAME/CNAME flattening:

```text
Type: ALIAS / ANAME / flattened CNAME
Name: @
Value: apex-loadbalancer.netlify.com
```

Fallback, if registrar does not support ALIAS/ANAME/CNAME flattening:

```text
Type: A
Name: @
Value: 75.2.60.5
```

Replace:

- `YOUR-NETLIFY-SITE-NAME` with the actual Netlify site name.

Notes:

- DNS can take minutes to 48 hours to fully propagate.
- Do not delete existing email records like MX, SPF, DKIM, or DMARC if the client uses domain email.

## Phase 8 - Enable HTTPS

In Netlify:

1. Open the site.
2. Go to Domain management.
3. Check HTTPS/SSL status.
4. Wait for Netlify to provision the certificate.
5. Force HTTPS if available.
6. Test both:

```text
https://mplrecovery.org
https://www.mplrecovery.org
```

Expected result:

- Both should load securely.
- One should redirect to the primary domain.
- No browser security warnings.

## Phase 9 - Production QA Checklist

Test desktop and mobile.

Pages:

- Home
- About
- Services
- Testimonials
- Survey
- Book

Navigation:

- Logo goes home.
- Active nav states make sense.
- Mobile hamburger opens and closes.
- Mobile nav links work.
- Videos link is either working or intentionally removed/disabled.

Visuals:

- Hero images load.
- Placeholder images are replaced or intentionally kept.
- Cards do not overlap.
- Text fits on mobile.
- Buttons wrap cleanly.

Functionality:

- Dark mode toggles work on desktop and mobile.
- Dark mode preference persists after refresh.
- Testimonials load from Google Sheets or fallback JSON.
- Testimonial filters work.
- Survey form submits or shows a clear configured error.
- Booking page does not show broken Calendly content.

SEO/browser basics:

- Page titles are appropriate.
- Favicon is added if available.
- Social preview image is added if available.
- Footer year and brand name are correct.

Performance/accessibility:

- Images are optimized enough for web.
- Important images have useful `alt` text.
- Decorative images use empty `alt=""`.
- Keyboard focus is visible.
- Buttons and form fields are reachable by keyboard.

## Phase 10 - Handoff Access Checklist

Client should have:

- Registrar login
- GitHub organization ownership
- Netlify team ownership
- Google Sheet ownership for testimonials
- Google Apps Script ownership or edit access
- Any email/DNS provider access

Demilade should have:

- GitHub repo admin access
- Netlify site/team admin or developer access
- Domain delegated access if available
- Google Sheet edit access if maintaining testimonials
- Google Apps Script edit access if maintaining survey submissions

Store securely:

- Registrar login
- Netlify login
- GitHub login
- Google account used for Sheets/Apps Script
- Recovery codes for two-factor authentication

## Suggested Message To Client

Use this if you want a simple way to explain the setup:

> To make sure MPL Recovery fully owns its website long-term, I recommend setting the domain, GitHub repository, and Netlify hosting under your business-owned accounts. I will be added as an admin so I can build, deploy, and maintain the site, but the domain and hosting will belong to MPL Recovery. This keeps ownership clean and makes future handoff simple.

## Quick Decision Guide

Use client-owned GitHub and Netlify if:

- This is the final production launch.
- The client should fully own the website.
- You want clean billing and access.
- You want an easy future handoff.

Use Demilade-owned GitHub and Netlify only if:

- This is temporary.
- You need a very fast preview.
- The client has not created accounts yet.
- Everyone understands it should be migrated later.

Recommended final answer:

- Client-owned domain
- Client-owned GitHub organization
- Client-owned Netlify team
- Demilade added as admin

## Official References

- Netlify domain setup: https://docs.netlify.com/manage/domains/get-started-with-domains/
- Netlify deploys: https://docs.netlify.com/deploy/create-deploys/
- GitHub create repository: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
- GitHub add organization members: https://docs.github.com/en/organizations/managing-membership-in-your-organization/adding-people-to-your-organization
