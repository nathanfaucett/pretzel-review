<script lang="ts">
	import SvelteSeo from 'svelte-seo';
	import type { PageData } from './$types';
	import LL from '$lib/i18n/i18n-svelte';
	import { base } from '$app/paths';
	import { prettyToFixed } from '$lib/util';
	import { getReview } from '$lib/posts';

	export let data: PageData;

	$: review = getReview(data.post);
</script>

<SvelteSeo
	title={data.post.title}
	description={data.post.description}
	openGraph={{
		title: data.post.title,
		description: data.post.description,
		images: data.post.images.map((image) => ({
			url: image
		}))
	}}
/>

<div class="container mx-auto mb-20 mt-10 flex flex-grow flex-col px-10">
	<post class="mx-auto max-w-2xl">
		<a href={`${base}/`}>{$LL.posts.back()}</a>
		<h2 class="mt-2 flex-grow break-words">{data.post.title}</h2>
		<hr />
		<div class="mb-2 flex flex-row items-end justify-between">
			<p class="badge" class:red={review < 5} class:yellow={review < 7} class:green={review < 10}>
				{prettyToFixed(review)}/10
			</p>
			<p class="badge gray">{new Date(data.post.createdTs).toLocaleDateString()}</p>
		</div>
		<p class="mb-2">{data.post.description}</p>
		<div class="mb-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
			<p
				class="badge"
				class:red={data.post.review.flavor < 5}
				class:yellow={data.post.review.flavor < 7}
				class:green={data.post.review.flavor < 10}
			>
				{$LL.posts.flavor()}: {prettyToFixed(data.post.review.flavor)}/10
			</p>
			<p
				class="badge"
				class:red={data.post.review.texture < 5}
				class:yellow={data.post.review.texture < 7}
				class:green={data.post.review.texture < 10}
			>
				{$LL.posts.texture()}: {prettyToFixed(data.post.review.texture)}/10
			</p>
			<p
				class="badge"
				class:red={data.post.review.shape < 5}
				class:yellow={data.post.review.shape < 7}
				class:green={data.post.review.shape < 10}
			>
				{$LL.posts.shape()}: {prettyToFixed(data.post.review.shape)}/10
			</p>
			<p
				class="badge"
				class:red={data.post.review.salt < 5}
				class:yellow={data.post.review.salt < 7}
				class:green={data.post.review.salt < 10}
			>
				{$LL.posts.salt()}: {prettyToFixed(data.post.review.salt)}/10
			</p>
			<p
				class="badge"
				class:red={data.post.review.sides < 5}
				class:yellow={data.post.review.sides < 7}
				class:green={data.post.review.sides < 10}
			>
				{$LL.posts.sides()}: {prettyToFixed(data.post.review.sides)}/10
			</p>
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
