import type { BaseTranslation } from '../i18n-types';

const en = {
	errors: {
		name: {
			internal: 'Anwendungsfehler'
		},
		message: {
			application: 'Wenn es anhält, wenden Sie sich bitte an Support',
			tooManyRequests: 'Zu viele Anfragen',
			notFound: 'Nicht gefunden',
			invalid: 'Ungültig',
			required: 'Erforderlich',
			failedToProcessImageMessage: 'Die Datei nicht verarbeitet'
		}
	},
	signIn: {
		title: 'anmelden',
		passwordPlaceholder: 'Kennwort eingeben',
		signIn: 'anmelden'
	},
	home: {
		title: 'Brezel Review',
		description: 'Weiche Brezeln Bewerten Sie Anwendung/Website',
		searchPlaceholder: 'Suchen...',
		sortBy: {
			date: 'Datum',
			review: 'Rezension'
		},
		sortOrder: {
			asc: 'Aufsteigend',
			desc: 'Absteigend'
		}
	},
	posts: {
		title: 'Beiträge',
		back: 'Zurück',
		review: 'Rezension',
		flavor: 'Geschmack',
		texture: 'Textur',
		shape: 'Form',
		salt: 'Salz',
		sides: 'Seiten',
		address: 'Adresse',
		titleLabel: 'Titel',
		titlePlaceholder: 'Titel',
		uriLabel: 'URI',
		uriPlaceholder: 'URI',
		flavorReviewLabel: 'Flavor Review',
		flavorReviewPlaceholder: 'Geschmacksbewertung',
		textureReviewLabel: 'Texturbewertung',
		textureReviewPlaceholder: 'Texturbewertung',
		shapeReviewLabel: 'Formbewertung',
		shapeReviewPlaceholder: 'Formbewertung',
		saltReviewLabel: 'Salzbewertung',
		saltReviewPlaceholder: 'Salzbewertung',
		sidesReviewLabel: 'Seitenbewertung',
		sidesReviewPlaceholder: 'Seitenbewertung',
		descriptionLabel: 'Beschreibung',
		descriptionPlaceholder: 'Beschreibung',
		addressLabel: 'Adresse',
		addressPlaceholder: 'Adresse',
		imagesLabel: 'Bilder',
		imagesPlaceholder: 'Bilder',
		new: {
			title: 'Neuer Beitrag',
			post: 'post'
		},
		edit: {
			title: 'Post bearbeiten',
			save: 'Speichern'
		}
	},
	upload: {
		dropArea:
			'{dragging:boolean|{true: fallen, false: Datei ziehen oder klicken/drücken, um hochzuladen}}'
	}
} satisfies BaseTranslation;

export default en;
