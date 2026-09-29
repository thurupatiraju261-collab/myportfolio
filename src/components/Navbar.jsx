import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Navbar() {
  const { navbar } = portfolioData;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Always apply light mode
  useEffect(() => {
    document.documentElement.classList.add('light');
  }, []);

  // Scroll-spy to detect active section
  useEffect(() => {
    const sectionIds = navbar.navLinks.map((link) => link.id);

    const handleScroll = () => {
      const scrollPos = window.scrollY + 140; // Offset for topbar height

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navbar.navLinks]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-[rgba(255,31,61,0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          
          {/* Left logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-white font-heading font-bold text-xl tracking-tight group"
          >
            <span
              className="w-2.5 h-2.5 bg-[#ff1f3d] rounded-[2px] shadow-[0_0_8px_#ff1f3d] group-hover:scale-125 transition-transform shrink-0"
              aria-hidden="true"
            />
            <span className="text-white tracking-wider font-extrabold group-hover:text-[#ff1f3d] transition-colors">
              {navbar.brandFirstName}
            </span>
            {navbar.brandLastName ? (
              <span className="text-[#ff1f3d] drop-shadow-[0_0_8px_rgba(255,31,61,0.6)]">
                {navbar.brandLastName}
              </span>
            ) : null}
          </a>

          {/* Center pill nav links */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#0b0507]/60 border border-[rgba(255,31,61,0.15)]">
            {navbar.navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1 rounded-full text-xs xl:text-sm whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[rgba(255,31,61,0.15)] border border-[#ff1f3d] text-[#ff1f3d] font-medium shadow-[0_0_12px_rgba(255,31,61,0.25)]'
                      : 'text-zinc-400 hover:text-white border border-transparent'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right: mobile hamburger only */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#0b0507] border border-[rgba(255,31,61,0.25)] text-zinc-300 hover:text-white hover:border-[#ff1f3d] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-[#050203]/95 backdrop-blur-xl border-b border-[rgba(255,31,61,0.25)] px-4 py-4 space-y-1.5 animate-fadeIn">
          {navbar.navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                  isActive
                    ? 'bg-[rgba(255,31,61,0.15)] border border-[#ff1f3d] text-[#ff1f3d] font-semibold shadow-[0_0_10px_rgba(255,31,61,0.2)]'
                    : 'text-zinc-400 hover:text-white hover:bg-[#0b0507]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
