import React, { useState } from 'react';

const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#1b2630] rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-5 py-4 flex items-center justify-between">
        <span className="text-white font-medium">{q}</span>
        <span className="text-emerald-400">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-400">{a}</div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      q: 'What services does Technova offer?',
      a: 'We build websites, mobile apps, revamp legacy systems, design UI/UX, and integrate M‑Pesa payments.'
    },
    {
      q: 'How do we start a project?',
      a: 'Schedule a call through our contact page. We will discuss goals, scope, timeline, and budget to propose the best path.'
    },
    {
      q: 'Do you provide ongoing support?',
      a: 'Yes. We offer maintenance, performance monitoring, security updates, and feature iterations.'
    }
  ];

  return (
    <section className="bg-black px-6 pb-20">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-white text-3xl font-bold mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((f) => (
            <Item key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
