import React from 'react';

const Badge = ({ label }) => (
  <span className="px-3 py-1 rounded-full bg-[#0f1316] border border-[#1a1f24] text-gray-200 text-sm">
    {label}
  </span>
);

const Project = ({ title, description, imageUrl, tags }) => (
  <div className="rounded-2xl overflow-hidden bg-[#0f1316] border border-[#1a1f24]">
    <div className="h-56">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <Badge key={t} label={t} />
        ))}
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const techStack = [
    'Django',
    'Node.js',
    'React',
    'React Native',
    'Next.js',
    'Django REST API',
    'Java API',
    'Vercel'
  ];

  const projects = [
    {
      title: 'Gems of Insight',
      description: 'Knowledge-driven platform built with Next.js and Django REST API.',
      imageUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1400&auto=format&fit=crop',
      tags: ['Next.js', 'Django REST API', 'Vercel']
    },
    {
      title: 'Brand Decor',
      description: 'Elegant décor website powered by React and Node.js.',
      imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
      tags: ['React', 'Node.js']
    },
    {
      title: 'Smart Projects',
      description: 'Innovative internal tools using Django + React.',
      imageUrl: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1400&auto=format&fit=crop',
      tags: ['Django', 'React']
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Projects that turn ideas into products
            </h1>
            <p className="text-gray-400 mb-6 max-w-2xl">
              We design and engineer modern web and mobile solutions using a proven, scalable tech stack.
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((t) => (
                <Badge key={t} label={t} />
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"
              alt="Portfolio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Project key={p.title} {...p} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;