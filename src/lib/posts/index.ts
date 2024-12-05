import post1730058435165 from './1730058435165-the-corner-pub';
import post1729770095615 from './1729770095615-ameris-bank-amphitheatre-concession-stands';
import post1732410768689 from './1732410768689-rocky-mountain-pizza-company';
import post1716782422460 from './1716782422460-crystal-beer-parlor';
import post1719018191808 from './1719018191808-meltons-app-and-tap';
import post1731372650356 from './1731372650356-fad-irish-pub';
import post1722098861162 from './1722098861162-thinking-man-tavern';
import post1723938214780 from './1723938214780-the-porter-beer-bar';
import post1723931426927 from './1723931426927-the-albert';
import post1723141235240 from './1723141235240-sam-adams-atlanta-brew-house';
import post1717646487699 from './1717646487699-benchwarmers';
import post1722103563963 from './1722103563963-cypress-street-pint--plate';
import post1721738517602 from './1721738517602-der-biergarten';
import post1721417998627 from './1721417998627-mellow-mushroom-decatur';
import post1721251723092 from './1721251723092-the-lost-druid-brewery--distillery';
import post1721251536575 from './1721251536575-brick-store-pub';
import post1719697913116 from './1719697913116-twains-brewpub--billiards';
import post1718574622702 from './1718574622702-jekyl-and-hyde-taphouse';
import post1719270711525 from './1719270711525-the-springs-cinema--taphouse';
import post1713067212563 from './1713067212563-bodensee';
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
	const flavor = (post.review.flavor / 10) * 0.4;
	const texture = (post.review.texture / 10) * 0.3;
	const shape = (post.review.shape / 10) * 0.1;
	const salt = (post.review.salt / 10) * 0.05;
	const sides = (post.review.sides / 10) * 0.15;
	return (flavor + texture + shape + salt + sides) * 10;
}

export const posts: { [uri: string]: Post } = {};

posts[`${post1718058170368.createdTs}-${post1718058170368.uri}`] = post1718058170368;
posts[`${post1713067212563.createdTs}-${post1713067212563.uri}`] = post1713067212563;
posts[`${post1719270711525.createdTs}-${post1719270711525.uri}`] = post1719270711525;
posts[`${post1718574622702.createdTs}-${post1718574622702.uri}`] = post1718574622702;
posts[`${post1719697913116.createdTs}-${post1719697913116.uri}`] = post1719697913116;
posts[`${post1721251536575.createdTs}-${post1721251536575.uri}`] = post1721251536575;
posts[`${post1721251723092.createdTs}-${post1721251723092.uri}`] = post1721251723092;
posts[`${post1721417998627.createdTs}-${post1721417998627.uri}`] = post1721417998627;
posts[`${post1721738517602.createdTs}-${post1721738517602.uri}`] = post1721738517602;
posts[`${post1722103563963.createdTs}-${post1722103563963.uri}`] = post1722103563963;
posts[`${post1717646487699.createdTs}-${post1717646487699.uri}`] = post1717646487699;
posts[`${post1723141235240.createdTs}-${post1723141235240.uri}`] = post1723141235240;
posts[`${post1723931426927.createdTs}-${post1723931426927.uri}`] = post1723931426927;
posts[`${post1723938214780.createdTs}-${post1723938214780.uri}`] = post1723938214780;
posts[`${post1722098861162.createdTs}-${post1722098861162.uri}`] = post1722098861162;
posts[`${post1731372650356.createdTs}-${post1731372650356.uri}`] = post1731372650356;
posts[`${post1719018191808.createdTs}-${post1719018191808.uri}`] = post1719018191808;
posts[`${post1716782422460.createdTs}-${post1716782422460.uri}`] = post1716782422460;
posts[`${post1732410768689.createdTs}-${post1732410768689.uri}`] = post1732410768689;
posts[`${post1729770095615.createdTs}-${post1729770095615.uri}`] = post1729770095615;
posts[`${post1730058435165.createdTs}-${post1730058435165.uri}`] = post1730058435165;