import React, { useMemo, useState } from 'react';

const Dot = ({ active, onClick }) => (
  <button
    aria-label="Go to slide"
    onClick={onClick}
    className={`w-4 h-4 rounded-full mx-1 transition-transform ${
      active ? 'bg-emerald-400 scale-100' : 'bg-gray-600 scale-90'
    }`}
  />
);

const SlideCard = ({ title, subtitle, tag, imageUrl, tagColor }) => {
  return (
    <div className="w-full flex-shrink-0 mr-0 select-none">
      <div className="bg-[#0f1316] rounded-3xl overflow-hidden border border-[#1a1f24]">
        <div className="h-64 md:h-80 bg-black">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="relative -mt-8 px-6 pb-6">
          <div className="bg-indigo-600 rounded-2xl text-white px-5 py-4 shadow-xl flex items-start justify-between">
            <div>
              <div className="text-sm opacity-90">{tag}</div>
              <div className="text-xl font-semibold">{title}</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentWorkSection = () => {
  const slides = useMemo(
    () => [
      {
        title: 'Gems of Insight Website',
        subtitle: 'Knowledge Platform',
        tag: 'Website',
        imageUrl:
          'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1600&auto=format&fit=crop',
        tagColor: 'bg-blue-600'
      },
      {
        title: 'Brand Decor',
        subtitle: 'Décor Solutions',
        tag: 'Website',
        imageUrl:
          'https://images.unsplash.com/photo-1559027615-5cf4160d09eb?q=80&w=1600&auto=format&fit=crop',
        tagColor: 'bg-purple-600'
      },
      {
        title: 'Smart Projects',
        subtitle: 'Innovative Systems',
        tag: 'Systems',
        imageUrl:
          'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
        tagColor: 'bg-emerald-600'
      },
      {
        title: 'E‑Commerce Platform',
        subtitle: 'Retail Experience',
        tag: 'Website',
        imageUrl:
          'https://images.unsplash.com/photo-1515165562835-c3b8c2e43a3e?q=80&w=1600&auto=format&fit=crop',
        tagColor: 'bg-pink-600'
      },
      {
        title: 'Fintech Dashboard',
        subtitle: 'Analytics Suite',
        tag: 'Web App',
        imageUrl:
          'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
        tagColor: 'bg-cyan-600'
      },
      {
        title: 'Event Booking App',
        subtitle: 'Mobile Experience',
        tag: 'Mobile',
        imageUrl:
          'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
        tagColor: 'bg-rose-600'
      }
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = (index) => setCurrentIndex(index);

  return (
    <section className="bg-black px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171c20] border border-[#24303a] mb-6">
          <span className="text-gray-300 text-sm">Our</span>
          <span className="ml-2 text-pink-400 font-semibold text-sm">Projects</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-6">
              Recent Work That Drives Results
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              From knowledge platforms to elegant brand websites and smart systems, we deliver
              robust, scalable solutions aligned to your goals.
            </p>
            <button className="px-6 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-md">
              View All
            </button>
          </div>

          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((s) => (
                <SlideCard key={s.title} title={s.title} subtitle={s.subtitle} tag={s.tag} imageUrl={s.imageUrl} tagColor={s.tagColor} />
              ))}
            </div>

            <div className="flex items-center mt-6">
              {slides.map((_, i) => (
                <Dot key={i} active={i === currentIndex} onClick={() => goTo(i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWorkSection;
