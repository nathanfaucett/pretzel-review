<svelte:options immutable />

<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import type { PageData } from './$types';
	import PretzelEditor, { type EditPostForm } from '$lib/components/PretzelEditor.svelte';
	import { updatePost } from '$lib/repo';
	import { toURLSafe } from '$lib/util';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { imageUrlToBlob } from '$lib/image';
	import { onMount } from 'svelte';

	export let data: PageData;

	let files: File[] = [];
	let mounted = false;

	onMount(async () => {
		try {
			files = await Promise.all(
				data.post.images.map(
					async (imageUrl) => new File([await imageUrlToBlob(imageUrl)], imageUrl)
				)
			);
		} finally {
			mounted = true;
		}
	});

	async function onEditPost(form: EditPostForm) {
		await updatePost(data.post, {
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
	<title>{$LL.posts.edit.title()}: {data.post.title}</title>
</svelte:head>

<div class="flex flex-grow flex-col justify-end md:justify-start">
	<div class="mx-auto flex w-full flex-shrink flex-col p-4 py-10">
		<div class="flex flex-grow flex-col bg-white p-4 shadow dark:bg-gray-800">
			<h1 class="mb-1">{$LL.posts.edit.title()}</h1>
			{#if mounted}
				<PretzelEditor
					title={data.post.title}
					description={data.post.description}
					flavorReview={data.post.review.flavor}
					textureReview={data.post.review.texture}
					shapeReview={data.post.review.shape}
					saltReview={data.post.review.salt}
					images={files}
					address={data.post.address}
					onEdit={onEditPost}
				/>
			{/if}
		</div>
	</div>
</div>
