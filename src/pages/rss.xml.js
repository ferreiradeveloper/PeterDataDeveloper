import rss from "@astrojs/rss";
import { getPosts, url } from "../lib/utils";

export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: "PeterDataDeveloper",
    description: "Bases de datos relacionales, SQL e ingeniería de datos con más de 30 años de experiencia.",
    site: new URL(url(), context.site).href,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: url(`blog/${post.id}/`),
    })),
  });
}
