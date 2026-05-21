import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="px-5 md:px-6 max-w-[1280px] mx-auto reveal"
      style={{ marginTop: '120px' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Photo */}
        <div className="md:col-span-5 aspect-square relative group overflow-hidden rounded-2xl border border-[#564338]/20">
          <div className="absolute inset-0 bg-[#0e0e0e] opacity-40 group-hover:opacity-0 transition-opacity duration-700 z-10" />
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
            alt="About dev.Primo"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-7">
          <div className="inline-block text-primary font-body text-label tracking-widest uppercase mb-4">
            Architecting the future
          </div>
          <h2 className="font-headline font-bold text-[32px] md:text-[48px] mb-8 leading-tight tracking-tight">
            Systems that scale.{' '}
            <br />
            Code that speaks.
          </h2>
          <p className="font-body text-body-lg text-[#ddc1b3] mb-8 leading-relaxed">
            My approach to software engineering is rooted in the belief that code should be as
            elegant as the hardware it runs on. I specialize in building high-concurrency systems
            and immersive digital interfaces where performance and aesthetics converge.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: 'architecture',
                title: 'Scalable Arch',
                desc: 'Building distributed systems that grow with your user base.',
              },
              {
                icon: 'precision_manufacturing',
                title: 'Clean Logic',
                desc: 'Production-ready code with extreme attention to detail and tests.',
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="p-6 rounded-xl border border-[#564338]/10 bg-[#1c1b1b] hover:border-primary/30 transition-all group cursor-default"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-4 block group-hover:scale-110 transition-transform">
                  {icon}
                </span>
                <h4 className="font-headline font-semibold text-xl mb-2">{title}</h4>
                <p className="text-[#ddc1b3] font-body text-body-md">{desc}</p>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-[#564338]/20">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '40+', label: 'Projects Shipped' },
              { value: '99%', label: 'Client Satisfaction' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="font-headline font-extrabold text-3xl text-primary glow-copper mb-1">
                  {value}
                </div>
                <div className="font-body text-label text-[#ddc1b3] uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
