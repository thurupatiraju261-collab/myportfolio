import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolio.js';

function ScoreRing({ score, unit, percentage, isInView }) {
  const size = 76;
  const strokeWidth = 5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const targetOffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center shrink-0">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255, 31, 61, 0.15)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Animated fill ring */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#ff1f3d"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: isInView ? targetOffset : circumference }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          strokeLinecap="round"
          fill="transparent"
          style={{
            filter: 'drop-shadow(0 0 6px rgba(255, 31, 61, 0.5))',
          }}
        />
      </svg>
      {/* Centered value & unit */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="font-heading font-bold text-sm text-white tracking-tight leading-none">
          {score}
        </span>
        <span className="text-[10px] font-mono text-[#ff1f3d] uppercase tracking-wider font-semibold mt-1 leading-none">
          {unit}
        </span>
      </div>
    </div>
  );
}

function EducationCard({ item }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <div
      ref={cardRef}
      className="cyber-card p-6 sm:p-7 relative overflow-hidden group hover:border-[#ff1f3d] transition-all space-y-4"
    >
      {/* Header: Year range and small pill tag */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <span className="font-mono text-xs text-zinc-400 tracking-wide font-medium">
          {item.year}
        </span>
        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 text-[#ff1f3d] shadow-[0_0_10px_rgba(255,31,61,0.15)]">
          {item.statusTag}
        </span>
      </div>

      {/* Main Row: Degree/Institution & Circular SVG progress ring */}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1.5 min-w-0 flex-1">
          <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#ff1f3d] transition-colors leading-snug">
            {item.degree}
          </h3>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
            <School className="w-4 h-4 text-[#ff1f3d] shrink-0" />
            <span className="truncate">{item.institution}</span>
          </div>
        </div>

        {/* Circular SVG progress ring in red showing the score */}
        <ScoreRing
          score={item.score}
          unit={item.unit}
          percentage={item.percentage}
          isInView={isInView}
        />
      </div>

      {/* One-line description (muted) */}
      <p className="text-zinc-400 text-sm leading-relaxed">
        {item.description}
      </p>

      {/* Small red-outlined skill tags */}
      <div className="pt-2 border-t border-[rgba(255,31,61,0.15)] flex flex-wrap gap-1.5">
        {item.tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="text-xs font-mono px-2.5 py-1 rounded bg-[#050203] border border-[rgba(255,31,61,0.3)] text-zinc-300 group-hover:border-[rgba(255,31,61,0.5)] transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Education() {
  const { education } = portfolioData;

  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Education"
          subtitle="Academic milestones, rigorous technical foundations, and specialized computer science credentials."
        />

        {/* Timeline Container */}
        <div className="relative mt-12 sm:mt-16">
          
          {/* Vertical red timeline line (centered on desktop, left-aligned on mobile) */}
          <div
            className="absolute top-4 bottom-4 left-4 md:left-1/2 w-0.5 bg-gradient-to-b from-[#ff1f3d] via-[rgba(255,31,61,0.5)] to-[rgba(255,31,61,0.15)] md:-translate-x-1/2 shadow-[0_0_12px_rgba(255,31,61,0.5)] pointer-events-none"
            aria-hidden="true"
          />

          {/* Alternating Cards Grid */}
          <div className="space-y-10 md:space-y-14">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex items-center ${
                    isEven ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Desktop timeline circular node (centered on the line) */}
                  <div
                    className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20 w-5 h-5 rounded-full border-2 border-[#ff1f3d] bg-[#050203] items-center justify-center shadow-[0_0_12px_#ff1f3d]"
                    aria-hidden="true"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff1f3d]" />
                  </div>

                  {/* Mobile timeline circular node (aligned on mobile left line) */}
                  <div
                    className="md:hidden absolute left-4 top-8 -translate-x-1/2 z-20 w-4 h-4 rounded-full border-2 border-[#ff1f3d] bg-[#050203] items-center justify-center shadow-[0_0_10px_#ff1f3d]"
                    aria-hidden="true"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff1f3d]" />
                  </div>

                  {/* Card wrapper (stacked on mobile with left padding, alternating left/right on desktop) */}
                  <div
                    className={`w-full pl-10 md:pl-0 md:w-[calc(50%-2.5rem)] ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <EducationCard item={item} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </motion.section>
  );
}
