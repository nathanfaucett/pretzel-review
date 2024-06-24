import type { Post } from './posts';
import { getOctokitInstance } from './stores/auth';
import { arrayBufferToBase64, base64ToUtf8, utf8ToBase64 } from './util';

export type CreatePost = {
	uri: string;
	title: string;
	description: string;
	review: {
		flavor: number;
		texture: number;
		shape: number;
		salt: number;
	};
	address: string;
	images: File[];
};

export async function createPost(create: CreatePost) {
	const now = new Date();
	const octokit = await getOctokitInstance();

	const post: Post = {
		...create,
		images: await Promise.all(
			create.images.map(async (file, index) => {
				const name = `${now.valueOf()}-${create.uri}-${index}.webp`;
				await octokit.repos.createOrUpdateFileContents({
					owner: 'nathanfaucett',
					repo: 'pretzels',
					path: `src/lib/assets/${name}`,
					message: `add image ${name}`,
					content: arrayBufferToBase64(await file.arrayBuffer())
				});
				return name;
			})
		),
		updatedTs: now.valueOf(),
		createdTs: now.valueOf()
	};

	await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
		owner: 'nathanfaucett',
		repo: 'pretzels',
		path: `src/lib/posts/${post.createdTs}-${post.uri}.ts`,
		message: `add post ${post.title}`,
		content: utf8ToBase64(createPostFile(post))
	});

	const postsIndexTs = await octokit.repos.getContent({
		owner: 'nathanfaucett',
		repo: 'pretzels',
		path: 'src/lib/posts/index.ts'
	});
	await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
		...postsIndexTs.data,
		owner: 'nathanfaucett',
		repo: 'pretzels',
		path: 'src/lib/posts/index.ts',
		message: 'update src/lib/posts/index.ts',
		content: utf8ToBase64(
			addPostToPostsIndex(base64ToUtf8((postsIndexTs.data as any).content), post)
		)
	});
}

export type UpdatePost = {
	uri: string;
	title: string;
	description: string;
	review: {
		flavor: number;
		texture: number;
		shape: number;
		salt: number;
	};
	address: string;
	images: File[];
};

export async function updatePost(originalPost: Post, update: UpdatePost) {
	const now = new Date();
	const octokit = await getOctokitInstance();

	await Promise.all(
		originalPost.images.map(async (_, index) => {
			const name = `${originalPost.createdTs}-${originalPost.uri}-${index}.webp`;
			const currentFile = await octokit.repos.getContent({
				owner: 'nathanfaucett',
				repo: 'pretzels',
				path: `src/lib/assets/${name}`
			});
			await octokit.repos.deleteFile({
				...currentFile.data,
				owner: 'nathanfaucett',
				repo: 'pretzels',
				message: `delete image ${name}`,
				path: `src/lib/assets/${name}`
			} as any);
		})
	);

	const post: Post = {
		...originalPost,
		...update,
		images: await Promise.all(
			update.images.map(async (file, index) => {
				const name = `${originalPost.createdTs}-${update.uri}-${index}.webp`;
				await octokit.repos.createOrUpdateFileContents({
					owner: 'nathanfaucett',
					repo: 'pretzels',
					path: `src/lib/assets/${name}`,
					message: `add image ${name}`,
					content: arrayBufferToBase64(await file.arrayBuffer())
				});
				return name;
			})
		),
		updatedTs: now.valueOf()
	};

	if (originalPost.uri !== post.uri) {
		const postTs = await octokit.repos.getContent({
			owner: 'nathanfaucett',
			repo: 'pretzels',
			path: `src/lib/posts/${originalPost.createdTs}-${originalPost.uri}.ts`
		});
		await octokit.repos.deleteFile({
			...postTs.data,
			owner: 'nathanfaucett',
			repo: 'pretzels',
			message: `delete post ${originalPost.title}`,
			path: `src/lib/posts/${originalPost.createdTs}-${originalPost.uri}.ts`
		} as any);
	}
	let postTs = { data: {} };
	try {
		postTs = await octokit.repos.getContent({
			owner: 'nathanfaucett',
			repo: 'pretzels',
			path: `src/lib/posts/${post.createdTs}-${post.uri}.ts`
		});
	} catch (e) {}
	await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
		...postTs.data,
		owner: 'nathanfaucett',
		repo: 'pretzels',
		path: `src/lib/posts/${post.createdTs}-${post.uri}.ts`,
		message: `edit post ${post.title}`,
		content: utf8ToBase64(createPostFile(post))
	});

	const postsIndexTs = await octokit.repos.getContent({
		owner: 'nathanfaucett',
		repo: 'pretzels',
		path: 'src/lib/posts/index.ts'
	});
	await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
		...postsIndexTs.data,
		owner: 'nathanfaucett',
		repo: 'pretzels',
		path: 'src/lib/posts/index.ts',
		message: 'update src/lib/posts/index.ts',
		content: utf8ToBase64(
			updatePostsIndex(base64ToUtf8((postsIndexTs.data as any).content), originalPost, post)
		)
	});
}

function createPostFile(post: Post) {
	return `import type { Post } from '.';
${post.images.map((filename, index) => `import image${index} from '$lib/assets/${filename}';`).join('\n')}

const post: Post = {
  title: '${post.title.trim()}',
  uri: '${post.uri.trim()}',
  description: \`${post.description.trim()}\`,
  review: {
    flavor: ${post.review.flavor},
    salt: ${post.review.salt},
    shape: ${post.review.shape},
    texture: ${post.review.texture}
  },
  address: '${post.address.trim()}',
  images: [${post.images.map((_filename, index) => `image${index}`).join(', ')}],
  updatedTs: ${post.updatedTs},
  createdTs: ${post.createdTs}
};

export default post;`;
}

function updatePostsIndex(content: string, originalPost: Post, post: Post) {
	return addPostToPostsIndex(removeOldPostFromPostsIndex(content, originalPost), post);
}

function removeOldPostFromPostsIndex(content: string, originalPost: Post) {
	const postVariable = `post${originalPost.createdTs}`;
	return deleteLinesThatContains(content, postVariable);
}

function addPostToPostsIndex(content: string, post: Post) {
	const postVariable = `post${post.createdTs}`;
	return `import ${postVariable} from './${post.createdTs}-${post.uri}';
${content.trim()}
posts[\`\${${postVariable}.createdTs}-\${${postVariable}.uri}\`] = ${postVariable};`;
}

function deleteLinesThatContains(content: string, match: string) {
	return content
		.split('\n')
		.filter((line) => !line.includes(match))
		.join('\n');
}
