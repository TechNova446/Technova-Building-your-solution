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
    <section className="bg-black px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[28px] bg-[#0f161e] border border-[#1b2630] px-8 md:px-16 py-12 md:py-16 overflow-hidden">
          {/* Decorative corners */}
          <div className="absolute -left-10 -top-10 w-36 h-36 bg-rose-600 rotate-45 rounded-3xl opacity-80" />
          <div className="absolute -right-10 -bottom-10 w-36 h-36 bg-rose-600 rotate-45 rounded-3xl opacity-80" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            <div>
              <Counter end={12000} suffix="k" />
              <div className="text-gray-300 text-lg mt-2">Happy<br/>Customer</div>
            </div>

            <div className="hidden md:block h-16 w-px bg-emerald-500/40 place-self-center" />

            <div>
              <Counter end={99} />
              <div className="text-gray-300 text-lg mt-2">Business<br/>Plan</div>
            </div>

            <div className="hidden md:block h-16 w-px bg-emerald-500/40 place-self-center" />

            <div>
              <Counter end={210} />
              <div className="text-gray-300 text-lg mt-2">Complete<br/>Project</div>
            </div>

            <div className="hidden md:block h-16 w-px bg-emerald-500/40 place-self-center" />

            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-5xl md:text-6xl font-extrabold text-amber-400">+10</span>
              </div>
              <div className="text-gray-300 text-lg mt-2">Years<br/>Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
