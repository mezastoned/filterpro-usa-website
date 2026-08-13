# Filter Pro USA — Website Rebuild

Modern, professional rebuild of https://filterprousa.com/ (Filter Pro USA, LLC — Florida
commercial/industrial air filtration, 954-866-5590).

**Live preview:** https://mezastoned.github.io/filterpro-usa-website/

This is a proposal/draft for review — not the live production site.

## Structure

- `index.html` — Home: hero (3 buyer-path CTAs), trust strip, filter-finder teaser,
  services overview, industries, why-us + stats, testimonials, CTA
- `filters.html` — Find Your Filter: 3-step photo ordering flow, brand list,
  what we carry, repeat-ordering/maintenance plans, parts FAQ
- `services.html` — Service detail: filters, collection systems, dust testing,
  emergency service + compliance FAQ
- `contact.html` — Contact info + quote request form
- `css/styles.css` — All styling (design tokens at the top)
- `js/main.js` — Mobile nav + form placeholder handler
- `assets/favicon.svg` — Favicon / brand mark
- `robots.txt` / `sitemap.xml` — SEO plumbing (domain must be swapped at launch)

Plain static HTML/CSS/JS — no build step. Host anywhere (GoDaddy, Netlify, Vercel,
Cloudflare Pages). Preview locally with any static server, e.g.:

```bash
python3 -m http.server 8741
```

## Owner questions (placeholders on the site)

Every spot needing the owner's input is marked in-page with an amber
`[BRACKETED PLACEHOLDER]` chip. The four highest-priority answers:

1. **Which brands do you stock/cross-reference?** (unlocks the filter-finder
   section and most SEO value)
2. **Service area, city by city** (used in hero, footer, FAQ, contact)
3. **Real numbers**: year founded, systems installed, counties served,
   SKUs stocked (replaces the stats panel placeholders)
4. **Differentiator in your own words** (the "What makes us different" slot)

Plus: email address, exact legal entity name, 24-hour line details, parts
quote turnaround, and 3 testimonials (slots are designed in on the homepage).

## Before launch

1. **Wire up the contact form.** It currently shows a "call us" notice on submit
   (see `js/main.js`). Point the form at Formspree/Basin/GoDaddy forms and remove
   the interception.
2. **Fill every amber `[PLACEHOLDER]` chip** (see Owner questions above).
3. **Swap the domain** in `sitemap.xml`, `robots.txt`, and the JSON-LD `url`
   in `index.html` to the production domain; add the business address to the
   JSON-LD once confirmed.
4. **Set up a Google Business Profile** — highest-ROI marketing hour available;
   it's where local searches and reviews live.
5. **Optional upgrades:** real facility/equipment photos (hero + testimonial
   sections are the priority slots), collected testimonials, og:image for link
   previews once a photo exists.

## Content sources

All copy is based on the existing site's claims (services, hours, taglines,
OSHA/NFPA dust testing, same-day parts shipping, 24-hour emergency line).
No testimonials were invented — the "FilterPro USA" reviews online (Florence, AL /
Birdeye/Glassdoor/BBB) belong to a different, unrelated company (filterpro.com).
