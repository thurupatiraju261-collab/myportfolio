import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Settings, X, Sliders, Volume2, Monitor, Eye } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function FinishingTouches() {
  const { navbar } = portfolioData;
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Mock settings state
  const [soundEffects, setSoundEffects] = useState(false);
  const [crtScanlines, setCrtScanlines] = useState(false);
  const [glowDensity, setGlowDensity] = useState('High');

  useEffect(() => {
    const sectionIds = navbar.navLinks.map((link) => link.id);

    const handleScroll = () => {
      // 1. Back to top visibility check (> 600px)
      if (window.scrollY > 600) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // 2. Active section detection for vertical dot nav
      const scrollPos = window.scrollY + 180;
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

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Fixed right-edge vertical dot navigation (small red dots, active one filled with a glow) */}
      <nav
        aria-label="Section quick navigation"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 bg-[#0b0507]/80 backdrop-blur-md p-2 rounded-full border border-[rgba(255,31,61,0.25)] shadow-[0_4px_24px_rgba(0,0,0,0.7)]"
      >
        {navbar.navLinks.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.id)}
              className="relative group p-1 flex items-center justify-center focus-visible:outline-none"
              aria-label={`Scroll to ${link.name}`}
            >
              {/* Dot indicator */}
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-3 h-3 bg-[#ff1f3d] shadow-[0_0_12px_#ff1f3d] ring-2 ring-[#ff1f3d]/40 scale-110'
                    : 'w-2 h-2 bg-zinc-600 group-hover:bg-[#ff1f3d]/80 group-hover:scale-125'
                }`}
              />

              {/* Tooltip on hover */}
              <span className="opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 absolute right-7 px-2.5 py-1 rounded bg-[#0b0507] border border-[#ff1f3d]/40 text-[11px] font-mono whitespace-nowrap text-white shadow-[0_0_12px_rgba(255,31,61,0.3)] z-50">
                {link.name}
              </span>
            </a>
          );
        })}
      </nav>

      {/* 2. Small fixed "Settings" tab on the right edge (mock only) */}
      <div className="fixed right-0 top-1/3 -translate-y-1/2 z-40">
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="flex items-center gap-1.5 px-2.5 py-2 rounded-l-lg bg-[#0b0507] border-l border-t border-b border-[rgba(255,31,61,0.35)] hover:border-[#ff1f3d] text-zinc-300 hover:text-white shadow-[0_0_16px_rgba(255,31,61,0.25)] hover:shadow-[0_0_20px_rgba(255,31,61,0.45)] transition-all cursor-pointer group"
          aria-label="Open System Settings"
          title="Open Settings"
        >
          <Settings className="w-4 h-4 text-[#ff1f3d] group-hover:rotate-90 transition-transform duration-500" />
          <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-300 group-hover:text-white hidden sm:inline">
            CONFIG
          </span>
        </button>
      </div>

      {/* Settings Modal (Mock Drawer) */}
      <AnimatePresence>
        {settingsOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm cyber-card p-6 border border-[#ff1f3d] shadow-[0_0_35px_rgba(255,31,61,0.3)] bg-[#0b0507] relative space-y-5"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-[rgba(255,31,61,0.2)] pb-3">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#ff1f3d]" />
                  <h4 className="font-heading font-bold text-white text-base">System Settings</h4>
                </div>
                <button
                  type="button"
                  onClick={() => setSettingsOpen(false)}
                  className="p-1 rounded text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="Close Settings"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Setting Items */}
              <div className="space-y-4 text-xs font-mono">
                {/* Blue Grid Status */}
                <div className="flex items-center justify-between p-2.5 rounded bg-[#050203] border border-[rgba(255,31,61,0.15)]">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Monitor className="w-4 h-4 text-[#ff1f3d]" />
                    <span>Blue Grid Matrix</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[rgba(37,99,235,0.2)] text-blue-400 border border-blue-500/30">
                    Active (rgba(37,99,235,0.18))
                  </span>
                </div>

                {/* Cyber Glow Density */}
                <div className="flex items-center justify-between p-2.5 rounded bg-[#050203] border border-[rgba(255,31,61,0.15)]">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Eye className="w-4 h-4 text-[#ff1f3d]" />
                    <span>Red Glow Density</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setGlowDensity(glowDensity === 'High' ? 'Overdrive' : 'High')}
                    className="px-2 py-0.5 rounded bg-[#ff1f3d]/10 text-[#ff1f3d] border border-[#ff1f3d]/40 hover:bg-[#ff1f3d]/20 transition-colors"
                  >
                    {glowDensity}
                  </button>
                </div>

                {/* Audio SFX */}
                <div className="flex items-center justify-between p-2.5 rounded bg-[#050203] border border-[rgba(255,31,61,0.15)]">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Volume2 className="w-4 h-4 text-[#ff1f3d]" />
                    <span>Audio Synthesis</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSoundEffects(!soundEffects)}
                    className={`px-2 py-0.5 rounded border transition-colors ${
                      soundEffects
                        ? 'bg-[#ff1f3d]/20 text-[#ff1f3d] border-[#ff1f3d]'
                        : 'bg-zinc-900 text-zinc-500 border-zinc-800'
                    }`}
                  >
                    {soundEffects ? 'ENABLED' : 'MUTED'}
                  </button>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="w-full py-2.5 rounded-lg bg-[#ff1f3d] hover:bg-[#e01431] text-white text-xs font-mono font-medium transition-all shadow-[0_0_15px_rgba(255,31,61,0.4)]"
              >
                APPLY & CLOSE
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. Back-to-top button that appears after 600px scroll (red border, hover glow) */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-lg bg-[#0b0507] border border-[#ff1f3d] text-[#ff1f3d] hover:text-white hover:bg-[#ff1f3d]/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,31,61,0.35)] hover:shadow-[0_0_28px_rgba(255,31,61,0.6)] transition-all cursor-pointer"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
