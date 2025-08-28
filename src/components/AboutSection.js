import React, { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: "Innovation Driven",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "High Performance",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Enterprise Grade",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Secure & Scalable",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="bg-black min-h-screen px-4 sm:px-6 py-12 sm:py-14 lg:py-16 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile Layout: Image First, Then Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Image Section - Always First on Mobile */}
          <div className={`order-1 lg:order-1 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="flex justify-center lg:justify-start">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400 to-purple-500 p-1 rounded-2xl sm:rounded-3xl animate-glow-border">
                <div className="w-full h-full bg-gray-200 rounded-2xl sm:rounded-3xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Team collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section - Always Second on Mobile */}
          <div className={`order-2 lg:order-2 transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* About Us Badge */}
            <div className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 sm:px-4 py-2 rounded-lg font-medium mb-4 animate-float text-sm sm:text-base">
              About Us
            </div>
            
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight text-center lg:text-left">
              Technology Innovation & Digital Excellence
            </h2>
            
            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed text-center lg:text-left">
              Our mission is to empower businesses through cutting-edge technology solutions. We combine innovative design with robust development to create digital platforms that drive growth, efficiency, and competitive advantage in the modern digital landscape.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className={`flex items-center space-x-3 transform transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors animate-glow flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-white font-medium text-sm sm:text-base">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className={`absolute bottom-4 sm:bottom-8 right-4 sm:right-12 flex flex-col space-y-2 transition-all duration-1000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-300"></div>
      </div>
    </section>
  );
};

export default AboutSection;
