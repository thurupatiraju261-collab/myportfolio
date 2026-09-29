import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolio.js';

export default function Hero() {
  const { hero } = portfolioData;

  // Typewriter effect state
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageSrc, setImageSrc] = useState(hero.profileImage || '/raju_pass_pic.jpg');

  useEffect(() => {
    const words = hero.typewriterWords;
    if (!words || words.length === 0) return;
    const currentWord = words[currentWordIndex];

    let timer;
    if (!isDeleting && currentText === currentWord) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === '') {
      // Switch to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Typing or deleting
      const speed = isDeleting ? 45 : 85;
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentWord.substring(0, currentText.length - 1)
            : currentWord.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, hero.typewriterWords]);

  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Soft red radial glow (blur-3xl) behind the hero only */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] md:w-[720px] h-[340px] sm:h-[500px] rounded-full bg-[#ff1f3d]/15 blur-[120px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two columns on lg, stacked on mobile with the image FIRST */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column (Stacked FIRST on mobile, second on lg) */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center">
            <div className="relative flex items-center justify-center">
              
              {/* Second thin dashed outer ring, slowly rotating */}
              <div
                className="absolute w-[310px] h-[310px] sm:w-[360px] sm:h-[360px] rounded-full border border-dashed border-[#ff1f3d]/40 animate-[spin_30s_linear_infinite]"
                aria-hidden="true"
              />

              {/* Circular portrait inside thick red ring (border-4 border-[#ff1f3d], shadow-[0_0_60px_rgba(255,31,61,0.4)]), about 300px on desktop */}
              <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full border-4 border-[#ff1f3d] shadow-[0_0_60px_rgba(255,31,61,0.4)] overflow-hidden bg-zinc-950 flex items-center justify-center group">
                <img
                  src={imageSrc}
                  alt={hero.fullName || "Thurupati Raju"}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={() => {
                    if (imageSrc !== '/raju_pass_pic.jpg') {
                      setImageSrc('/raju_pass_pic.jpg');
                    }
                  }}
                />

                {/* Cybernetic ambient rim glow inside avatar */}
                <div
                  className="absolute inset-0 rounded-full border border-[rgba(255,31,61,0.3)] pointer-events-none"
                  aria-hidden="true"
                />
              </div>

              {/* Tiny floating label bottom right: "Available for work" with a green dot */}
              <div className="absolute -bottom-2 right-2 sm:right-4 px-3.5 py-1.5 rounded-full bg-[#0b0507] border border-[rgba(255,31,61,0.35)] shadow-[0_4px_20px_rgba(0,0,0,0.85)] text-xs font-mono text-zinc-200 flex items-center gap-2 z-10 whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                <span>{hero.availability}</span>
              </div>
            </div>
          </div>

          {/* Left Column (Stacked SECOND on mobile, first on lg) */}
          <div className="order-2 lg:order-1 lg:col-span-7 space-y-5 text-left">
            
            {/* Badge: red/10 bg, red border, rounded-full, JetBrains Mono, text-xs uppercase, small pulsing red dot: "OPEN TO OPPORTUNITIES" */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff1f3d]/10 border border-[#ff1f3d] font-mono text-xs uppercase text-[#ff1f3d] shadow-[0_0_12px_rgba(255,31,61,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1f3d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff1f3d]"></span>
              </span>
              <span className="font-semibold tracking-wider">{hero.badge}</span>
            </div>

            {/* Small text: "HI, I'M" (text-zinc-300, tracking-widest) */}
            <div className="text-zinc-300 text-sm font-semibold tracking-widest uppercase">
              {hero.greeting}
            </div>

            {/* Name: "Alex Morgan Kumar" in text-6xl md:text-7xl font-heading font-extrabold, red (#ff1f3d), leading-tight, on two lines */}
            <h1 className="text-6xl md:text-7xl font-heading font-extrabold text-[#ff1f3d] leading-tight drop-shadow-[0_0_24px_rgba(255,31,61,0.4)]">
              <div className="text-white">{hero.nameLine1}</div>
              <div className="text-[#ff1f3d]">{hero.nameLine2}</div>
            </h1>

            {/* Typewriter line: "I build " in white, then red typing text cycling through with a blinking cursor */}
            <div className="font-mono text-lg sm:text-xl font-medium flex items-center flex-wrap">
              <span className="text-white">{hero.typewriterPrefix}</span>
              <span className="text-[#ff1f3d] font-semibold ml-1 drop-shadow-[0_0_8px_rgba(255,31,61,0.4)]">
                {currentText}
              </span>
              <span className="text-[#ff1f3d] font-bold ml-0.5 animate-pulse">|</span>
            </div>

            {/* Role: "Full-Stack Developer & AI Engineer" in red, font-bold, text-lg */}
            <div className="text-[#ff1f3d] font-bold text-lg">
              {hero.role}
            </div>

            {/* Paragraph (text-zinc-400, max-w-lg) */}
            <p className="text-zinc-400 text-sm sm:text-base max-w-lg leading-relaxed">
              {hero.paragraph}
            </p>

            {/* Buttons row (rounded-lg, px-5 py-2.5, glow on hover):
                1. "View Projects →" outlined red border, red text, hover red/10 fill
                2. "Contact Me" outlined, white text, hover red border
                3. "Resume ⬇" outlined, white text
                + Social icons: GitHub, LinkedIn as small square outlined icon buttons (border red/30, hover red)
            */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* 1. View Projects */}
              <a
                href="#projects"
                className="rounded-lg px-5 py-2.5 border border-[#ff1f3d] text-[#ff1f3d] hover:bg-[#ff1f3d]/10 hover:shadow-[0_0_20px_rgba(255,31,61,0.35)] transition-all font-medium text-sm inline-flex items-center gap-2"
              >
                <span>{hero.buttons[0].label}</span>
              </a>

              {/* 2. Contact Me */}
              <a
                href="#contact"
                className="rounded-lg px-5 py-2.5 border border-zinc-700 text-white hover:border-[#ff1f3d] hover:text-white hover:shadow-[0_0_15px_rgba(255,31,61,0.25)] transition-all font-medium text-sm inline-flex items-center gap-2"
              >
                <span>{hero.buttons[1].label}</span>
              </a>

              {/* 3. Resume */}
              <a
                href="#contact"
                className="rounded-lg px-5 py-2.5 border border-zinc-700 text-white hover:border-[#ff1f3d] hover:text-white hover:shadow-[0_0_15px_rgba(255,31,61,0.25)] transition-all font-medium text-sm inline-flex items-center gap-2"
              >
                <span>{hero.buttons[2].label}</span>
              </a>

              {/* Social icons: GitHub, LinkedIn as small square outlined icon buttons (border red/30, hover red) */}
              <div className="flex items-center gap-2.5 pl-1 sm:pl-3">
                <a
                  href={hero.socials[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-[rgba(255,31,61,0.3)] text-zinc-400 hover:text-white hover:border-[#ff1f3d] hover:shadow-[0_0_12px_rgba(255,31,61,0.35)] transition-all flex items-center justify-center bg-[#0b0507]"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={hero.socials[1].href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg border border-[rgba(255,31,61,0.3)] text-zinc-400 hover:text-white hover:border-[#ff1f3d] hover:shadow-[0_0_12px_rgba(255,31,61,0.35)] transition-all flex items-center justify-center bg-[#0b0507]"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.section>
  );
}
