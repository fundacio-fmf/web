# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static institutional website for **FMF - Fundació Mineralògica Fabre** (`mineralogia.cat`). A single self-contained file with no build step, no dependencies, and no server-side code.

## Structure

```
index.html       — entire site: HTML, inline CSS (<style>), inline JS (<script>)
assets/          — banner images for the projects section
```

## Architecture

All logic lives in `index.html`:

- **Styles** — inline `<style>` block with CSS custom properties (`--basalt`, `--malachite`, `--pyrite`, etc.) defining the colour palette.
- **i18n** — a `const i18n = { en:{…}, es:{…}, ca:{…} }` object holds all user-facing strings. `setLang(lang)` applies them by setting `textContent` on every `[data-i18n]` element. Language auto-detected from `navigator.language` on load.
- **MVM project card** — the banner image and link URL change per language (English vs. es/ca variants) inside `setLang()`.

## Development

Open `index.html` directly in a browser — no server required. To serve locally with live reload:

```bash
npx serve .        # or: python3 -m http.server 8080
```

## Deployment

Push to `main` → DigitalOcean App Platform deploys automatically (static site hosting).

```bash
git push origin main
```

## Adding or editing content

- **Translated text** — edit the relevant key in all three language objects (`en`, `es`, `ca`) inside the `i18n` const.
- **New translatable element** — add `data-i18n="key"` to the HTML element and add the key to all three language objects.
- **New project card** — follow the existing `.project` `<a>` block pattern; add a banner image to `assets/` if needed.
- **Colour changes** — update CSS custom properties in `:root`.