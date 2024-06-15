<svelte:options immutable />

<script lang="ts">
	import { base } from '$app/paths';
	import LL from '$lib/i18n/i18n-svelte';
</script>

<div class="flex h-full w-full flex-col">
	<div class="flex flex-grow flex-col overflow-y-auto overflow-x-hidden">
		<slot />
	</div>
</div>
