<svelte:options immutable />

<script lang="ts">
	import { onDestroy } from 'svelte';

	export let file: File;

	let dataUrl: string | undefined;
	$: {
		if (dataUrl) {
			URL.revokeObjectURL(dataUrl);
		}
		dataUrl = URL.createObjectURL(file);
	}

	onDestroy(() => {
		if (dataUrl) {
			URL.revokeObjectURL(dataUrl);
		}
	});
</script>

<img src={dataUrl} alt={file.name} />
