import { posts } from '$lib/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	await event.parent();
	return {
		posts: Object.values(posts).sort((a, b) => b.createdTs - a.createdTs)
	};
};
