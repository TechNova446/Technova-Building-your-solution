import React, { useMemo, useState } from 'react';

const ArrowButton = ({ direction = 'left', onClick }) => (
  <button
    aria-label={direction === 'left' ? 'Previous' : 'Next'}
    onClick={onClick}
    className="w-12 h-12 rounded-xl bg-[#151a20] border border-[#24303a] text-gray-200 hover:bg-[#1a2027] hover:text-white transition-colors flex items-center justify-center"
  >
    {direction === 'left' ? (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M15 6l-6 6 6 6" /></svg>
    ) : (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M9 6l6 6-6 6" /></svg>
    )}
  </button>
);

const TestimonialSlide = ({ person }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      {/* Image with gradient frame */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-br from-emerald-400 via-cyan-500 to-fuchsia-500 blur opacity-80" />
        <div className="relative rounded-[36px] overflow-hidden">
          <img src={person.imageUrl} alt={person.name} className="w-full h-[420px] object-cover" />
        </div>
      </div>

      {/* Quote content */}
      <div>
        <div className="text-emerald-400 text-5xl mb-6">“”</div>
        <p className="text-gray-300 leading-relaxed mb-8">
          {person.quote}
        </p>
        <div>
          <div className="text-white text-2xl font-semibold">{person.name}</div>
          <div className="text-amber-400">{person.role}</div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = useMemo(
    () => [
      {
        name: 'Kevin Lynch',
        role: 'CEO, TechFlow Solutions',
        quote:
          'Technova transformed our business with their innovative technology solutions. Their team delivered a robust web application that streamlined our operations and increased efficiency by 40%.',
        imageUrl:
          'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop'
      },
      {
        name: 'Sarah Ahmed',
        role: 'CTO, Digital Innovations',
        quote:
          'Working with Technova was exceptional. They understood our technical requirements perfectly and delivered a scalable mobile application that exceeded our expectations.',
        imageUrl:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop'
      },
      {
        name: 'Jon Park',
        role: 'CTO, Horizon Technologies',
        quote:
          'We trusted Technova to deliver enterprise-grade solutions and they exceeded expectations. The collaboration was smooth, the technology was cutting-edge, and the results were measurable.',
        imageUrl:
          'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop'
      }
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="bg-black px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <TestimonialSlide person={testimonials[index]} />

        <div className="flex items-center gap-4 mt-8 lg:mt-10 lg:justify-end">
          <ArrowButton direction="left" onClick={prev} />
          <ArrowButton direction="right" onClick={next} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
