import type { Post } from '.';
import image0 from '$lib/assets/1730058435165-the-corner-pub-0.webp';

const post: Post = {
  title: 'The Corner Pub',
  uri: 'the-corner-pub',
  description: `Deep fried, very crunchy, very salty, rich in flavor needs no sauces.`,
  review: {
    flavor: 7.6,
    salt: 7.9,
    shape: 7.3,
    texture: 9.1,
    sides: 5
  },
  address: '627 E College Ave, Decatur, GA 30030',
  images: [image0],
  updatedTs: 1732383931424,
  createdTs: 1730058435165
};

export default post;