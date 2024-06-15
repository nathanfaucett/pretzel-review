export async function blobToCanvas(ctx: CanvasRenderingContext2D, blob: Blob) {
	imageToCanvas(ctx, await blobToImage(blob));
}

export function imageToCanvas(ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
	ctx.canvas.width = image.width;
	ctx.canvas.height = image.height;
	ctx.drawImage(image, 0, 0, image.width, image.height);
}

export function imageToBlob(image: HTMLImageElement) {
	return imageUrlToBlob(image.src);
}

export async function imageUrlToBlob(imageUrl: string) {
	const res = await fetch(imageUrl);
	return await res.blob();
}

async function blobToImage(blob: Blob) {
	const [dataURL, revokeUrl] = blobToDatUrl(blob);
	return new Promise<HTMLImageElement>((resolve, reject) => {
		const image = new Image();
		image.onload = () => {
			revokeUrl();
			resolve(image);
		};
		image.onerror = reject;
		image.src = dataURL;
	}).catch((error) => {
		revokeUrl();
		throw error;
	});
}

export function blobToDatUrl(blob: Blob): [dataUrl: string, revokeUrl: () => void] {
	const dataURL = URL.createObjectURL(blob);
	const revokeUrl = () => URL.revokeObjectURL(dataURL);
	return [dataURL, revokeUrl];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function canvasToBlob(canvas: HTMLCanvasElement, type?: string, quality?: any) {
	return new Promise<Blob>((resolve, reject) => {
		canvas.toBlob(
			(blob) => {
				if (blob) {
					resolve(blob);
				} else {
					reject(new Error('Failed to convert canvas to blob'));
				}
			},
			type,
			quality
		);
	});
}

export function resizeSource(
	ctx: CanvasRenderingContext2D,
	source: CanvasImageSource,
	newWidth: number,
	newHeight: number
) {
	ctx.canvas.width = newWidth;
	ctx.canvas.height = newHeight;
	ctx.drawImage(source, 0, 0, newWidth, newHeight);
}

export function resizeSourceToBytes(
	ctx: CanvasRenderingContext2D,
	source: CanvasImageSource,
	width: number,
	height: number,
	sourceSizeBytes: number,
	destSizeBytes: number,
	maxSize: number = Infinity
) {
	const aspect = width / height;
	if (aspect > 1) {
		width = Math.min(width, maxSize);
		height = Math.floor(width / aspect);
	} else {
		height = Math.min(height, maxSize);
		width = Math.floor(height * aspect);
	}
	if (sourceSizeBytes < destSizeBytes) {
		resizeSource(ctx, source, width, height);
	} else {
		const scale = Math.sqrt(destSizeBytes / sourceSizeBytes);
		const newWidth = Math.floor(width * scale);
		const newHeight = Math.floor(height * scale);
		resizeSource(ctx, source, newWidth, newHeight);
	}
}
