# Filter Pro USA — Website Rebuild

Modern, professional rebuild of https://filterprousa.com/ (Filter Pro USA, LLC — Florida
commercial/industrial air filtration, 954-866-5590).

**Live preview:** https://mezastoned.github.io/filterpro-usa-website/

This is a proposal/draft for review — not the live production site.

## Structure

- `index.html` — Home: hero, trust strip, services overview, industries, why-us, process, CTA
- `services.html` — Service detail: collection systems, filters & parts, combustible dust testing, emergency service
- `contact.html` — Contact info + quote request form
- `css/styles.css` — All styling (design tokens at the top)
- `js/main.js` — Mobile nav + form placeholder handler
- `assets/favicon.svg` — Favicon / brand mark

Plain static HTML/CSS/JS — no build step. Host anywhere (GoDaddy, Netlify, Vercel,
Cloudflare Pages). Preview locally with any static server, e.g.:

```bash
python3 -m http.server 8741
```

## Before launch

1. **Wire up the contact form.** It currently shows a "call us" notice on submit
   (see `js/main.js`). Point the form at Formspree/Basin/GoDaddy forms and remove
   the interception.
2. **Confirm facts with the owner:** service area wording ("across Florida"),
   business entity name in the footer, and whether to publish an email address
   or street address.
3. **Optional upgrades:** real facility/equipment photos, customer testimonials
   (none exist publicly yet — collect some!), Google Business Profile link,
   and an email address for the contact page.

## Content sources

All copy is based on the existing site's claims (services, hours, taglines,
OSHA/NFPA dust testing, same-day parts shipping, 24-hour emergency line).
No testimonials were invented — the "FilterPro USA" reviews online (Florence, AL /
Birdeye/Glassdoor/BBB) belong to a different, unrelated company (filterpro.com).
