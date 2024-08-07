import { browser, building } from '$app/environment';
import { MAX_INT, random } from '@aicacia/rand';
import { PUBLIC_URL } from '$env/static/public';

export function createInsecureID() {
	return (random() * MAX_INT) | 0;
}

export function toURLSafe(value: string): string {
	return value
		.trim()
		.toLowerCase()
		.replace(/[\s]+/gi, '-')
		.replace(/[^\w\d\-_]+/gi, '');
}

export function replaceExt(filename: string, ext: string) {
	return filename.replace(/\.[^/.]+$/, ext);
}

export function getOrigin() {
	if (browser) {
		return window.location.origin;
	}
	return PUBLIC_URL;
}

export function prettyToFixed(x: number, fractionDigits: number = 1) {
	if (fractionDigits < 1) {
		return Math.round(x).toString();
	}
	const xString = x.toFixed(fractionDigits);
	const xFloat = parseFloat(xString);
	if (xFloat % 1 === 0) {
		return xFloat.toString();
	} else {
		return xFloat.toLocaleString(navigator.languages, {
			maximumFractionDigits: fractionDigits
		});
	}
}

const BASE64_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

export function arrayBufferToBase64(arraybuffer: ArrayBuffer) {
	const bytes = new Uint8Array(arraybuffer);
	const len = bytes.byteLength;
	let base64 = '';
	for (let i = 0; i < len; i += 3) {
		base64 += BASE64_CHARS[bytes[i] >> 2];
		base64 += BASE64_CHARS[((bytes[i] & 3) << 4) | (bytes[i + 1] >> 4)];
		base64 += BASE64_CHARS[((bytes[i + 1] & 15) << 2) | (bytes[i + 2] >> 6)];
		base64 += BASE64_CHARS[bytes[i + 2] & 63];
	}
	if (len % 3 === 2) {
		base64 = base64.substring(0, base64.length - 1) + '=';
	} else if (len % 3 === 1) {
		base64 = base64.substring(0, base64.length - 2) + '==';
	}
	return base64;
}

export function utf8ToBase64(value: string) {
	return btoa(unescape(encodeURIComponent(value)));
}

export function base64ToUtf8(base64: string) {
	return decodeURIComponent(escape(atob(base64)));
}
