import { posts } from '$lib/posts';
import type { PageLoad } from './$types';

export const prerender = true;
export const ssr = true;

export const load: PageLoad = async (event) => {
	await event.parent();
	return {
		posts: Object.values(posts).sort((a, b) => b.createdTs - a.createdTs)
	};
};
