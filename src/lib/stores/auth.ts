import { decrypt } from '$lib/crypto';
import type { Octokit } from '@octokit/rest';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { derived, get } from 'svelte/store';

const ENCRYPTED_SECRET =
	'QaFCQFX4HVgelTL2RagBudDdeuOdHCA0rPTh069SZZ9tLgq9zHzrGwtgS+sEQWg4sLqU7RCvqPwB3NsUYNVuROpZ2UCQqBr9eYea87SnQBM6MHzoaqeCL5NU38I8dkWknyPvsX9oaaa59GXRSg==';
const IV = 'D0N4VlJc3FDT8CM5';

const secretWritable = localstorageWritable<string | null>('secret', null);
export const secret = derived(secretWritable, (state) => state);

let octokit: Promise<typeof import('@octokit/rest')>;

function getOctokit() {
	if (!octokit) {
		octokit = import('@octokit/rest');
	}
	return octokit;
}

let octokitInstance: Promise<Octokit>;

export function getOctokitInstance() {
	const authSecret = get(secret);
	if (!authSecret) {
		return Promise.reject('Invalid secret');
	}
	if (!octokitInstance) {
		octokitInstance = getOctokit().then(
			({ Octokit }) =>
				new Octokit({
					auth: authSecret
				})
		);
	}
	return octokitInstance;
}

export async function decryptSecret(key: string) {
	secretWritable.set(await decrypt(ENCRYPTED_SECRET, IV, key));
}
