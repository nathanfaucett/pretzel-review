import type { BaseTranslation } from '../i18n-types';

const en = {
	errors: {
		name: {
			internal: 'Application Error'
		},
		message: {
			application: 'if it presists please contact support',
			tooManyRequests: 'Too many requests',
			notFound: 'Not found',
			invalid: 'Invalid',
			required: 'Required',
			failedToProcessImageMessage: 'Failed to process file'
		}
	},
	signIn: {
		title: 'Sign in',
		passwordPlaceholder: 'Enter password',
		signIn: 'Sign in'
	},
	home: {
		title: 'Pretzel Review',
		description: 'Soft Pretzels Review website'
	},
	posts: {
		title: 'Posts',
		back: 'Back',
		review: 'Review',
		flavor: 'Flavor',
		texture: 'Texture',
		shape: 'Shape',
		salt: 'Salt',
		sides: 'Sides',
		address: 'Address',
		titleLabel: 'Title',
		titlePlaceholder: 'Title',
		uriLabel: 'URI',
		uriPlaceholder: 'URI',
		flavorReviewLabel: 'Flavor Review',
		flavorReviewPlaceholder: 'Flavor Review',
		textureReviewLabel: 'Texture Review',
		textureReviewPlaceholder: 'Texture Review',
		shapeReviewLabel: 'Shape Review',
		shapeReviewPlaceholder: 'Shape Review',
		saltReviewLabel: 'Salt Review',
		saltReviewPlaceholder: 'Salt Review',
		sidesReviewLabel: 'Sides Review',
		sidesReviewPlaceholder: 'Sides Review',
		descriptionLabel: 'Description',
		descriptionPlaceholder: 'Description',
		addressLabel: 'Address',
		addressPlaceholder: 'Address',
		imagesLabel: 'Images',
		imagesPlaceholder: 'Images',
		new: {
			title: 'New Post',
			post: 'Post'
		},
		edit: {
			title: 'Edit Post',
			save: 'Save'
		}
	},
	upload: {
		dropArea: '{dragging:boolean|{true: drop, false: drag file or click/press to upload}}'
	}
} satisfies BaseTranslation;

export default en;
