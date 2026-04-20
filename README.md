# RISD Sustainability Atlas

Static single-page host for The Nature Lab's ArcGIS StoryMap, rendered
full-bleed with RISD brand fonts.

Story source: <https://storymaps.arcgis.com/stories/92f8a6e40cf949e3963a6d289d803337>

## Stack

- Plain HTML + SASS
- [Vite 8](https://vite.dev) for dev server, SCSS compilation, and static build
- Esri StoryMaps [advanced embedding (beta)](https://doc.arcgis.com/en/arcgis-storymaps/author-and-share/advanced-embedding.htm)
  to inject RISD fonts into the storymap via `window.storyMapsEmbedConfig`
- Adapted from [Esri/storymaps-developer-samples — embed/fonts](https://github.com/Esri/storymaps-developer-samples/tree/main/embed/fonts) (Apache 2.0)

## Prerequisites

Node **≥ 20.19** or **≥ 22.12** (Vite 8 requirement).

## Develop

```sh
npm install
npm run dev
```

Open the URL Vite prints (typically <http://localhost:5173>).

## Build

```sh
npm run build     # outputs dist/
npm run preview   # serves dist/ locally to verify the production bundle
```

Deploy the contents of `dist/` to any static host.

## Font role choice

RISD's base theme uses **RISD Serif Complete** for headings, but that family
only ships light weights (100–400) in the upstream. The Esri embed API
requires both a `normal` and a `bold` per role, so this site uses
**RISD Serif SemiComplete** (full Light→Bold range, variable file) for the
`title` role and **RISD Sans** for the `body` role. Swap in
`src/embed-config.js` + `src/scss/_fonts.scss` if RISD brand prefers a
different pairing.

## Known caveats

- **Advanced embed API is beta.** Esri's `/embed/view` endpoint is labeled
  beta and is not version-pinned. If the embed breaks in the future, start
  with Esri's [sample repo](https://github.com/Esri/storymaps-developer-samples)
  to see what changed.
- **Font licensing.** The `.woff2` files in `public/fonts/` were copied from
  the RISD Drupal theme, which ships no explicit redistribution license.
  Confirm with RISD brand / IT that hosting these files under
  `sustainabilityatlas.risd.edu` is permitted before going public.
- **Story visibility.** The embedded storymap (item id
  `92f8a6e40cf949e3963a6d289d803337`) must be shared publicly in ArcGIS for
  anonymous visitors to render it.
