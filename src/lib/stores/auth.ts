import { decrypt } from '$lib/crypto';
import type { Octokit } from '@octokit/rest';
import { localstorageWritable } from 'svelte-localstorage-writable';
import { derived, get } from 'svelte/store';

const ENCRYPTED_SECRET =
	'Oxa19z3fwTHCy0iVsXkCltPZe0ML22ZxJ5+CeqSY9fZimQBMz2esBJrm5Gs+Q8IkQHPJhegmQ/CPGd0oPey2gIEmiUa9lpdHkUkYAQk2P+bJmjvVuwIh4d1YXUpoqSDK1UXXaDD/b9BXsZN8sw==';
const IV = 'IgVRSSdmYkfVEvoP';

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
