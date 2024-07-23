import type { Post } from '.';
import image0 from '$lib/assets/1721738517602-der-biergarten-0.webp';

const post: Post = {
  title: 'Der Biergarten',
  uri: 'der-biergarten',
  description: `it comes with three different mustards, one is smooth with horseraddish, the other two are stone ground with various spices.`,
  review: {
    flavor: 5.1,
    salt: 5.9,
    shape: 7.2,
    texture: 5.4,
    sides: 8.6
  },
  address: '300 Marietta St NW, Atlanta, GA 30313',
  images: [image0],
  updatedTs: 1721738517602,
  createdTs: 1721738517602
};

export default post;