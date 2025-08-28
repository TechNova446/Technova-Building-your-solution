import React from 'react';

const PostCard = ({ imageUrl, category, date, title }) => (
  <div className="rounded-3xl overflow-hidden bg-[#0f1316] border border-[#1a1f24]">
    <div className="h-56">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400">{category}</span>
        <span>{date}</span>
      </div>
      <h3 className="text-white text-xl font-semibold leading-snug">{title}</h3>
    </div>
  </div>
);

const Blog = () => {
  const posts = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop',
      category: 'Develop',
      date: 'Dec 30, 2020',
      title: 'British Designer Create Arras'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
      category: 'Marketing',
      date: 'Dec 30, 2020',
      title: 'Search Engine Marketing Share'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop',
      category: 'Design',
      date: 'Dec 30, 2020',
      title: 'Develop Your Startup Idea'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop',
      category: 'Design',
      date: 'Jan 4, 2021',
      title: 'Planning To Create A Website'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop',
      category: 'Marketing',
      date: 'Jan 4, 2021',
      title: 'Grow Your Business & Start'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
      category: 'Marketing',
      date: 'Jan 4, 2021',
      title: 'Building The Google Web UI'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Banner */}
      <section className="px-6 py-16">
        <div className="rounded-3xl h-48 flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide">BLOG</h1>
        </div>
      </section>

      {/* Posts */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p) => (
            <PostCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* News & Articles */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-white/80 mb-2">News & Articles</div>
            <h3 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Get updated with the latest insights
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              From engineering best practices to UI/UX trends, our team shares practical advice you can apply right away.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0f1316] border border-[#1a1f24] rounded-2xl p-5 text-white">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-gray-400 text-sm">Developers</div>
              </div>
              <div className="bg-[#0f1316] border border-[#1a1f24] rounded-2xl p-5 text-white">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="bg-[#0f1316] border border-[#1a1f24] rounded-2xl p-5 text-white">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-gray-400 text-sm">Digital Marketing</div>
              </div>
              <div className="bg-[#0f1316] border border-[#1a1f24] rounded-2xl p-5 text-white">
                <div className="text-2xl font-bold">4.9★</div>
                <div className="text-gray-400 text-sm">Avg. Rating</div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1400&auto=format&fit=crop"
              alt="News"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
