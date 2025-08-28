import React from 'react';

const ConsultCTA = () => {
  return (
    <section className="bg-black px-6 py-20">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600" />
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-8 md:px-16 py-16">
          <div>
            <h3 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <a href="/contact" className="inline-block bg-white text-black px-8 py-4 rounded-full font-semibold hover:opacity-90">
              Schedule a Call
            </a>
          </div>
          <div className="flex justify-end">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
              alt="Consultation"
              className="w-full max-w-xl object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultCTA;
