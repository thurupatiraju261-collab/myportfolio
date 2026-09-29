import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { portfolioData } from '../data/portfolio.js';

export default function Footer() {
  const { footer, contact } = portfolioData;

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <FaGithub className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <FaLinkedin className="w-3.5 h-3.5" />;
      default:
        return <FaXTwitter className="w-3.5 h-3.5" />;
    }
  };

  return (
    <footer className="border-t border-[rgba(255,31,61,0.2)] bg-[#050203] py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        {/* Logo: "Murali.dev" */}
        <div className="flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff1f3d] shadow-[0_0_8px_#ff1f3d]" />
          <span className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight">
            {footer.logo}
          </span>
        </div>

        {/* One-line tagline */}
        <p className="text-zinc-400 text-sm max-w-lg mx-auto leading-relaxed">
          {footer.tagline}
        </p>

        {/* Small social icons */}
        <div className="flex items-center justify-center gap-3 pt-1">
          {contact.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="w-8 h-8 rounded-md bg-[#0b0507] border border-[rgba(255,31,61,0.25)] flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#ff1f3d] hover:shadow-[0_0_10px_rgba(255,31,61,0.35)] transition-all"
              aria-label={social.name}
            >
              {getSocialIcon(social.name)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-zinc-500 font-mono text-xs pt-4 border-t border-[rgba(255,31,61,0.1)] max-w-md mx-auto">
          {footer.copyright}
        </p>

      </div>
    </footer>
  );
}
