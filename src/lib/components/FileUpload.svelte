<svelte:options immutable />

<script lang="ts" context="module">
	interface FileUpload {
		id: number;
		file: File;
		processing: boolean;
	}

	function createFileUpload(file: File) {
		return {
			id: createInsecureID(),
			file,
			processing: false
		};
	}

	function acceptToRegex(accept: string) {
		return new RegExp(accept.replaceAll('/', '\\/').replaceAll('*', '.*'));
	}
</script>

<script lang="ts">
	import { createInsecureID, replaceExt } from '$lib/util';
	import X from 'lucide-svelte/icons/x';
	import { createEventDispatcher, onMount } from 'svelte';
	import { createNotification } from '$lib/stores/notifications';
	import { blobToCanvas, canvasToBlob, resizeSourceToBytes } from '$lib/image';
	import Spinner from './Spinner.svelte';
	import FileViewer from './FileViewer.svelte';
	import LL from '$lib/i18n/i18n-svelte';
	import { get } from 'svelte/store';

	export let className: string | undefined = undefined;
	export let files: File[] = [];
	export let id: string | undefined = undefined;
	export let name = '';
	export let multiple = false;
	export let accept = 'image/*';
	export let maxFileSizeBytes = 1024 * 1024 * 5;
	export let maxSize = 1024;

	const dispatch = createEventDispatcher<{ input: [name: string, files: File[]] }>();

	let mounted = false;
	let fileUploads: FileUpload[] = [];
	let input: HTMLInputElement;

	onMount(() => {
		if (files.length) {
			fileUploads = files.map(createFileUpload);
		}
		mounted = true;
	});

	$: if (mounted) {
		let processing = false;
		files = fileUploads.map((fu) => {
			if (!processing && fu.processing) {
				processing = true;
			}
			return fu.file;
		});
		if (!processing) {
			dispatch('input', [name, files]);
		}
	}

	$: acceptRegex = acceptToRegex(accept);
	function isValidFile(file: File): boolean {
		if (!acceptRegex.test(file.type)) {
			return false;
		}
		return true;
	}
	async function processNewFileUploads(fileUploadsToProcess: FileUpload[]) {
		await Promise.all(
			fileUploadsToProcess.map(async (fileUpload) => {
				updateFileUpload(fileUpload.id, { processing: true });
				try {
					const canvas = document.createElement('canvas');
					const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
					await blobToCanvas(ctx, fileUpload.file);
					const resizedCanvas = document.createElement('canvas');
					const resizedCtx = resizedCanvas.getContext('2d') as CanvasRenderingContext2D;
					resizeSourceToBytes(
						resizedCtx,
						ctx.canvas,
						ctx.canvas.width,
						ctx.canvas.height,
						fileUpload.file.size,
						maxFileSizeBytes,
						maxSize
					);
					const blob = await canvasToBlob(resizedCanvas, 'image/webp');
					const file = new File([blob], replaceExt(fileUpload.file.name, '.webp'), {
						type: fileUpload.file.type
					});
					updateFileUpload(fileUpload.id, { file, processing: false });
				} catch (error) {
					console.error(error);
					createNotification(get(LL).errors.message.failedToProcessImageMessage());
					updateFileUpload(fileUpload.id, { processing: false });
				}
			})
		);
	}

	async function updateFileUpload(id: number, updates: Partial<FileUpload>) {
		const newFileUploads = fileUploads.slice();
		const index = newFileUploads.findIndex((fu) => fu.id === id);
		if (index !== -1) {
			newFileUploads[index] = Object.assign({}, newFileUploads[index], updates);
		}
		fileUploads = newFileUploads;
	}

	function onClick() {
		input.click();
	}

	let dragging = false;
	function onDragEnter() {
		dragging = true;
	}
	function onDragLeave() {
		dragging = false;
	}
	function onDragOver(e: DragEvent & { currentTarget: HTMLElement }) {
		e.preventDefault();
		dragging = true;
	}
	function onDrop(e: DragEvent & { currentTarget: HTMLElement }) {
		e.preventDefault();
		dragging = false;
		const newFileUploads = [];
		const invalidFiles = [];

		if (e.dataTransfer) {
			if (e.dataTransfer.items) {
				for (const item of Array.from(e.dataTransfer.items)) {
					if (item.kind === 'file') {
						const file = item.getAsFile();
						if (file) {
							if (isValidFile(file)) {
								newFileUploads.push(createFileUpload(file));
							} else {
								invalidFiles.push(file);
							}
						}
					}
				}
			} else {
				for (const file of Array.from(e.dataTransfer.files)) {
					if (isValidFile(file)) {
						newFileUploads.push(createFileUpload(file));
					} else {
						invalidFiles.push(file);
					}
				}
			}
		}
		if (invalidFiles.length) {
			createNotification(`Invalid File(s) ${invalidFiles.map((f) => f.name).join(', ')}`);
		}
		if (newFileUploads.length) {
			if (multiple) {
				fileUploads = fileUploads.concat(newFileUploads);
				processNewFileUploads(newFileUploads);
			} else {
				const fileUpload = newFileUploads[0];
				fileUploads = [fileUpload];
				processNewFileUploads(fileUploads);
			}
		}
	}

	function onFile(e: Event & { currentTarget: HTMLInputElement }) {
		const newFileUploads = [];
		const invalidFiles = [];

		if (e.currentTarget.files) {
			for (const file of Array.from(e.currentTarget.files)) {
				if (isValidFile(file)) {
					newFileUploads.push(createFileUpload(file));
				} else {
					invalidFiles.push(file);
				}
			}
		}
		e.currentTarget.value = '';

		if (invalidFiles.length) {
			createNotification(`Invalid File(s) ${invalidFiles.map((f) => f.name).join(', ')}`);
		}
		if (newFileUploads.length) {
			if (multiple) {
				fileUploads = fileUploads.concat(newFileUploads);
				processNewFileUploads(newFileUploads);
			} else {
				const fileUpload = newFileUploads[0];
				fileUploads = [fileUpload];
				processNewFileUploads(fileUploads);
			}
		}
	}

	function createOnRemove(fileUpload: FileUpload) {
		return (_: Event) => {
			const index = fileUploads.indexOf(fileUpload);
			if (index !== -1) {
				const newFileUploads = fileUploads.slice();
				newFileUploads.splice(index, 1);
				fileUploads = newFileUploads;
			}
		};
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="file-upload flex flex-grow cursor-pointer rounded bg-gray-100 p-3 text-gray-950 outline-none focus:outline-none dark:bg-gray-700 dark:text-gray-300 {className}"
	on:click={onClick}
	on:dragover={onDragOver}
	on:dragenter={onDragEnter}
	on:dragleave={onDragLeave}
	on:drop={onDrop}
>
	{#if files.length}
		<div class="flex flex-grow flex-row flex-wrap justify-center">
			{#each fileUploads as fileUpload (fileUpload.id)}
				<div class="relative mb-1 me-1 flex flex-shrink flex-col">
					<div class="overflow-hidden rounded">
						{#if fileUpload.processing}
							<div class="flex flex-row content-center justify-center p-4">
								<div class="h-6 w-6"><Spinner /></div>
							</div>
						{:else}
							<FileViewer file={fileUpload.file} />
						{/if}
					</div>
					<button
						class="btn danger icon absolute -right-2 -top-2 ms-2"
						on:click|stopPropagation={createOnRemove(fileUpload)}><X /></button
					>
				</div>
			{/each}
		</div>
	{:else}
		<div class="flex flex-grow flex-col">
			<p class="p-4 text-center">
				{$LL.upload.dropArea({ dragging })}
			</p>
		</div>
	{/if}
	<input {id} {name} bind:this={input} type="file" hidden {accept} {multiple} on:input={onFile} />
</div>

<style lang="postcss">
	.file-upload.invalid {
		@apply border-red-600 placeholder-red-600;
	}
	.file-upload.valid {
		@apply border-green-600 placeholder-green-600;
	}
	.file-upload.warning {
		@apply border-orange-600 placeholder-orange-600;
	}
	.file-upload.untested {
		@apply border-gray-600 placeholder-gray-600;
	}
</style>
