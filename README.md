# NALG Agribusiness Centre — Website

Three-page responsive site: `index.html` (Home), `about.html` (About), `contact.html` (Contact).

## Before you go live

1. **Web3Forms access key** — the Membership form (Home) and the Contact form (Contact page) both post to Web3Forms.
   - Get a free access key at https://web3forms.com (just enter the email that should receive submissions).
   - Open `index.html` and `contact.html`, find every line that says:
     `value="YOUR_WEB3FORMS_ACCESS_KEY"`
     and replace it with your real key.
2. **Domain** — the canonical/OG URLs are set to `https://nalgagribusiness.org/`. Update these in the `<head>` of each page (and in `sitemap.xml` / `robots.txt`) once you know your real domain.
3. **Map** — the Contact page embeds a Google Map search for "Nakigo, Iganga, Uganda". Swap the `src` in the `<iframe>` for an exact pinned location if you have GPS coordinates for the office.
4. **Newsletter box** (footer) is currently a front-end-only placeholder. Point it at Web3Forms (or Mailchimp/etc.) the same way as the other forms if you want it live.

## Structure

```
index.html      Home — hero, about snapshot, services, model, impact, gallery, membership form
about.html      About — story, mission/vision, services detail, model, impact, 2026-2028 plan, leadership
contact.html    Contact — info cards, map, contact form
css/style.css   All styling (colors, layout, responsive rules)
js/script.js    Mobile nav, scroll reveal, Web3Forms submit handling
robots.txt      Search engine crawl rules
sitemap.xml     Page list for search engines
```

## Notes

- All images are hotlinked from the Cloudinary URLs provided — no local image files needed.
- Fully responsive (mobile menu, stacked grids, scrollable gallery) with smooth scrolling enabled site-wide.
- Palette and layout style (deep forest green hero, cream sections, orange accents, blob-shaped image frames, wavy divider) follow the supplied design reference.
