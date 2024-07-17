import post1721251723092 from './1721251723092-the-lost-druid-brewery--distillery';
import post1721251536575 from './1721251536575-brick-store-pub';
import post1716782422460 from './1716782422460-crystal-beer-parlor';
import post1719697913116 from './1719697913116-twains-brewpub--billiards';
import post1718574622702 from './1718574622702-jekyl-and-hyde-taphouse';
import post1719270711525 from './1719270711525-the-springs-cinema--taphouse';
import post1719018191808 from './1719018191808-meltons-app-and-tap';
import post1713067212563 from './1713067212563-bodensee';
import post1717646487699 from './1717646487699-benchwarmers';
import post1718058170368 from './1713067212563-bodensee';

export type Post = {
	uri: string;
	title: string;
	description: string;
	review: {
		flavor: number;
		texture: number;
		shape: number;
		salt: number;
		sides: number;
	};
	address: string;
	images: string[];
	createdTs: number;
	updatedTs: number;
};

export function getReview(post: Post) {
	return (
		(post.review.flavor * 2 +
			post.review.texture * 2 +
			post.review.shape * 2 +
			post.review.salt * 2 +
			post.review.sides) /
		9
	);
}

export const posts: { [uri: string]: Post } = {};

posts[`${post1718058170368.createdTs}-${post1718058170368.uri}`] = post1718058170368;
posts[`${post1717646487699.createdTs}-${post1717646487699.uri}`] = post1717646487699;
posts[`${post1713067212563.createdTs}-${post1713067212563.uri}`] = post1713067212563;
posts[`${post1719018191808.createdTs}-${post1719018191808.uri}`] = post1719018191808;
posts[`${post1719270711525.createdTs}-${post1719270711525.uri}`] = post1719270711525;
posts[`${post1718574622702.createdTs}-${post1718574622702.uri}`] = post1718574622702;
posts[`${post1719697913116.createdTs}-${post1719697913116.uri}`] = post1719697913116;
posts[`${post1716782422460.createdTs}-${post1716782422460.uri}`] = post1716782422460;
posts[`${post1721251536575.createdTs}-${post1721251536575.uri}`] = post1721251536575;
posts[`${post1721251723092.createdTs}-${post1721251723092.uri}`] = post1721251723092;