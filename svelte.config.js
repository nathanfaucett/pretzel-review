import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false
		}),
		appDir: 'internal',
		paths: {
			base: process.env.USE_BASE_PATH ? '/pretzels' : ''
		}
	}
};

export default config;
