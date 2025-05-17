import React from 'react';

const posts = [
  {
    id: 1,
    image: 'https://imgs.search.brave.com/9pA48GOIOj4VbBPLRsSmQ0DPUr7EYwoF9ehEtcfaPUg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/c2VvbmkvZzgvOTk5/OXA3Njk1Ljc2OTUu/MjEwNjE5MTMzMzU1/LnY4ZzgvY2F0YWxv/Z3VlL3VuaXZlcnNh/bC1jb21wdXRlci1h/Y2FkZW15LXNlb25p/LWNpdHktc2Vvbmkt/aW5zdGl0dXRlcy1k/NHpuODV5cm5zLmpw/Zz93PTM4NDAmcT03/NQ',
    // platform: 'facebook',
    url: 'https://www.facebook.com/share/1AoydTCwd5/'
  },
  {
    id: 2,
    image: 'https://img.freepik.com/free-photo/full-shot-family-running-meadow_23-2149049202.jpg?t=st=1745993640~exp=1745997240~hmac=b37094c4faaa93e4e74572e520a8f5290a2594a9f545b1851479f319b2533522&w=1380',
    platform: 'youtube',
    url: 'https://www.youtube.com/watch?v=yourvideoid'
  },
  {
    id: 3,
    image: 'https://imgs.search.brave.com/aGeYV6v3J5fJOwXCRV5Qmmfjdq33K-Y_UpIrcc0dgdo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/amFncmFuam9zaC5j/b20vaW1hZ2VzLzIw/MjQvU2VwdGVtYmVy/LzU5MjAyNC9mZWF0/dXJlLndlYnA',
    // platform: 'instagram',
    url: 'https://youtu.be/OR-d4dXLxag?si=qZ7UgvuiDCBiRWtL'
  },
  {
    id: 4,
    image: 'https://imgs.search.brave.com/GCOZ6TcVGpTX18DuajTIzOHLiRBkFMfvzv1SNvwFMjs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzUxLzQ4LzY0/LzM2MF9GXzI1MTQ4/NjQ4Ml80blF1RWo5/Z25xVDZlSHdOSUZF/cUt0a2J1STRwb0xH/aS5qcGc',
    // platform: 'facebook',
    url: 'https://youtube.com/shorts/eCtDRYgLLNA?si=0l-C2_GkugDoNGla'
  },
  {
    id: 5,
    image: 'https://imgs.search.brave.com/MQN8djtywexk_IyAENAfSTueRZyd5-HvNvt3DTbm44U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50LmpkbWFnaWNi/b3guY29tL2NvbXAv/c2VvbmkvZzgvOTk5/OXA3Njk1Ljc2OTUu/MjEwNjE5MTMzMzU1/LnY4ZzgvY2F0YWxv/Z3VlL3VuaXZlcnNh/bC1jb21wdXRlci1h/Y2FkZW15LXNlb25p/LWNpdHktc2Vvbmkt/aW5zdGl0dXRlcy15/YzJsMjl4bzVmLmpw/Zz93PTM4NDAmcT03/NQ',
    // platform: 'youtube',
    url: 'https://youtube.com/shorts/vObC5BKYtuM?si=A5cEDFb-id0ErLSD'
  },
  {
    id: 6,
    image: 'https://imgs.search.brave.com/CzMyQ_eXybGoipa4AJMua4bWeZ1VUMN-53Pu5HDX_L8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z3BjYWxvdXIuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA1L1dIQVQtSVMt/RENBLUFORC1QR0RD/QS5wbmc',
    // platform: 'instagram',
    url: 'https://youtube.com/shorts/gDEPOqqauEg?si=USu_Q3pTDfqka9eo'
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
