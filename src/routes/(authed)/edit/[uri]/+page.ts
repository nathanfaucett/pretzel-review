import { posts } from '$lib/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	await event.parent();
	const post = posts[event.params.uri];
	return {
		post
	};
};
