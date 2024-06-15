<svelte:options immutable />

<script lang="ts" context="module">
	import { create, test, enforce, only } from 'vest';

	type SignInForm = {
		password: string;
	};

	const createSuite = (LL: TranslationFunctions) =>
		create((data: Partial<SignInForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('password', LL.errors.message.required(), () => {
				enforce(data.password).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import LL from '$lib/i18n/i18n-svelte';
	import classNames from 'vest/classnames';
	import Spinner from '$lib/components/Spinner.svelte';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import type { TranslationFunctions } from '$lib/i18n/i18n-types';
	import { decryptSecret } from '$lib/stores/auth';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { createNotification } from '$lib/stores/notifications';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let redirect = `${base}/new`;
	onMount(() => {
		const redirectParam = $page.url.searchParams.get('redirect');
		if (redirectParam) {
			redirect = decodeURIComponent(redirectParam);
		}
	});

	let password = '';

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
		suite({ password }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('password');
		validate();
		validate.flush();
	}
	function onChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		e.currentTarget.value = e.currentTarget.value.trim();
		fields.add(e.currentTarget.name);
		validate();
	}

	let loading = false;
	async function onSubmit(e: SubmitEvent) {
		try {
			loading = true;
			validateAll();
			if (result.isValid()) {
				await decryptSecret(password);
				await goto(redirect);
			}
		} catch (error) {
			createNotification($LL.errors.message.invalid());
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>{$LL.signIn.title()}</title>
</svelte:head>

<div class="flex flex-grow flex-col justify-end md:justify-start">
	<div class="mx-auto flex w-full flex-shrink flex-col p-4 py-10 md:w-72">
		<div class="flex flex-grow flex-col bg-white p-4 shadow dark:bg-gray-800">
			<h1 class="mb-1">{$LL.signIn.title()}</h1>
			<form on:submit|preventDefault={onSubmit}>
				<div class="mb-2">
					<input
						class="w-full {cn('password')}"
						type="password"
						name="password"
						autocomplete="current-password"
						placeholder={$LL.signIn.passwordPlaceholder()}
						bind:value={password}
						on:input={onChange}
					/>
					<InputResults name="password" {result} />
				</div>
				<div class="flex flex-row justify-end">
					<button type="submit" class="btn primary flex flex-shrink" {disabled}>
						{#if loading}<div class="mr-2 flex flex-row justify-center">
								<div class="inline-block h-6 w-6"><Spinner /></div>
							</div>{/if}
						{$LL.signIn.signIn()}
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
