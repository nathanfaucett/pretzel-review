<script lang="ts">
	import { base } from '$app/paths';
	import LL from '$lib/i18n/i18n-svelte';
	import type { PageData } from './posts/$types';
	import { getReview } from '$lib/posts';
	import { prettyToFixed } from '$lib/util';

	export let data: PageData;
</script>

<svelte:head>
	<title>{$LL.posts.title()}</title>
</svelte:head>

<div class="mx-auto mt-10 flex flex-grow flex-col px-10">
	<ul class="list-none">
		{#each data.posts as post, index (post.uri)}
			{@const review = getReview(post)}
			<a
				class="flex flex-row justify-between py-2"
				href={`${base}/posts/${post.createdTs}-${post.uri}`}
			>
				<div class="flex flex-row">
					<span
						class="badge"
						class:red={review < 5}
						class:yellow={review < 7}
						class:green={review < 10}>{prettyToFixed(review)}/10</span
					>
					<span class="px-4">{post.title}</span>
				</div>
				<span class="badge gray">{new Date(post.createdTs).toLocaleDateString()}</span>
			</a>
			{#if index < data.posts.length - 1}
				<hr />
			{/if}
		{/each}
	</ul>
</div>

<div class="flex flex-shrink flex-row justify-end">
	<a class="p-4" href={`${base}/new`}>{$LL.posts.new.title()}</a>
</div>
