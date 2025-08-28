import React from 'react';
import StatsSection from '../components/StatsSection';
import FAQSection from '../components/FAQSection';

const TeamRow = ({ imageUrl, name, role, desc, reverse }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className={`rounded-3xl overflow-hidden h-80 md:h-96 lg:h-[420px] ${reverse ? 'md:order-2' : ''}`}>
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <h3 className="text-white text-3xl font-bold mb-2">{name}</h3>
        <div className="text-amber-400 font-medium mb-4">{role}</div>
        <p className="text-gray-400 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Aboutus = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Banner */}
      <section className="px-6 py-16">
        <div className="rounded-3xl h-48 flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide">ABOUT</h1>
        </div>
      </section>

      {/* About Copy */}
      <section className="px-6 pb-8">
        <div className="max-w-4xl text-gray-300 leading-relaxed">
          At Technova, we transform ideas into powerful digital solutions. We design and develop modern,
          user‑friendly, and scalable systems that help businesses thrive. Our small, focused team blends
          engineering discipline with thoughtful design to deliver results.
        </div>
      </section>

      {/* Team Section (two members) */}
      <section className="px-6 py-12 space-y-14">
        <TeamRow
          imageUrl="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop"
          name="Vera Duncan"
          role="Product Manager"
          desc="Vera aligns product vision with user needs. She leads discovery, prioritizes outcomes, and ensures every release advances business goals with measurable impact."
        />
        <TeamRow
          imageUrl="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop"
          name="Jon Park"
          role="Lead Engineer"
          desc="Jon architects reliable, scalable systems and mentors the team on engineering best practices—from performance and security to clean code and automation."
          reverse
        />
      </section>

      {/* Stats on About page */}
      <StatsSection />
      <FAQSection />
    </div>
  );
};

export default Aboutus;
