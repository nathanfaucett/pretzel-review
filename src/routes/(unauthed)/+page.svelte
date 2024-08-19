<script lang="ts" context="module">
	import { get, writable } from 'svelte/store';
	import { localstorageWritable } from 'svelte-localstorage-writable';

	let search = writable('');

	type SortBy = 'date' | 'review';
	type SortOrder = 'asc' | 'desc';

	let sortBy = localstorageWritable<SortBy>('sort-by', 'date');
	let sortOrder = localstorageWritable<SortOrder>('sort-order', 'desc');

	function getPostSortValue(post: Post, sortBy: SortBy) {
		if (sortBy === 'date') {
			return post.createdTs;
		} else {
			return getReview(post);
		}
	}

	function onSortOrderSwitch() {
		sortOrder.set(get(sortOrder) === 'desc' ? 'asc' : 'desc');
	}

	const siteKeywords =
		'pretzel,soft,bavarian,review,atlanta,atl,ga,georgia,nathan,maggie,margaret,faucett';
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import SvelteSeo from 'svelte-seo';
	import LL from '$lib/i18n/i18n-svelte';
	import type { PageData } from './$types';
	import { getReview, type Post } from '$lib/posts';
	import { keywords, prettyToFixed } from '$lib/util';
	import ArrowUp from 'lucide-svelte/icons/arrow-up';
	import ArrowDown from 'lucide-svelte/icons/arrow-down';

	export let data: PageData;

	let posts = data.posts;

	$: {
		const s = $search.trim().toLowerCase();
		if (s) {
			posts = data.posts.filter((post) =>
				`${post.title} ${post.address}`.toLowerCase().includes(s)
			);
		} else {
			posts = data.posts;
		}
	}
	$: {
		const sb = $sortBy;
		const so = $sortOrder;
		posts = posts.sort((a, b) => {
			let left: number;
			let right: number;
			if (so === 'asc') {
				left = getPostSortValue(a, sb);
				right = getPostSortValue(b, sb);
			} else {
				left = getPostSortValue(b, sb);
				right = getPostSortValue(a, sb);
			}
			return left - right;
		});
	}
</script>

<SvelteSeo
	title={$LL.home.title()}
	description={$LL.home.description()}
	keywords={keywords(
		siteKeywords,
		...data.posts.map((post) => `${post.title} ${post.description}`)
	)}
/>

<div class="container mx-auto mt-10 flex flex-grow flex-col px-10">
	<h2>{$LL.home.title()}</h2>
	<div class="flex flex-col justify-between sm:flex-row">
		<div class="flex flex-row max-sm:flex-grow">
			<input
				type="text"
				class="w-full"
				placeholder={$LL.home.searchPlaceholder()}
				bind:value={$search}
			/>
		</div>
		<div class="flex flex-row justify-end">
			<select bind:value={$sortBy}>
				<option value="date">{$LL.home.sortBy.date()}</option>
				<option value="review">{$LL.home.sortBy.review()}</option>
			</select>
			<button class="btn icon primary w-fit" on:click={onSortOrderSwitch}>
				{#if $sortOrder === 'desc'}
					<ArrowUp />
				{:else}
					<ArrowDown />
				{/if}
			</button>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each posts as post (post.uri)}
			{@const review = getReview(post)}
			<a class="flex flex-col" href={`${base}/posts/${post.createdTs}-${post.uri}`}>
				<h6 class="overflow-hidden text-ellipsis text-nowrap md:flex-row">
					{post.title}
				</h6>
				<div class="flex flex-row items-center justify-center">
					{#if post.images.length}
						<div
							class="h-64 w-full bg-cover bg-center bg-no-repeat"
							style="background-image:url({post.images[0]})"
						></div>
					{/if}
				</div>
				<div class="flex flex-col justify-between md:flex-row">
					<span
						class="badge me-2 max-md:hidden"
						class:red={review < 5}
						class:yellow={review < 7}
						class:green={review < 10}>{prettyToFixed(review)}/10</span
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
				</div>
			</a>
		{/each}
	</div>
</div>

<div class="flex flex-shrink flex-row justify-end">
	<a class="p-4" href={`${base}/new`}>{$LL.posts.new.title()}</a>
</div>
