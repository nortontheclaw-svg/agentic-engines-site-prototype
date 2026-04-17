# Agentic Engines Static Prototype

This is a single-page static marketing site prototype built from `brief.md` and refined with `brief-pass-two.md`.

## Files

- `index.html` - page structure and content
- `styles.css` - responsive layout, paper-and-blueprint visual system, and tactile states
- `script.js` - Workflow Pack selector content updates

## Run locally

No build step is required.

Use any static file server from the project root. The lightest option is:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Adaptation notes

The prototype remains static-friendly on purpose:

- content is plain semantic HTML
- interaction is limited to a small progressive-enhancement selector in `script.js`
- styling is centralized in `styles.css`

That keeps it straightforward to split later into Shopify sections, snippets, and theme styles without untangling a framework build step first.

## Deploy

Because the site is plain HTML, CSS, and JS, it can be hosted directly on static platforms such as GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, or any basic web server.
