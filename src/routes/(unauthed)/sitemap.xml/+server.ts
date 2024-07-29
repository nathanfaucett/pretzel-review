import { getOrigin } from '$lib/util';
import { posts } from '$lib/posts';

export const prerender = true;

const xmlHeader = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>`;
const xmlFooter = `</urlset>`;

export async function GET() {
	const postsSorted = Object.values(posts).sort((a, b) => b.createdTs - a.createdTs);
	const origin = getOrigin();
	const now = new Date();

	const staticPages = Object.keys(import.meta.glob('/src/routes/**/+page.svelte'))
		.filter((page) => {
			return !/\[[\w\d\-]+\]/.test(page);
		})
		.map((page) =>
			page
				.replace(/\/\([\w\d\-]+\)/g, '')
				.replace(/\/\+.*/, '')
				.replace('/src/routes', origin)
		);

	const urls = postsSorted.map(
		(post) => `   <url>
      <loc>${origin}/posts/${post.createdTs}-${post.uri}</loc>
      <lastmod>${new Date(post.updatedTs).toISOString()}</lastmod>
    </url>`
	);
	const staticUrls = staticPages.map(
		(page) =>
			`   <url>
      <loc>${page}</loc>
      <lastmod>${now.toISOString()}</lastmod>
    </url>`
	);

	return new Response(`${xmlHeader}\n${urls.join('\n')}${staticUrls.join('\n')}\n${xmlFooter}`, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
