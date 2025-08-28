import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const slides = [
    {
      image: {
        src: "https://res.cloudinary.com/dijnmj1ea/image/upload/v1756388720/TECHNOVA2_gptshv.png",
        alt: "Business professional with laptop"
      },
      content: {
        subheading: "Technova – Innovating Digital Solutions",
        title: "We Build",
        highlight: "Modern Digital Solutions",
        description: "At Technova, we transform ideas into powerful digital solutions. We specialize in designing and developing modern, user-friendly, and scalable systems that help businesses thrive in the digital era."
      }
    },
    {
      image: {
        src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        alt: "Tech team collaboration"
      },
      content: {
        subheading: "Technova – Innovating Digital Solutions",
        title: "We Build",
        highlight: "Modern Digital Solutions",
        description: "At Technova, we transform ideas into powerful digital solutions. We specialize in designing and developing modern, user-friendly, and scalable systems that help businesses thrive in the digital era."
      }
    },
    {
      image: {
        src: "https://res.cloudinary.com/dijnmj1ea/image/upload/v1756388715/TECHNOVA_3_yft3kr.png",
        alt: "Modern office workspace"
      },
      content: {
        subheading: "Technova – Innovating Digital Solutions",
        title: "We Build",
        highlight: "Modern Digital Solutions",
        description: "At Technova, we transform ideas into powerful digital solutions. We specialize in designing and developing modern, user-friendly, and scalable systems that help businesses thrive in the digital era."
      }
    },
    {
      image: {
        src: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        alt: "Digital innovation"
      },
      content: {
        subheading: "Technova – Innovating Digital Solutions",
        title: "We Build",
        highlight: "Modern Digital Solutions",
        description: "At Technova, we transform ideas into powerful digital solutions. We specialize in designing and developing modern, user-friendly, and scalable systems that help businesses thrive in the digital era."
      }
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentContent = slides[currentSlide].content;
  const currentImage = slides[currentSlide].image;

  return (
    <section className="bg-black min-h-screen px-6 py-12 lg:py-16 overflow-hidden relative">
      {/* Stack on mobile, side-by-side on large screens */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
        {/* Left Content */}
        <div className={`flex-1 lg:pr-12 w-full transform transition-all duration-2000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
          {/* Yellow Subheading */}
          <div key={`sub-${currentSlide}`} className="animate-float">
            <p className="text-yellow-400 text-sm font-medium mb-6 uppercase tracking-wide transition-all duration-1200">
              {currentContent.subheading}
            </p>
          </div>
          
          {/* Main Heading */}
          <div key={`title-${currentSlide}`} className="transition-all duration-1500">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {currentContent.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-gradient-x">
                {currentContent.highlight}
              </span>
            </h1>
          </div>
          
          {/* Description */}
          <div key={`desc-${currentSlide}`} className="transition-all duration-1000">
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-lg">
              {currentContent.description}
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex items-center space-x-6 mb-10 lg:mb-16">
            <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 hover:scale-105 transition-all transform animate-glow">
              Show More
            </button>
            
            {/* Navigation Arrows */}
            <div className="flex space-x-3">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-green-400 hover:scale-110 transition-all transform hover:animate-glow"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-green-400 hover:scale-110 transition-all transform hover:animate-glow"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:scale-110 transition-all transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 hover:scale-110 transition-all transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
              </svg>
            </button>
            <button className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 hover:scale-110 transition-all transform">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side Hero Image Carousel */}
        <div className={`flex-1 w-full mt-8 lg:mt-0 flex justify-center lg:justify-end transform transition-all duration-2000 delay-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
          <div className="relative w-full max-w-md lg:max-w-none">
            <div className="w-full h-[320px] lg:w-[480px] lg:h-[480px] mx-auto bg-gradient-to-r from-green-400 via-green-500 to-purple-500 p-2 rounded-3xl animate-glow-border relative">
              <div className="w-full h-full bg-gray-200 rounded-3xl overflow-hidden relative">
                {slides.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.image.src}
                    alt={slide.image.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-800 ${
                      index === currentSlide 
                        ? 'translate-x-0 opacity-100' 
                        : index === (currentSlide + 1) % slides.length 
                          ? 'translate-x-full opacity-0' 
                          : '-translate-x-full opacity-0'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-green-400 w-6 animate-glow' 
                      : 'bg-gray-400 hover:bg-gray-300 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Dots */}
      <div className="absolute bottom-8 right-8 flex flex-col space-y-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
        <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-300"></div>
      </div>
    </section>
  );
};

export default HeroSection;
