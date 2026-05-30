import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  const links = [
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/yourprofile",
    },
    { icon: <FaGithub size={20} />, href: "https://github.com/SimpleFlex" },
    { icon: <FaTwitter size={20} />, href: "https://twitter.com/yourhandle" },
  ];

  return (
    <footer className="w-full border-t border-[#564338]/10 bg-[#0e0e0e] py-8 px-5 md:px-6">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-headline font-bold text-xl tracking-tighter">
          <span className="text-primary">dev.</span>
          <span className="text-white">Primo</span>
        </div>
        <div className="flex gap-6 mx-auto">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ddc1b3] hover:text-primary hover:drop-shadow-[0_0_8px_rgba(255,182,141,0.6)] transition-all"
            >
              {link.icon}
            </a>
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
