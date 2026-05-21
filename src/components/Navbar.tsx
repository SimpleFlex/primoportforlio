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
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1280px] rounded-full border border-[#564338]/20 bg-[#131313]/70 backdrop-blur-xl flex justify-between items-center px-8 py-3 z-50 shadow-2xl"
      style={{ maxWidth: "1280px" }}
    >
      {/* Logo */}
      <span className="font-headline text-2xl font-bold text-primary tracking-tighter cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_20px_rgba(255,182,141,0.8)]">
        dev.Primo
      </span>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_ITEMS.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`font-body text-label uppercase tracking-wider transition-all duration-300 hover:scale-105 ${
                isActive
                  ? "text-primary border-b border-primary/40 pb-1"
                  : "text-[#ddc1b3] hover:text-[#e5e2e1]"
              }`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 ml-4"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Menu"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block w-6 h-0.5 bg-primary transition-all duration-300"
            style={{
              transform:
                menuOpen && i === 0
                  ? "rotate(45deg) translate(4px, 4px)"
                  : menuOpen && i === 1
                    ? "scaleX(0)"
                    : menuOpen && i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "none",
            }}
          />
        ))}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full mt-3 left-0 right-0 glass-panel border border-[#564338]/20 rounded-2xl py-6 px-8 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-body text-label uppercase tracking-wider text-[#ddc1b3] hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
