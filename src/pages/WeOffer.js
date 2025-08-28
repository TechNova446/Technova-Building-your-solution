import React, { useState } from 'react';

const OfferItem = ({ title, description, bullets }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#1b2630] rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-left px-6 py-5">
        <span className="text-white text-lg font-semibold">{title}</span>
        <span className="text-emerald-400">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-gray-300 space-y-3">
          <p>{description}</p>
          <ul className="list-disc pl-5 space-y-1 text-gray-400">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <a href="/contact" className="inline-block mt-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold">Get Started</a>
        </div>
      )}
    </div>
  );
};

const WeOffer = () => {
  const offers = [
    {
      title: 'Website Development',
      description: 'High‑performance, SEO‑ready, responsive websites built with React, Next.js, or Django.',
      bullets: ['Landing sites and CMS', 'E‑commerce storefronts', 'Headless architectures']
    },
    {
      title: 'Mobile Applications',
      description: 'Cross‑platform mobile apps with React Native, integrated with secure APIs and analytics.',
      bullets: ['Android & iOS', 'Push notifications', 'App store deployment']
    },
    {
      title: 'System Revamp',
      description: 'Modernize legacy systems for speed, stability, and scalability with Node.js or Django.',
      bullets: ['Codebase audits', 'Performance tuning', 'Security hardening']
    },
    {
      title: 'UI/UX Design',
      description: 'User‑centered design systems, wireframes, and prototypes that convert.',
      bullets: ['Design systems', 'Interactive prototypes', 'Usability testing']
    },
    {
      title: 'M‑Pesa Integration',
      description: 'Seamless mobile payments with auditable workflows and reporting.',
      bullets: ['STK Push', 'C2B & B2C flows', 'Reconciliation & webhooks']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Banner */}
      <section className="px-6 py-16">
        <div className="rounded-3xl h-48 flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-emerald-400">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-wide">WE OFFER</h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto space-y-4">
          {offers.map((o) => (
            <OfferItem key={o.title} {...o} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default WeOffer;
