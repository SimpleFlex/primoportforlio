import React, { useState } from "react";
import { TECH_STACK } from "../data/portfolio";

const Hero: React.FC = () => {
  const [colorRevealed, setColorRevealed] = useState(false);

  const handleScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col">
      {/* ── MOBILE LAYOUT ── */}
      <div className="flex flex-col md:hidden pt-16">
        {/* Hero Image — full width, flush to top */}
        <div className="relative w-full aspect-square overflow-hidden">
          {/* Photo — tap to reveal color, tap again to revert */}
          <img
            src="/cover.jpg"
            alt="dev.Primo"
            onClick={() => setColorRevealed((v) => !v)}
            className={`w-full h-full object-cover object-top transition-all duration-700 cursor-pointer ${
              colorRevealed ? "grayscale-0" : "grayscale"
            }`}
          />

          {/* Gradient overlay bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/40 to-transparent z-10" />

          {/* Available badge + name overlay */}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <span className="font-body text-label uppercase tracking-[0.2em] text-primary mb-2 block">
              Available for Hire
            </span>
            <h1 className="font-headline font-extrabold text-[56px] leading-none tracking-[-0.03em] text-[#e5e2e1]">
              ELIJAH
            </h1>
          </div>

          {/* Floating card — system status top right */}
          <div className="absolute top-20 right-4 z-20 glass-panel border border-[#564338]/20 p-3 rounded-xl">
            <div className="flex gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <code className="font-code text-[11px] text-primary/80 leading-relaxed">
              system: optimal
              <br />
              mem: 98% free
            </code>
          </div>
        </div>

        {/* Text content below image */}
        <div className="px-5 pt-6 pb-2 reveal">
          <p className="font-body text-body-lg text-[#ddc1b3] mb-6 leading-relaxed text-justify">
            Creating scalable software systems, immersive web applications, and
            modern digital products with precision engineering and
            high-performance architecture.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={handleScroll("#contact")}
              className="w-full bg-primary text-[#532200] py-4 rounded-lg font-body text-label uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,182,141,0.3)] transition-all duration-300 active:scale-95"
            >
              Hire Me
            </button>
            <button
              onClick={handleScroll("#projects")}
              className="w-full border border-[#564338] text-[#e5e2e1] py-4 rounded-lg font-body text-label uppercase tracking-widest hover:bg-[#353534]/30 transition-all duration-300 active:scale-95"
            >
              View Work
            </button>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 mb-4">
            {(["terminal", "share", "code"] as const).map((icon) => (
              <button
                key={icon}
                className="text-[#ddc1b3] hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
              >
                <span className="material-symbols-outlined text-3xl">
                  {icon}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tech marquee */}
        <div className="w-full overflow-hidden border-y border-[#564338]/10 py-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <div className="tech-marquee items-center">
            {TECH_STACK.map((tech, i) => (
              <span
                key={i}
                className="font-headline text-[#ddc1b3] text-sm font-semibold mr-10 whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT ── */}
      <div className="hidden md:grid md:grid-cols-12 gap-12 items-start pt-32 pb-20 px-6 max-w-[1280px] mx-auto w-full">
        {/* Left column — Text */}
        <div className="md:col-span-7 z-10 reveal">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#564338]/30 bg-[#1c1b1b] mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-body text-label uppercase tracking-tighter text-[#ddc1b3]">
              Available for worldwide opportunities
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline font-extrabold mb-6 leading-[1.05] text-[72px] tracking-[-0.04em]">
            Full Stack &amp; Software Developer <br />
            <span className="text-primary glow-copper">
              Building Intelligent
            </span>{" "}
            Digital Experiences
          </h1>

          {/* Subline */}
          <p className="font-body text-body-lg text-[#ddc1b3] max-w-xl mb-10 leading-relaxed">
            Creating scalable software systems, immersive web applications, and
            modern digital products with precision engineering and
            high-performance architecture.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12">
            <button
              onClick={handleScroll("#contact")}
              className="bg-primary text-[#532200] px-10 py-4 rounded-lg font-body text-label uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,182,141,0.3)] transition-all duration-300 active:scale-95"
            >
              Hire Me
            </button>
            <button
              onClick={handleScroll("#projects")}
              className="border border-[#564338] text-[#e5e2e1] px-10 py-4 rounded-lg font-body text-label uppercase tracking-widest hover:bg-[#353534]/30 transition-all duration-300 active:scale-95"
            >
              View Work
            </button>
          </div>

          {/* Social icons */}
          <div className="flex gap-6 mb-16">
            {(["terminal", "share", "code"] as const).map((icon) => (
              <button
                key={icon}
                className="text-[#ddc1b3] hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
              >
                <span className="material-symbols-outlined text-3xl">
                  {icon}
                </span>
              </button>
            ))}
          </div>

          {/* Tech marquee */}
          <div className="w-full overflow-hidden relative grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 py-4 border-y border-[#564338]/10">
            <div className="tech-marquee items-center">
              {TECH_STACK.map((tech, i) => (
                <span
                  key={i}
                  className="font-headline text-[#ddc1b3] text-lg font-semibold mr-12"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — Image */}
        <div className="md:col-span-5 relative">
          <div
            className="absolute w-[120%] h-[120%] rounded-full blur-3xl opacity-20 top-0 left-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(255,182,141,0.3) 0%, transparent 70%)",
              animation: "pulse-glow 3s ease-in-out infinite",
            }}
          />
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 rotate-3 hover:rotate-0 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-2xl border-2 border-primary/40 -rotate-3 hover:rotate-0 transition-transform duration-500" />

            <img
              src="/cover.jpg"
              alt="dev.Primo"
              className="relative z-10 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />

            {/* Floating card — system status */}
            <div
              className="absolute top-10 -right-12 z-20 glass-panel border border-[#564338]/20 p-4 rounded-xl animate-float"
              style={{ animationDelay: "-1s" }}
            >
              <div className="flex gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
              <code className="font-code text-code-sm text-primary/80">
                system_status: optimal
                <br />
                memory: 98% free
              </code>
            </div>

            {/* Floating card — deploy status */}
            <div
              className="absolute bottom-20 -left-12 z-20 glass-panel border border-[#564338]/20 p-4 rounded-xl animate-float"
              style={{ animationDelay: "-3s" }}
            >
              <span
                className="material-symbols-outlined text-primary mb-2 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                deployed_code
              </span>
              <div className="h-2 w-24 bg-[#201f1f] rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary glow-copper" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
