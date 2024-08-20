import { base } from '$app/paths';
import { json } from '@sveltejs/kit';

export const prerender = true;

export async function GET() {
	return json({
		name: 'Pretzel Review',
		short_name: 'Pretzel Review',
		description: 'Pretzel Review',
		version: '1.0',
		manifest_version: 3,
		icons: [
			{
				src: `${base}/icon256x256-white.png`,
				sizes: '256x256',
				type: 'image/png'
			}
		],
		id: `${base}/?source=pwa`,
		start_url: `${base}/?source=pwa`,
		scope: `${base}/`,
		display: 'standalone',
		background_color: '#111827',
		theme_color: '#3B82F6'
	});
}
