import React, { useEffect, useRef, useState } from 'react';

const useInView = (threshold = 0.2) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

const Counter = ({ end, suffix = '', duration = 1200 }) => {
  const { ref, inView } = useInView(0.3);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = 0;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (end - start) * eased);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="flex items-baseline space-x-2">
      <span className="text-5xl md:text-6xl font-extrabold text-amber-400">{value}{suffix}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-black px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl sm:rounded-[28px] bg-[#0f161e] border border-[#1b2630] px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute -left-6 sm:-left-10 -top-6 sm:-top-10 w-24 h-24 sm:w-36 sm:h-36 bg-rose-600 rotate-45 rounded-2xl sm:rounded-3xl opacity-80" />
          <div className="absolute -right-6 sm:-right-10 -bottom-6 sm:-bottom-10 w-24 h-24 sm:w-36 sm:h-36 bg-rose-600 rotate-45 rounded-2xl sm:rounded-3xl opacity-80" />

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 md:gap-10 relative">
            <div className="text-center md:text-left">
              <div className="flex items-baseline justify-center md:justify-start space-x-2">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-400">10+</span>
              </div>
              <div className="text-gray-300 text-sm sm:text-base md:text-lg mt-2">Happy<br/>Clients</div>
            </div>

            <div className="hidden md:block h-16 w-px bg-emerald-500/40 place-self-center" />

            <div className="text-center md:text-left">
              <Counter end={99} />
              <div className="text-gray-300 text-sm sm:text-base md:text-lg mt-2">Business<br/>Plan</div>
            </div>

            <div className="hidden md:block h-16 w-px bg-emerald-500/40 place-self-center" />

            <div className="text-center md:text-left">
              <Counter end={210} />
              <div className="text-gray-300 text-sm sm:text-base md:text-lg mt-2">Complete<br/>Project</div>
            </div>

            <div className="hidden md:block h-16 w-px bg-emerald-500/40 place-self-center" />

            <div className="text-center md:text-left">
              <div className="flex items-baseline justify-center md:justify-start space-x-2">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-400">2</span>
              </div>
              <div className="text-gray-300 text-sm sm:text-base md:text-lg mt-2">Years<br/>Existence</div>
            </div>

            <div className="hidden md:block h-16 w-px bg-emerald-500/40 place-self-center" />

            <div className="text-center md:text-left">
              <div className="flex items-baseline justify-center md:justify-start space-x-2">
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-amber-400">97%</span>
              </div>
              <div className="text-gray-300 text-sm sm:text-base md:text-lg mt-2">Client<br/>Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
