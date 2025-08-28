import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Banner */}
      <section className="px-6 py-16">
        <div className="rounded-3xl h-48 flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide">CONTACT</h1>
        </div>
      </section>

      {/* Form + Map */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="bg-[#0e141a] text-white rounded-xl px-4 py-4 outline-none" placeholder="Full Name" />
              <input className="bg-[#0e141a] text-white rounded-xl px-4 py-4 outline-none" placeholder="Subject" />
            </div>
            <input className="bg-[#0e141a] text-white rounded-xl px-4 py-4 w-full outline-none" placeholder="Email" />
            <textarea className="bg-[#0e141a] text-white rounded-xl px-4 py-4 w-full h-60 outline-none" placeholder="Message" />
            <button type="submit" className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-md">
              Send Message
            </button>
          </form>

          {/* Map placeholder */}
          <div className="rounded-3xl overflow-hidden bg-[#0e141a] h-[420px]">
            <iframe
              title="map"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(90%) invert(90%) contrast(90%)' }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.790703870827!2d36.821946!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2ske!4v1700000000000"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-3xl border border-[#1b2630] bg-[#0f1316] p-10 text-center">
            <div className="w-28 h-28 mx-auto rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400 w-10 h-10"><path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"/></svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-400">Nairobi, Kenya</p>
          </div>

          <div className="rounded-3xl border border-[#1b2630] bg-[#0f1316] p-10 text-center">
            <div className="w-28 h-28 mx-auto rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-purple-400 w-10 h-10"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">0793 515 066</p>
          </div>

          <div className="rounded-3xl border border-[#1b2630] bg-[#0f1316] p-10 text-center">
            <div className="w-28 h-28 mx-auto rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-red-500 w-10 h-10"><path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm-1.4 4.25l-6.2 4.65a1 1 0 01-1.2 0L5 8.25V6.5l7 5.25 7-5.25v1.75z"/></svg>
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400">Technova446@gmail.com</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
