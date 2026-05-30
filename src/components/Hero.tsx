import React, { useState } from "react";

// Tech stack with inline SVG logos
const TECH_LOGOS = [
  {
    name: "React",
    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="1.2" fill="none"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="1.2" fill="none" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" stroke-width="1.2" fill="none" transform="rotate(120 12 12)"/></svg>`,
  },
  {
    name: "Next.js",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 5.5h1.75v5.25l4-5.25H18l-4.5 5.75L18 18h-1.75l-3.25-4.25V18H11.5l-1-1.5V7.5z"/></svg>`,
  },
  {
    name: "Node.js",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.18L19 8.5v7L12 19.82 5 15.5v-7l7-4.32zM12 8a4 4 0 100 8 4 4 0 000-8zm0 1.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"/></svg>`,
  },
  {
    name: "TypeScript",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3V3zm10.5 10.5V11H9v1.5h1.75v5H12v-5h1.5zm1 0h3c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5H16v1h1.5a.5.5 0 010 1H15a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H16v-1h-1.5a.5.5 0 010-1z"/></svg>`,
  },
  {
    name: "MongoDB",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-.5 3-1.8 4.5-2.5 6C8.3 10.3 8 12 8 13.5c0 2.5 1.8 4.5 4 4.5s4-2 4-4.5c0-1.5-.3-3.2-1.5-5.5C13.8 6.5 12.5 5 12 2zm0 16.5c-.5.5-1 .8-1 1.5h2c0-.7-.5-1-1-1.5z"/></svg>`,
  },
  {
    name: "Docker",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 8H12V6.5h1.5V8zm0 2H12V8.5h1.5V10zm-2 0h-1.5V8.5H11.5V10zm-2 0H8V8.5h1.5V10zm4-2H10V6.5h1.5V8zm-2 0H8V6.5h1.5V8zm8.5 2c-.3-2-2-3-3.5-3h-.5V6c0-.3-.2-.5-.5-.5H5c-.3 0-.5.2-.5.5v6c0 2.2 1.8 4 4 4h6c2.5 0 4.5-1.8 5-4.2.5-.1 1-.4 1.5-.8H22v-.5c0-.3-.2-.5-.5-.5z"/></svg>`,
  },
  {
    name: "PostgreSQL",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C7 2 3 5 3 9v6c0 4 3 7 7 7h4c4 0 7-3 7-7V9c0-4-4-7-9-7zm0 2c3.9 0 7 2.2 7 5v1h-1c0-2.2-2.7-4-6-4S6 8.8 6 11H5v-2c0-2.8 3.1-5 7-5zm0 4c2.8 0 5 1.3 5 3v3c0 2.8-2.2 5-5 5H12c-2.8 0-5-2.2-5-5v-3c0-1.7 2.2-3 5-3z"/></svg>`,
  },
  {
    name: "GraphQL",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2zm0 2.31L5.34 8.5v7L12 19.69l6.66-4.19v-7L12 4.31zM12 7a5 5 0 110 10A5 5 0 0112 7zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>`,
  },
  {
    name: "Tailwind",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.51 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C7.38 16.85 8.49 18 11 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.51 12 7 12z"/></svg>`,
  },
  {
    name: "Git",
    svg: `<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.7 11.3l-9-9a1 1 0 00-1.4 0l-2 2 2.5 2.5a1.2 1.2 0 011.5 1.5l2.4 2.4a1.2 1.2 0 011.1 2 1.2 1.2 0 01-1.2 1.2 1.2 1.2 0 01-1.2-1.2c0-.22.07-.43.17-.6L12 9.4V15a1.2 1.2 0 01.6 1 1.2 1.2 0 01-1.2 1.2A1.2 1.2 0 0110.2 16a1.2 1.2 0 011-1.18V9.34a1.2 1.2 0 01-.65-1.57L8.1 5.3l-5.8 5.8a1 1 0 000 1.4l9 9a1 1 0 001.4 0l9-9a1 1 0 000-1.2z"/></svg>`,
  },
];

const Hero: React.FC = () => {
  const [colorRevealed, setColorRevealed] = useState(false);

  const handleScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* ── Ambient background glow ── */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* top-right copper flare */}
        <div
          className="absolute -top-20 right-0 w-[600px] h-[500px] opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at 80% 0%, rgba(255,182,141,0.55) 0%, transparent 65%)",
          }}
        />
        {/* bottom fade — blends hero into page seamlessly */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[220px] z-10"
          style={{
            background: "linear-gradient(to bottom, transparent, #131313)",
          }}
        />
        {/* subtle noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      {/* ── MOBILE LAYOUT ── */}
      <div className="flex flex-col md:hidden pt-16 relative z-10">
        {/* Hero Image */}
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src="/cover.jpg"
            alt="dev.Primo"
            onClick={() => setColorRevealed((v) => !v)}
            className={`w-full h-full object-cover object-top transition-all duration-700 cursor-pointer ${
              colorRevealed ? "grayscale-0" : "grayscale"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent z-10" />
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <span className="font-body text-label uppercase tracking-[0.2em] text-primary mb-2 block">
              Available for Hire
            </span>
            <h1 className="font-headline font-extrabold text-[48px] leading-none tracking-[-0.03em] text-white">
              ELIJAH
            </h1>
          </div>
          {/* System status card */}
          <div className="absolute top-20 right-4 z-20 bg-[#1c1b1b]/80 backdrop-blur-md border border-[#564338]/30 p-3 rounded-xl">
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            <p className="text-[9px] uppercase tracking-widest text-[#ddc1b3]/50 mb-1">
              System Status
            </p>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-[#e5e2e1] text-xs font-semibold">
                Optimal
              </span>
            </div>
            <p className="text-[9px] uppercase tracking-widest text-[#ddc1b3]/50 mb-0.5">
              Memory
            </p>
            <p className="text-[#e5e2e1] text-xs font-semibold">98% Free</p>
          </div>
        </div>

        {/* Text content */}
        <div className="px-5 pt-6 pb-2 reveal">
          {/* Available badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#564338]/30 bg-[#1c1b1b]/60 mb-5">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-[11px] uppercase tracking-widest text-white/70">
              Available for worldwide opportunities
            </span>
          </div>

          <p className="font-body text-[#ddc1b3] mb-6 leading-relaxed text-justify text-sm">
            Creating scalable software systems, immersive web applications, and
            modern digital products with precision engineering and
            high-performance architecture.
          </p>

          {/* CTAs */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleScroll("#contact")}
              className="flex-1 bg-primary text-[#532200] py-3.5 rounded-lg font-body text-sm uppercase tracking-widest font-semibold hover:bg-primary/80 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              Hire Me <span className="text-lg">→</span>
            </button>
            <a
              href="/cv.pdf"
              download
              className="flex-1 border border-[#564338]/40 text-[#ddc1b3] py-3.5 rounded-lg font-body text-sm uppercase tracking-widest hover:bg-white/5 hover:border-primary/40 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              Download CV
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-current stroke-[2]"
              >
                <path
                  d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-3 mb-4">
            {[
              {
                label: "GitHub",
                icon: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z",
              },
              {
                label: "LinkedIn",
                icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
              },
              {
                label: "Twitter",
                icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
              },
              {
                label: "Email",
                icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
              },
            ].map(({ label, icon }) => (
              <button
                key={label}
                aria-label={label}
                className="w-11 h-11 rounded-xl border border-[#564338]/30 bg-[#1c1b1b]/60 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-[#ddc1b3] fill-none stroke-current stroke-[1.5]"
                >
                  <path d={icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Tech marquee — mobile */}
        <div className="w-full overflow-hidden border-t border-[#564338]/10 py-4 opacity-70 hover:opacity-100 transition-all duration-500">
          <div className="tech-marquee items-center">
            {TECH_LOGOS.map(({ name, svg }, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 mr-8 whitespace-nowrap"
              >
                <span
                  className="w-5 h-5 flex-shrink-0 text-[#ddc1b3]/70"
                  dangerouslySetInnerHTML={{ __html: svg }}
                />
                <span className="font-headline text-[#ddc1b3]/60 text-sm font-semibold">
                  {name}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:flex flex-col min-h-screen relative z-10">
        {/* Main content */}
        <div className="flex-1 grid grid-cols-12 gap-8 items-center pt-28 pb-8 px-8 max-w-[1280px] mx-auto w-full">
          {/* Left column */}
          <div className="col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#564338]/30 bg-[#1c1b1b]/60 mb-8 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-body text-[11px] uppercase tracking-[0.18em] text-white/60">
                Available for worldwide opportunities
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-headline font-extrabold mb-6 leading-[1.02] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(52px, 5.5vw, 80px)" }}
            >
              Full Stack &amp; Software Developer
              <br />
              <span style={{ color: "var(--tw-color-primary, #ffb68d)" }}>
                Building Intelligent
              </span>
              <br />
              <span style={{ color: "var(--tw-color-primary, #ffb68d)" }}>
                Digital Experiences
              </span>
            </h1>

            {/* Subline */}
            <p className="font-body text-[#ddc1b3] max-w-lg mb-10 leading-relaxed text-base">
              Creating scalable software systems, immersive web applications,
              and modern digital products with precision engineering and
              high-performance architecture.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 mb-10">
              <button
                onClick={handleScroll("#contact")}
                className="bg-primary text-[#532200] px-8 py-4 rounded-lg font-body text-sm uppercase tracking-widest font-semibold hover:opacity-90 hover:shadow-[0_0_40px_rgba(255,182,141,0.4)] transition-all duration-300 active:scale-95 flex items-center gap-2"
              >
                Hire Me <span className="text-base">→</span>
              </button>
              <button
                onClick={handleScroll("#projects")}
                className="border border-[#564338]/40 text-[#ddc1b3] px-8 py-4 rounded-lg font-body text-sm uppercase tracking-widest hover:bg-[#353534]/30 hover:border-primary/40 transition-all duration-300 active:scale-95 flex items-center gap-2"
              >
                View Work <span className="text-base">→</span>
              </button>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              {[
                {
                  label: "GitHub",
                  icon: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z",
                },
                {
                  label: "LinkedIn",
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                },
                {
                  label: "Twitter",
                  icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  label: "Email",
                  icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6",
                },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-12 h-12 rounded-xl border border-[#564338]/30 bg-[#1c1b1b]/60 flex items-center justify-center hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#ddc1b3] group-hover:text-primary fill-none stroke-current stroke-[1.5] transition-colors duration-300"
                  >
                    <path
                      d={icon}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right column — Image with glow frame */}
          <div className="col-span-6 xl:col-span-5 relative flex items-center justify-center">
            {/* Outer orange glow */}
            <div
              className="absolute inset-0 rounded-2xl opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 40%, rgba(255,182,141,0.5) 0%, transparent 70%)",
              }}
            />

            {/* Image frame with orange border glow */}
            <div className="relative w-full max-w-[480px]">
              {/* Glowing border frame */}
              <div
                className="absolute -inset-[2px] rounded-2xl z-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,182,141,0.7) 0%, rgba(220,130,80,0.15) 50%, rgba(255,182,141,0.5) 100%)",
                  boxShadow:
                    "0 0 40px rgba(255,182,141,0.5), 0 0 80px rgba(220,130,80,0.25), inset 0 0 40px rgba(255,182,141,0.1)",
                }}
              />

              {/* Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden aspect-[3/4] group/img">
                <img
                  src="/cover.jpg"
                  alt="dev.Primo"
                  className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-700 cursor-pointer"
                />
                {/* Subtle inner vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313]/30 via-transparent to-transparent" />
              </div>

              {/* Floating card — System Status (top right) */}
              <div
                className="absolute top-8 -right-16 z-20 bg-[#1c1b1b]/90 backdrop-blur-xl border border-[#564338]/30 p-4 rounded-2xl min-w-[180px] shadow-2xl"
                style={{ animation: "float 4s ease-in-out infinite" }}
              >
                {/* Mac-style dots */}
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#ddc1b3]/50 mb-1">
                  System Status
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                  <span className="text-[#e5e2e1] text-sm font-semibold">
                    Optimal
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#ddc1b3]/50 mb-0.5">
                  Memory
                </p>
                <p className="text-[#e5e2e1] text-sm font-bold mb-2">
                  98% Free
                </p>
                <svg viewBox="0 0 80 24" className="w-full h-4">
                  <polyline
                    points="0,18 10,14 20,16 30,10 40,12 50,8 60,11 70,6 80,9"
                    fill="none"
                    stroke="#ffb68d"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Floating card — Deployment (bottom left) */}
              <div
                className="absolute bottom-8 -left-16 z-20 bg-[#1c1b1b]/90 backdrop-blur-xl border border-[#564338]/30 p-4 rounded-2xl min-w-[190px] shadow-2xl"
                style={{
                  animation: "float 4s ease-in-out infinite",
                  animationDelay: "-2s",
                }}
              >
                {/* Mac-style dots */}
                <div className="flex gap-1.5 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-[#ddc1b3]/50 mb-2">
                  Deployment
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-none stroke-primary stroke-[1.5]"
                    >
                      <path
                        d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="3.27 6.96 12 12.01 20.73 6.96"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <line
                        x1="12"
                        y1="22.08"
                        x2="12"
                        y2="12"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[#e5e2e1] text-sm font-semibold">
                    Production Build
                  </span>
                </div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[#ddc1b3]/50 text-[11px]">Build</span>
                  <span className="text-[#e5e2e1] text-[11px] font-semibold">
                    92%
                  </span>
                </div>
                <div className="h-1.5 w-full bg-[#564338]/20 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: "92%",
                      background: "linear-gradient(90deg, #ffb68d, #c4622a)",
                      boxShadow: "0 0 8px rgba(255,182,141,0.5)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech stack bar — desktop */}
        <div className="w-full border-t border-[#564338]/10 py-5 relative z-10">
          <div className="max-w-[1280px] mx-auto px-8">
            <div className="w-full overflow-hidden">
              <div className="tech-marquee items-center gap-0">
                {TECH_LOGOS.map(({ name, svg }, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2.5 mr-10 whitespace-nowrap group cursor-default"
                  >
                    <span
                      className="w-5 h-5 flex-shrink-0 text-[#ddc1b3]/50 group-hover:text-primary transition-colors duration-300"
                      dangerouslySetInnerHTML={{ __html: svg }}
                    />
                    <span className="font-headline text-[#ddc1b3]/50 text-sm font-semibold group-hover:text-[#ddc1b3]/90 transition-colors duration-300">
                      {name}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
