import type { Post } from '.';
import image0 from '$lib/assets/1736634358475-brewhouse-0.webp';

const post: Post = {
  title: 'Brewhouse',
  uri: 'brewhouse',
  description: `This is a classically shaped American style pretzel. The deep fry gives it a lovely flavor and texture. Do to its size it is more dense and chewy than the larger classic bavarian style but overall is a worth while endeavor. We did not partake in the add on queso but we not disappointed by their delicious house made mustard, a unique flavor experience and a must try.`,
  review: {
    flavor: 7.1,
    salt: 8,
    shape: 5.5,
    texture: 7.4,
    sides: 5
  },
  address: '401 Moreland Ave NE, Atlanta, GA 30307',
  images: [image0],
  updatedTs: 1739101392728,
  createdTs: 1736634358475
};

export default post;