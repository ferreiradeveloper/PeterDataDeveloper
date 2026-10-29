// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// En GitHub Actions, SITE y BASE se calculan solos a partir del repositorio
// (ver .github/workflows/deploy.yml). En local el blog se sirve en "/".
export default defineConfig({
  site: process.env.SITE ?? "http://localhost:4321",
  base: process.env.BASE ?? "/",
  integrations: [sitemap()],
  markdown: {
    shikiConfig: { theme: "github-dark" },
  },
});
