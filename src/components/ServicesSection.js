import React from 'react';

const ServiceCard = ({ icon, title, description, accent }) => {
  return (
    <div className="bg-[#0f1316] rounded-2xl p-8 border border-[#1a1f24] hover:border-[#27303a] transition-colors">
      <div
        className={`w-24 h-24 rounded-2xl flex items-center justify-center mb-8 ${accent.bg}`}
      >
        <div className={`${accent.icon} w-10 h-10`}>{icon}</div>
      </div>
      <h3 className="text-white text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-black px-6 pt-12 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-3 py-1 rounded-lg bg-[#171c20] border border-[#24303a] mb-4">
          <span className="text-gray-300 text-sm">What We Do</span>
          <span className="ml-2 text-pink-400 font-semibold text-sm">Technova Services</span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
          Tailored Digital Solutions For Your Business
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Website Development"
            description="Professional, responsive, and SEO-ready websites built for performance and results."
            accent={{ bg: 'bg-[#15101f]', icon: '' }}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-purple-400 w-10 h-10">
                <path d="M3 4h18v14H3zM5 20h14v2H5z" />
              </svg>
            }
          />

          <div className="rounded-2xl p-[2px] bg-gradient-to-b from-yellow-400 to-amber-500">
            <div className="bg-[#0f1316] rounded-2xl h-full p-8">
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center mb-8 bg-yellow-400/20">
                <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400 w-10 h-10">
                  <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h12v2H3z" />
                </svg>
              </div>
              <h3 className="text-white text-2xl font-semibold mb-4">System Revamp</h3>
              <p className="text-gray-400 leading-relaxed">
                Upgrade and optimize outdated systems for speed, security, and scalability.
              </p>
            </div>
          </div>

          <ServiceCard
            title="Mobile Applications"
            description="Custom mobile apps for Android and iOS tailored to your business workflows."
            accent={{ bg: 'bg-[#0f1d19]', icon: '' }}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-400 w-10 h-10">
                <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm3 18h4" />
              </svg>
            }
          />

          <ServiceCard
            title="Web Design (UI/UX)"
            description="Creative, clean, and modern designs that deliver intuitive user experiences."
            accent={{ bg: 'bg-[#1a1214]', icon: '' }}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-red-500 w-10 h-10">
                <path d="M4 6h16v12H4zM8 2h8v2H8z" />
              </svg>
            }
          />
        </div>

        {/* Second row for M-Pesa */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <ServiceCard
            title="M‑Pesa Integration"
            description="Secure mobile payment solutions integrated seamlessly into your systems and websites."
            accent={{ bg: 'bg-[#102013]', icon: '' }}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400 w-10 h-10">
                <path d="M12 1a4 4 0 110 8 4 4 0 010-8zm0 10a7 7 0 00-7 7v4h14v-4a7 7 0 00-7-7z" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
