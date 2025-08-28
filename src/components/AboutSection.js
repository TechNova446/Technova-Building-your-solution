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
      title: "Easy to Manage",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Fast Processing",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Highly Professional",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Protect Your Business",
      icon: (
        <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="bg-black min-h-screen px-6 py-14 lg:py-16 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Side - Image */}
        <div className={`flex-1 pr-0 lg:pr-12 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-green-400 to-purple-500 p-1 rounded-3xl animate-glow-border">
              <div className="w-full h-full bg-gray-200 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`flex-1 pl-0 lg:pl-12 transform transition-all duration-1200 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          {/* About Us Badge */}
          <div className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium mb-4 animate-float">
            About Us
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Creative Design & Development
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Our Mission Is To Provide Quality English Language Instruction Through A Variety Of Courses To International And Local Students In A Professional And Supportive Atmosphere Utilizing Our Unique English Teaching Methodology. Our Mission Is To Provide.
          </p>
          
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`flex items-center space-x-3 transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors animate-glow">
                  {feature.icon}
                </div>
                <span className="text-white font-medium">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className={`absolute bottom-8 right-12 flex flex-col space-y-2 transition-all duration-1000 delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-300"></div>
      </div>
    </section>
  );
};

export default AboutSection;
