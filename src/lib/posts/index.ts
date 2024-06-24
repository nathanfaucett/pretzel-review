import post1718574622702 from './1718574622702-jekyl-and-hyde-taphouse';
import post1719270711525 from './1719270711525-the-springs-cinema--taphouse';
import post1719018191808 from './1719018191808-meltons-app-and-tap';
import post1716782422460 from './1716782422460-crystal-beer-parlor';
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
	};
	address: string;
	images: string[];
	createdTs: number;
	updatedTs: number;
};

export function getReview(post: Post) {
	return (post.review.flavor + post.review.texture + post.review.shape + post.review.salt) / 4;
}

export const posts: { [uri: string]: Post } = {};

posts[`${post1718058170368.createdTs}-${post1718058170368.uri}`] = post1718058170368;
posts[`${post1717646487699.createdTs}-${post1717646487699.uri}`] = post1717646487699;
posts[`${post1713067212563.createdTs}-${post1713067212563.uri}`] = post1713067212563;
posts[`${post1716782422460.createdTs}-${post1716782422460.uri}`] = post1716782422460;
posts[`${post1719018191808.createdTs}-${post1719018191808.uri}`] = post1719018191808;
posts[`${post1719270711525.createdTs}-${post1719270711525.uri}`] = post1719270711525;
posts[`${post1718574622702.createdTs}-${post1718574622702.uri}`] = post1718574622702;