<script lang="ts">
	import { base } from '$app/paths';
	import SvelteSeo from 'svelte-seo';
	import LL from '$lib/i18n/i18n-svelte';
	import type { PageData } from './$types';
	import { getReview } from '$lib/posts';
	import { prettyToFixed } from '$lib/util';

	export let data: PageData;
</script>

<SvelteSeo
	title={$LL.home.title()}
	description={$LL.home.description()}
	keywords={'pretzel,soft,bavarian,review,atlanta,atl,ga,georgia,nathan,maggie,margaret,faucett'}
/>

<div class="mx-auto mt-10 flex flex-grow flex-col px-10">
	<h1>{$LL.home.title()}</h1>
	<hr />
	<ul class="list-none">
		{#each data.posts as post, index (post.uri)}
			{@const review = getReview(post)}
			<li class="flex flex-col justify-between py-2 md:flex-row">
				<span
					class="badge me-2 max-md:hidden"
					class:red={review < 5}
					class:yellow={review < 7}
					class:green={review < 10}>{prettyToFixed(review)}/10</span
				>
				<a class="me-4 flex flex-grow" href={`${base}/posts/${post.createdTs}-${post.uri}`}
					>{post.title}</a
				>
				<div class="flex flex-row justify-between">
					<span
						class="badge me-2 md:hidden"
						class:red={review < 5}
						class:yellow={review < 7}
						class:green={review < 10}>{prettyToFixed(review)}/10</span
					>
					<span>{new Date(post.createdTs).toLocaleDateString()}</span>
				</div>
			</li>
			{#if index < data.posts.length - 1}
				<hr />
			{/if}
		{/each}
	</ul>
</div>

<div class="flex flex-shrink flex-row justify-end">
	<a class="p-4" href={`${base}/new`}>{$LL.posts.new.title()}</a>
</div>
