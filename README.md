# Ludovico Cuoghi — portfolio

Source for [ludovicocuoghi.github.io](https://ludovicocuoghi.github.io/), built with [Astro](https://astro.build/) and published with GitHub Pages.

## Develop

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. Before publishing, run:

```sh
npm run check
npm run build
npm run preview
```

## Edit content

- `src/data/site.ts` holds career entries, featured projects, more projects, and profile links. Add a project there and the page will render it automatically.
- `src/pages/index.astro` holds the introduction, about text, page sections, and metadata.
- `src/styles/global.css` holds the layout and both theme palettes. The first `:root` block is light; `:root[data-theme=dark]` is dark.
- `public/` holds the favicon, social image, robots file, and sitemap.

The site intentionally omits private CV details, unverified business metrics, and the Pokémon project until a correct public link and description are available. Do not add a downloadable CV until a current public version is prepared.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` checks and builds the site, then deploys `dist/` to GitHub Pages. In repository **Settings → Pages**, select **GitHub Actions** as the build and deployment source. Git history contains the previous template version if a rollback is needed.
