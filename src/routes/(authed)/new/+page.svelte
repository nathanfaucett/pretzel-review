<svelte:options immutable />

<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import { createPost } from '$lib/repo';
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import type { EditPostForm } from '$lib/components/PretzelEditor.svelte';
	import PretzelEditor from '$lib/components/PretzelEditor.svelte';
	import { toURLSafe } from '$lib/util';

	async function onCreate(form: EditPostForm) {
		await createPost({
			title: form.title,
			uri: toURLSafe(form.title),
			review: {
				flavor: form.flavorReview,
				texture: form.textureReview,
				shape: form.shapeReview,
				salt: form.saltReview
			},
			description: form.description,
			address: form.address,
			images: form.images
		});
		await goto(`${base}/`);
	}
</script>

<svelte:head>
	<title>{$LL.posts.new.title()}</title>
</svelte:head>

<div class="flex flex-grow flex-col justify-end md:justify-start">
	<div class="mx-auto flex w-full flex-shrink flex-col p-4 py-10">
		<div class="flex flex-grow flex-col bg-white p-4 shadow dark:bg-gray-800">
			<h1 class="mb-1">{$LL.posts.new.title()}</h1>
			<PretzelEditor onEdit={onCreate} />
		</div>
	</div>
</div>
