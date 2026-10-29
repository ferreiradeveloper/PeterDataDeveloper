import { getCollection, type CollectionEntry } from "astro:content";

/** Antepone la ruta base del sitio (necesario en GitHub Pages). */
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

/** Artículos publicados (sin borradores), del más reciente al más antiguo. */
export async function getPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("es-ES", { day: "numeric", month: "short", year: "numeric" });
}

/** Minutos de lectura estimados (~200 palabras por minuto). */
export function readingTime(text = ""): number {
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}
