import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "../data/portfolio";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((n) => n.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1280px] z-50">
      {/* ── Main bar ── */}
      <div className="rounded-full border border-[#564338]/30 bg-[#131313]/80 backdrop-blur-xl flex justify-between items-center px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {/* Logo */}
        <span className="font-headline text-xl font-bold tracking-tight cursor-pointer select-none hover:drop-shadow-[0_0_20px_rgba(255,182,141,0.8)] transition-all duration-300">
          <span className="text-primary">dev.</span>
          <span className="text-white">Primo</span>
        </span>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative font-body text-[11px] uppercase tracking-[0.15em] transition-all duration-300 hover:text-[#e5e2e1] hover:scale-105 ${
                  isActive ? "text-primary" : "text-[#ddc1b3]"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px rounded-full bg-primary/60" />
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop CTA — Download CV */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/40 text-primary text-[11px] uppercase tracking-[0.15em] font-semibold transition-all duration-300 hover:bg-primary hover:text-[#532200] hover:border-primary hover:shadow-[0_0_24px_rgba(255,182,141,0.35)] group"
        >
          Download CV
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 fill-none stroke-current stroke-[2] transition-transform duration-300 group-hover:translate-y-0.5"
          >
            <path
              d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-[2px] rounded-full bg-primary transition-all duration-300"
              style={{
                width: i === 1 ? (menuOpen ? "24px" : "16px") : "24px",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 1
                      ? "scaleX(0)"
                      : menuOpen && i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : "none",
              }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="mt-2 rounded-2xl border border-[#564338]/20 bg-[#131313]/95 backdrop-blur-xl py-5 px-6 flex flex-col gap-4 shadow-2xl">
          {NAV_ITEMS.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-body text-[11px] uppercase tracking-[0.15em] transition-colors duration-200 flex items-center gap-3 ${
                  isActive
                    ? "text-primary"
                    : "text-[#ddc1b3] hover:text-primary"
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                )}
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
