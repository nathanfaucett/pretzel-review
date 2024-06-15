<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';
	import LL from '$lib/i18n/i18n-svelte';
	import { base } from '$app/paths';
	import { prettyToFixed } from '$lib/util';
	import { getReview } from '$lib/posts';

	export let data: PageData;
</script>

<SvelteSeo title={data.post.title} description={data.post.description} />

<div class="container mx-auto mb-20 mt-10 flex flex-grow flex-col px-10">
	<post class="mx-auto max-w-2xl">
		<a href={`${base}/`}>{$LL.posts.back()}</a>
		<h2 class="mt-2 flex-grow break-words">{data.post.title}</h2>
		<hr />
		<div class="mb-2 flex flex-row items-end justify-between">
			<h4>{prettyToFixed(getReview(data.post))}/10</h4>
			<p>{new Date(data.post.createdTs).toLocaleDateString()}</p>
		</div>
		<p class="mb-2">{data.post.description}</p>
		<div class="mb-2 grid grid-cols-2 md:grid-cols-4">
			<p>{$LL.posts.flavor()}: {prettyToFixed(data.post.review.flavor)}/10</p>
			<p>{$LL.posts.texture()}: {prettyToFixed(data.post.review.texture)}/10</p>
			<p>{$LL.posts.shape()}: {prettyToFixed(data.post.review.shape)}/10</p>
			<p>{$LL.posts.salt()}: {prettyToFixed(data.post.review.salt)}/10</p>
		</div>
		<div class="mb-2">
			<p>{$LL.posts.address()}: {data.post.address}</p>
		</div>
		<div class="text-center">
			{#each data.post.images as image}
				<img src={image} alt={image} />
			{/each}
		</div>
	</post>
</div>

<div class="flex flex-shrink flex-row justify-end">
	<a class="p-4" href={`${base}/edit/${data.post.createdTs}-${data.post.uri}`}
		>{$LL.posts.edit.title()}</a
	>
</div>
