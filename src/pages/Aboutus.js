import React from 'react';
import StatsSection from '../components/StatsSection';
import FAQSection from '../components/FAQSection';

const TeamRow = ({ imageUrl, name, role, desc, reverse }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-start ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Image - Always appears first on mobile, order controlled on desktop */}
      <div className={`rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 lg:h-[420px] ${reverse ? 'md:order-2' : ''} order-1`}>
        <img src={imageUrl} alt={name} className="w-full h-full object-contain" />
      </div>
      
      {/* Text content - Always appears second on mobile, order controlled on desktop */}
      <div className={`${reverse ? 'md:order-1' : ''} order-2`}>
        <h3 className="text-white text-2xl sm:text-3xl font-bold mb-2">{name}</h3>
        <div className="text-amber-400 font-medium mb-3 sm:mb-4 text-sm sm:text-base">{role}</div>
        <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
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
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="rounded-2xl sm:rounded-3xl h-32 sm:h-40 md:h-48 flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide">ABOUT</h1>
        </div>
      </section>

      {/* About Copy */}
      <section className="px-4 sm:px-6 pb-6 sm:pb-8">
        <div className="max-w-4xl text-gray-300 leading-relaxed text-sm sm:text-base">
          At Technova, we transform ideas into powerful digital solutions. We design and develop modern,
          user‑friendly, and scalable systems that help businesses thrive. Our small, focused team blends
          engineering discipline with thoughtful design to deliver results.
        </div>
      </section>

      {/* Team Section (two members) */}
      <section className="px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-14">
        <TeamRow
          imageUrl="/cas.jpg"
          name="Cascallen Steve"
          role="Frontend Engineer"
          desc="Cascallen Steve specializes in creating beautiful, responsive user interfaces and exceptional user experiences. He transforms complex designs into seamless, interactive web applications that users love to engage with."
        />
        <TeamRow
          imageUrl="/billy.jpg"
          name="Billy"
          role="Backend Engineer"
          desc="Billy architects robust, scalable backend systems and APIs. He ensures data security, optimal performance, and seamless integration between frontend and backend services."
          reverse
        />
      </section>

      {/* Our Impact Stats */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
              Numbers that tell our story of innovation, dedication, and success in delivering exceptional technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center p-6 rounded-2xl bg-[#0f161e] border border-[#1b2630] hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">1.2M</div>
              <div className="text-gray-300 text-sm sm:text-base">Coffee Consumed</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-[#0f161e] border border-[#1b2630] hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">150+</div>
              <div className="text-gray-300 text-sm sm:text-base">Lines of Code</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-[#0f161e] border border-[#1b2630] hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">4.9</div>
              <div className="text-gray-300 text-sm sm:text-base">Happy Clients</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-[#0f161e] border border-[#1b2630] hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-400 mb-2">4.9</div>
              <div className="text-gray-300 text-sm sm:text-base">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats on About page */}
      <StatsSection />
      <FAQSection />
    </div>
  );
};

export default Aboutus;
