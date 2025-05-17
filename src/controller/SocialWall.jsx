import React from 'react';

const posts = [
  {
    id: 1,
    image: '/images/post1.jpg',
    platform: 'facebook',
    url: 'https://www.facebook.com/yourpostlink'
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1745993640~exp=1745997240~hmac=b37094c4faaa93e4e74572e520a8f5290a2594a9f545b1851479f319b2533522&w=1380',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=yourvideoid'
  },
  {
    id: 3,
    image: '/images/post3.jpg',
    platform: 'instagram',
    url: 'https://www.instagram.com/p/yourpostid'
  },
  {
    id: 4,
    image: '/images/post4.jpg',
    platform: 'facebook',
    url: 'https://www.facebook.com/anotherpost'
  },
  {
    id: 5,
    image: '/images/post5.jpg',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=anothervid'
  },
  {
    id: 6,
    image: '/images/post6.jpg',
    platform: 'instagram',
    url: 'https://www.instagram.com/p/anotherinsta'
  },
];

const SocialWall = () => {
  return (
    <div className="px-4 py-10 text-center">
      <h2 className="text-2xl font-semibold mb-6">Social Wall</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-lg overflow-hidden shadow-md block"
          >
            <img src={post.image} alt={`Post ${post.id}`} className="w-full h-64 object-cover" />

            {/* Platform Icon */}
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full shadow">
              {post.platform === 'facebook' && (
                <img src="/icons/facebook.svg" alt="Facebook" className="w-5 h-5" />
              )}
              {post.platform === 'youtube' && (
                <img src="/icons/youtube.svg" alt="YouTube" className="w-5 h-5" />
              )}
              {post.platform === 'instagram' && (
                <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialWall;
