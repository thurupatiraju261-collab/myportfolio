import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Phone, Download, Diamond } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolio.js';

function CountUpNumber({ end, duration = 1.6, trigger = false }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let startTime = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [trigger, end, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function About() {
  const { about } = portfolioData;
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: '-40px' });

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={about.title}
          subtitle={about.subtitle}
        />

        {/* Layout: two-column grid (lg:grid-cols-[2fr_1fr]), stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8 items-stretch">
          
          {/* Left card (about text), two mock paragraphs */}
          <div className="cyber-card p-6 sm:p-8 flex flex-col justify-center space-y-5">
            {about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-zinc-300 text-sm sm:text-base leading-relaxed tracking-wide"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Right card (contact info), with small red icon squares */}
          <div className="cyber-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Institute */}
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 flex items-center justify-center text-[#ff1f3d] shrink-0 shadow-[0_0_10px_rgba(255,31,61,0.2)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Institution</span>
                  <span className="text-sm font-medium text-zinc-200 truncate block">
                    {about.contactInfo.institute}
                  </span>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 flex items-center justify-center text-[#ff1f3d] shrink-0 shadow-[0_0_10px_rgba(255,31,61,0.2)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Email Address</span>
                  <a
                    href={`mailto:${about.contactInfo.email}`}
                    className="text-sm font-medium text-zinc-200 hover:text-[#ff1f3d] transition-colors truncate block"
                  >
                    {about.contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 flex items-center justify-center text-[#ff1f3d] shrink-0 shadow-[0_0_10px_rgba(255,31,61,0.2)]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-mono text-zinc-500 uppercase block">Phone / Mobile</span>
                  <a
                    href={`tel:${about.contactInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm font-medium text-zinc-200 hover:text-[#ff1f3d] transition-colors truncate block"
                  >
                    {about.contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Full-width outlined red "Download CV" button with a Download icon */}
            <div className="pt-2">
              <a
                href={about.contactInfo.cvUrl}
                download="Alex_Morgan_Kumar_CV.pdf"
                className="w-full rounded-lg px-4 py-2.5 border border-[#ff1f3d] text-[#ff1f3d] hover:bg-[#ff1f3d]/10 hover:shadow-[0_0_20px_rgba(255,31,61,0.35)] transition-all font-medium text-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

        </div>

        {/* STATS ROW below (grid-cols-2 md:grid-cols-4, each card with a thin red top accent line and a small red diamond icon) */}
        <div
          ref={statsRef}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {about.stats.map((stat, idx) => (
            <div
              key={idx}
              className="cyber-card p-5 sm:p-6 relative overflow-hidden flex flex-col justify-between group hover:border-[#ff1f3d] transition-all"
            >
              {/* Thin red top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-[#ff1f3d] shadow-[0_0_8px_#ff1f3d]"
                aria-hidden="true"
              />

              {/* Small red diamond icon top right */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-500">STAT 0{idx + 1}</span>
                <Diamond className="w-3.5 h-3.5 text-[#ff1f3d] fill-[#ff1f3d] drop-shadow-[0_0_6px_#ff1f3d]" />
              </div>

              {/* Number: text-4xl font-heading font-bold, red, with a count-up animation on scroll into view */}
              <div className="font-heading text-4xl sm:text-5xl font-bold text-[#ff1f3d] tracking-tight tabular-nums drop-shadow-[0_0_16px_rgba(255,31,61,0.35)]">
                <CountUpNumber end={stat.value} trigger={isStatsInView} />
              </div>

              {/* Label: JetBrains Mono, text-xs, uppercase, muted */}
              <div className="mt-2 text-xs font-mono uppercase text-zinc-400 font-medium tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}
