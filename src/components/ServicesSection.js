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
          Enterprise Technology Solutions For Modern Businesses
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Web Application Development"
            description="Enterprise-grade web applications built with modern frameworks for scalability and performance."
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
              <h3 className="text-white text-2xl font-semibold mb-4">System Modernization</h3>
              <p className="text-gray-400 leading-relaxed">
                Transform legacy systems into modern, cloud-native solutions for enhanced performance and scalability.
              </p>
            </div>
          </div>

          <ServiceCard
            title="Mobile Application Development"
            description="Native and cross-platform mobile applications built for enterprise mobility and user engagement."
            accent={{ bg: 'bg-[#0f1d19]', icon: '' }}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-400 w-10 h-10">
                <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm3 18h4" />
              </svg>
            }
          />

          <ServiceCard
            title="UI/UX Design & Development"
            description="User-centered design solutions that combine aesthetics with functionality for optimal user experience."
            accent={{ bg: 'bg-[#1a1214]', icon: '' }}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-red-500 w-10 h-10">
                <path d="M4 6h16v12H4zM8 2h8v2H8z" />
              </svg>
            }
          />
        </div>

        {/* Second row for additional services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <ServiceCard
            title="Payment System Integration"
            description="Secure payment gateway integrations including M-Pesa, ensuring seamless financial transactions for your business."
            accent={{ bg: 'bg-[#102013]', icon: '' }}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-emerald-400 w-10 h-10">
                <path d="M12 1a4 4 0 110 8 4 4 0 010-8zm0 10a7 7 0 00-7 7v4h14v-4a7 7 0 00-7-7z" />
              </svg>
            }
          />

          <ServiceCard
            title="Google Ads Management"
            description="Strategic Google Ads campaigns that drive targeted traffic, increase conversions, and maximize your advertising ROI."
            accent={{ bg: 'bg-[#1a0f1f]', icon: '' }}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-400 w-10 h-10">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            }
          />

          <ServiceCard
            title="Search Engine Optimization"
            description="Comprehensive SEO strategies to improve your website's visibility, rankings, and organic traffic growth."
            accent={{ bg: 'bg-[#0f1a1f]', icon: '' }}
            icon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-cyan-400 w-10 h-10">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
        </div>

        {/* Stats Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">Our Success Metrics</h3>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-[#0f161e] border border-[#1b2630] hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">10</div>
              <div className="text-gray-300 text-sm md:text-base">Happy Clients</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-[#0f161e] border border-[#1b2630] hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">3M</div>
              <div className="text-gray-300 text-sm md:text-base">Lines of Code</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-[#0f161e] border border-[#1b2630] hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">10K</div>
              <div className="text-gray-300 text-sm md:text-base">Coffee Consumed</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-[#0f161e] border border-[#1b2630] hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm md:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
