import React from 'react';

const CTASection = () => {
  return (
    <section className="bg-black px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-[32px] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-violet-600" />
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8 md:px-16 py-14">
            <div>
              <div className="text-white/80 mb-2">Are You Ready For</div>
              <h3 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                LETS GET STARTED
              </h3>
              <h4 className="text-white/90 text-3xl md:text-4xl font-semibold mb-8">YOUR PROJECT</h4>
              <a href="/contact" className="bg-white text-[#ff2f66] px-8 py-4 rounded-full font-semibold hover:opacity-90">
                Get Started
              </a>
            </div>

            <div className="flex justify-end">
              <img
                src="https://res.cloudinary.com/dijnmj1ea/image/upload/v1756388720/TECHNOVA2_gptshv.png"
                alt="Technova CTA"
                className="w-full max-w-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
