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

const SlideCard = ({ title, subtitle, tag, imageUrl, tagColor, projectUrl }) => {
  const handleClick = () => {
    if (projectUrl) {
      window.open(projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="w-full flex-shrink-0 mr-0 select-none">
      <div 
        className={`bg-[#0f1316] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1a1f24] ${projectUrl ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}`}
        onClick={handleClick}
      >
        <div className="h-48 sm:h-64 md:h-80 bg-black">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="relative -mt-6 sm:-mt-8 px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="bg-indigo-600 rounded-xl sm:rounded-2xl text-white px-3 sm:px-5 py-3 sm:py-4 shadow-xl flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="text-xs sm:text-sm opacity-90">{tag}</div>
              <div className="text-lg sm:text-xl font-semibold truncate">{title}</div>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 ml-2">
              {projectUrl ? (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M10 6L8.59 7.41L13.17 12l-4.58 4.59L10 18l6-6l-6-6z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path d="M8 5v14l11-7L8 5z" />
                </svg>
              )}
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
          'https://res.cloudinary.com/dijnmj1ea/image/upload/v1756388122/WhatsApp_Image_2025-08-28_at_06.34.56_17066cc0_ysj9pl.jpg',
        tagColor: 'bg-blue-600',
        projectUrl: 'https://gems-of-insight.vercel.app/'
      },
      {
        title: 'Brand Decor',
        subtitle: 'Décor Solutions',
        tag: 'Website',
        imageUrl:
          'https://res.cloudinary.com/dijnmj1ea/image/upload/v1756387970/WhatsApp_Image_2025-08-28_at_06.32.31_88ee760f_e1iigz.jpg',
        tagColor: 'bg-purple-600',
        projectUrl: 'https://brand-decor-interior-ten.vercel.app/'
      },
      {
        title: 'Well Path',
        subtitle: 'Innovative Systems',
        tag: 'Systems',
        imageUrl:
          'https://res.cloudinary.com/dijnmj1ea/image/upload/v1756410563/well_path_rlrrvu.jpg',
        tagColor: 'bg-emerald-600',
        projectUrl: 'https://well-path.vercel.app/'
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
    <section className="bg-black px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171c20] border border-[#24303a] mb-6">
          <span className="text-gray-300 text-sm">Our</span>
          <span className="ml-2 text-pink-400 font-semibold text-sm">Projects</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 sm:mb-6">
              Technology Solutions That Drive Innovation
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
              From knowledge platforms to enterprise applications and intelligent systems, we deliver
              robust, scalable technology solutions that transform businesses and drive digital success.
            </p>
            <button className="w-full sm:w-auto px-6 py-3 sm:py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-md text-sm sm:text-base">
              View All
            </button>
          </div>

          <div className="order-1 lg:order-2 overflow-hidden w-full mb-6 lg:mb-0">
            <div
              className="flex transition-transform duration-500 w-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((s) => (
                <SlideCard key={s.title} title={s.title} subtitle={s.subtitle} tag={s.tag} imageUrl={s.imageUrl} tagColor={s.tagColor} projectUrl={s.projectUrl} />
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start mt-4 sm:mt-6">
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
