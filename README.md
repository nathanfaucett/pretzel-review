# Pretzels UI

## Tools

- [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- [pnpm](https://pnpm.io/installation)
- [tailwind css](https://tailwindcss.com/docs)
- [svelte kit](https://kit.svelte.dev/docs)
- [icons](https://lucide.dev/icons/)

## Svelte 5 Migration Notes

- Project now targets Svelte 5.55.0 and uses a compatible `@sveltejs/vite-plugin-svelte` prerelease.
- Actions taken:
	- Fixed Svelte-5 HTML issue (self-closing `<textarea />` converted to `<textarea></textarea>`).
	- Replaced SSR-unsafe `get()` usages in stores (`locale`, `online`, `timezone`, `auth`) with browser-aware accessors or `store.update` where appropriate.
	- Replaced `get(LL)` calls in components with `$LL` auto-subscriptions to avoid direct `get()` usage.
	- Added a Playwright smoke test and a simple config to validate preview server behavior.

Recommendations / next steps:
- Smoke-test FileUpload, PretzelEditor, Popup/Modal interactions in a browser and add focused vitest/playwright tests for them.
- Consider upgrading `svelte-seo` if you want to remove the node_modules unused-export warning.
- Run `pnpm install` and `pnpm build` locally and exercise the app (preview server: `pnpm preview`) to validate runtime behaviors.

