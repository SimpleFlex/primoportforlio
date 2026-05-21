import React from "react";
import { TECH_STACK } from "../data/portfolio";

const Hero: React.FC = () => {
  const handleScroll = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 px-5 md:px-6 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start"
    >
      {/* Left column — Text */}
      <div className="md:col-span-7 z-10 reveal md:order-1 order-2">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#564338]/30 bg-[#1c1b1b] mb-6">
          <span
            className="w-2 h-2 rounded-full bg-primary"
            style={{ animation: "ping-once 1.5s infinite" }}
          />
          <span className="font-body text-label uppercase tracking-tighter text-[#ddc1b3]">
            Available for worldwide opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline font-extrabold mb-6 leading-[1.05] text-[48px] md:text-[72px] tracking-[-0.04em]">
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
              <span className="material-symbols-outlined text-3xl">{icon}</span>
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
      <div className="md:col-span-5 relative md:order-2 order-1 md:pt-0 pt-4">
        <div
          className="absolute w-[120%] h-[120%] rounded-full blur-3xl opacity-20 top-0 left-0"
          style={{
            background:
              "radial-gradient(circle, rgba(255,182,141,0.3) 0%, transparent 70%)",
            animation: "pulse-glow 3s ease-in-out infinite",
          }}
        />
        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
          {/* Decorative rings */}
          <div className="absolute inset-0 rounded-2xl border-2 border-primary/20 rotate-3 hover:rotate-0 transition-transform duration-500" />
          <div className="absolute inset-0 rounded-2xl border-2 border-primary/40 -rotate-3 hover:rotate-0 transition-transform duration-500" />

          {/* Photo */}
          <img
            src="/cover.jpg"
            alt="dev.Primo"
            className="relative z-10 w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />

          {/* Floating card — system status */}
          <div
            className="absolute top-10 -right-4 md:-right-12 z-20 glass-panel border border-[#564338]/20 p-4 rounded-xl animate-float"
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
            className="absolute bottom-20 -left-4 md:-left-12 z-20 glass-panel border border-[#564338]/20 p-4 rounded-xl animate-float"
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
    </section>
  );
};

export default Hero;
