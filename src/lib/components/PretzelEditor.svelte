<svelte:options immutable />

<script lang="ts" context="module">
	import { create, test, enforce, only } from 'vest';

	export type EditPostForm = {
		title: string;
		description: string;
		saltReview: number;
		shapeReview: number;
		textureReview: number;
		flavorReview: number;
		images: File[];
		address: string;
	};

	const createSuite = (LL: TranslationFunctions) =>
		create((data: Partial<EditPostForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('title', LL.errors.message.required(), () => {
				enforce(data.title).isNotBlank();
			});
			test('description', LL.errors.message.required(), () => {
				enforce(data.description).isNotBlank();
			});
			test('flavorReview', LL.errors.message.required(), () => {
				enforce(data.flavorReview).isNotBlank();
			});
			test('textureReview', LL.errors.message.required(), () => {
				enforce(data.textureReview).isNotBlank();
			});
			test('shapeReview', LL.errors.message.required(), () => {
				enforce(data.shapeReview).isNotBlank();
			});
			test('saltReview', LL.errors.message.required(), () => {
				enforce(data.saltReview).isNotBlank();
			});
			test('address', LL.errors.message.required(), () => {
				enforce(data.address).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import classNames from 'vest/classnames';
	import Spinner from '$lib/components/Spinner.svelte';
	import { debounce } from '@aicacia/debounce';
	import FileUpload from './FileUpload.svelte';
	import InputResults from '$lib/components/InputResults.svelte';
	import type { TranslationFunctions } from '$lib/i18n/i18n-types';
	import { createNotification } from '$lib/stores/notifications';

	export let title = '';
	export let description = '';
	export let saltReview = 5;
	export let shapeReview = 5;
	export let textureReview = 5;
	export let flavorReview = 5;
	export let images: File[] = [];
	export let address = '';
	export let onEdit: (form: EditPostForm) => Promise<void>;

	$: suite = createSuite($LL);
	$: result = suite.get();
	$: disabled = loading;
	$: cn = classNames(result, {
		untested: 'untested',
		tested: 'tested',
		invalid: 'invalid',
		valid: 'valid',
		warning: 'warning'
	});

	const fields = new Set<string>();
	const validate = debounce(() => {
		suite(
			{
				title,
				saltReview,
				shapeReview,
				textureReview,
				flavorReview,
				description,
				address,
				images
			},
			Array.from(fields)
		).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('title');
		fields.add('uri');
		fields.add('description');
		fields.add('saltReview');
		fields.add('shapeReview');
		fields.add('textureReview');
		fields.add('flavorReview');
		fields.add('images');
		fields.add('address');
		validate();
		validate.flush();
	}
	function onChange(
		e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement }
	) {
		e.currentTarget.value = e.currentTarget.value;
		fields.add(e.currentTarget.name);
		validate();
	}
	function onChangeImage({ detail: [name, files] }: CustomEvent<[name: string, value: File[]]>) {
		images = files;
		fields.add(name);
		validate();
	}

	let loading = false;
	async function onSubmit(e: SubmitEvent) {
		try {
			loading = true;
			validateAll();
			if (result.isValid()) {
				await onEdit({
					title,
					saltReview,
					shapeReview,
					textureReview,
					flavorReview,
					description,
					address,
					images
				});
			}
		} catch (error) {
			createNotification($LL.errors.message.application());
			console.log(error);
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>{$LL.posts.edit.title()}: {title}</title>
</svelte:head>

<form on:submit|preventDefault={onSubmit}>
	<div class="mb-2">
		<label for="title">{$LL.posts.titleLabel()}</label>
		<input
			class="w-full {cn('title')}"
			type="text"
			name="title"
			placeholder={$LL.posts.titlePlaceholder()}
			bind:value={title}
			on:input={onChange}
		/>
		<InputResults name="title" {result} />
	</div>
	<div class="mb-2 grid grid-cols-2 md:grid-cols-4">
		<div class="mb-2">
			<label for="flavorReview">{$LL.posts.flavorReviewLabel()}</label>
			<input
				class="w-full {cn('flavorReview')}"
				type="number"
				step="0.1"
				min="0"
				max="10"
				name="flavorReview"
				bind:value={flavorReview}
				on:input={onChange}
			/>
			<InputResults name="flavorReview" {result} />
		</div>
		<div class="mb-2">
			<label for="textureReview">{$LL.posts.textureReviewLabel()}</label>
			<input
				class="w-full {cn('textureReview')}"
				type="number"
				step="0.1"
				min="0"
				max="10"
				name="textureReview"
				bind:value={textureReview}
				on:input={onChange}
			/>
			<InputResults name="textureReview" {result} />
		</div>
		<div class="mb-2">
			<label for="shapeReview">{$LL.posts.shapeReviewLabel()}</label>
			<input
				class="w-full {cn('shapeReview')}"
				type="number"
				step="0.1"
				min="0"
				max="10"
				name="shapeReview"
				bind:value={shapeReview}
				on:input={onChange}
			/>
			<InputResults name="shapeReview" {result} />
		</div>
		<div class="mb-2">
			<label for="saltReview">{$LL.posts.saltReviewLabel()}</label>
			<input
				class="w-full {cn('saltReview')}"
				type="number"
				step="0.1"
				min="0"
				max="10"
				name="saltReview"
				bind:value={saltReview}
				on:input={onChange}
			/>
			<InputResults name="saltReview" {result} />
		</div>
	</div>
	<div class="mb-2">
		<label for="address">{$LL.posts.addressLabel()}</label>
		<input
			class="w-full {cn('address')}"
			type="text"
			name="address"
			placeholder={$LL.posts.addressPlaceholder()}
			bind:value={address}
			on:input={onChange}
		/>
		<InputResults name="address" {result} />
	</div>
	<div class="mb-2">
		<label for="description">{$LL.posts.descriptionLabel()}</label>
		<textarea
			class="w-full {cn('description')}"
			name="description"
			placeholder={$LL.posts.descriptionPlaceholder()}
			bind:value={description}
			on:input={onChange}
		/>
		<InputResults name="description" {result} />
	</div>
	<div class="mb-2">
		<label for="images">{$LL.posts.imagesLabel()}</label>
		<FileUpload
			className="w-full {cn('images')}"
			name="images"
			files={images}
			on:input={onChangeImage}
		/>
		<InputResults name="images" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{$LL.posts.edit.save()}
		</button>
	</div>
</form>
