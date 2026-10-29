# PeterDataDeveloper

Blog personal de Peter — ingeniero de sistemas con más de 30 años de experiencia,
especialista en bases de datos relacionales e ingeniería de datos.

Hecho con [Astro](https://astro.build): los artículos se escriben en Markdown y
se publican automáticamente en GitHub Pages.

## Requisitos

Node.js 22.23 o superior.

## Comandos

```bash
npm install          # solo la primera vez
npm run dev          # servidor local en http://localhost:4321 (se recarga al guardar)
npm run build        # genera el sitio estático en dist/
npm run nuevo -- "Título del artículo"   # crea un borrador nuevo
```

## Escribir un artículo

1. `npm run nuevo -- "Cómo leer un plan de ejecución"`
2. Edita el archivo creado en `src/content/blog/`. La cabecera tiene este formato:

   ```yaml
   ---
   title: "Cómo leer un plan de ejecución"
   description: "Resumen que aparece en la tarjeta."
   date: 2026-10-29
   tags: ["sql", "rendimiento"]
   draft: true        # mientras sea true no se publica
   ---
   ```

3. Escribe en Markdown: títulos `##`, listas, tablas, citas `>` y bloques de código ```` ```sql ````.
4. Cambia `draft: false`, haz commit y push: GitHub Pages lo publica solo.

## Estructura

```
src/content/blog/    Artículos en Markdown
src/pages/           Portada, Sobre mí, listado del blog, RSS
src/layouts/         Plantilla común (cabecera, pie, tema claro/oscuro)
src/components/      Tarjeta de artículo
src/styles/          Estilos
public/              Archivos estáticos (favicon, imágenes)
.github/workflows/   Publicación automática en GitHub Pages
```

## Publicar en GitHub Pages (una sola vez)

1. Crea un repositorio en GitHub (por ejemplo `PeterDataDeveloper`) y sube el proyecto a la rama `main`.
2. En el repositorio: **Settings → Pages → Source: GitHub Actions**.
3. Cada push a `main` publica el blog en `https://<usuario>.github.io/PeterDataDeveloper/`.
   Si el repositorio se llama `<usuario>.github.io`, se publica en la raíz `https://<usuario>.github.io/`.
