import { Buffer } from 'buffer';

export async function encrypt(plaintext: string, key: string) {
	const iv = crypto.getRandomValues(new Uint8Array(12));
	const encodedPlaintext = new TextEncoder().encode(plaintext);
	const secretKey = await crypto.subtle.importKey(
		'raw',
		Buffer.from(key, 'base64'),
		{
			name: 'AES-GCM',
			length: 256
		},
		true,
		['encrypt', 'decrypt']
	);

	const ciphertext = await crypto.subtle.encrypt(
		{
			name: 'AES-GCM',
			iv
		},
		secretKey,
		encodedPlaintext
	);

	return {
		ciphertext: Buffer.from(ciphertext).toString('base64'),
		iv: Buffer.from(iv).toString('base64')
	};
}

export async function decrypt(ciphertext: string, iv: string, key: string) {
	const secretKey = await crypto.subtle.importKey(
		'raw',
		Buffer.from(key, 'base64'),
		{
			name: 'AES-GCM',
			length: 256
		},
		true,
		['encrypt', 'decrypt']
	);

	const cleartext = await crypto.subtle.decrypt(
		{
			name: 'AES-GCM',
			iv: Buffer.from(iv, 'base64')
		},
		secretKey,
		Buffer.from(ciphertext, 'base64')
	);

	return new TextDecoder().decode(cleartext);
}
