import type { LayoutLoad } from './$types';
import { getOctokitInstance } from '$lib/stores/auth';
import { redirect } from '@sveltejs/kit';
import { base } from '$app/paths';

export const load: LayoutLoad = async (event) => {
	await event.parent();
	try {
		const octokit = await getOctokitInstance();
		const auth = await octokit.auth();
		if (!auth) {
			await octokit.auth();
		}
	} catch (error) {
		console.log(error);
		redirect(302, `${base}/signin?redirect=${encodeURIComponent(event.url.pathname)}`);
	}
};
