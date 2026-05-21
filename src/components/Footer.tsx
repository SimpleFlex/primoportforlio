import React from "react";

const Footer: React.FC = () => {
  const links = ["LinkedIn", "GitHub", "Twitter", "Email"];

  return (
    <footer className="w-full border-t border-[#564338]/10 bg-[#0e0e0e] py-8 px-5 md:px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-headline font-bold text-xl text-primary tracking-tighter">
          dev.Primo
        </div>
        <div className="flex gap-8">
          {links.map((link) => (
            <button
              key={link}
              className="text-[#ddc1b3] font-body text-body-md hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,182,141,0.6)] transition-all cursor-pointer bg-transparent border-none p-0"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="font-body text-body-md text-[#ddc1b3] text-sm">
          © 2026 dev.Primo. SYSTEM STATUS:{" "}
          <span className="text-primary glow-copper">OPTIMAL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
