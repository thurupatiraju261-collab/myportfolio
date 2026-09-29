import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolio.js';

function ExperienceCard({ item }) {
  return (
    <div className="cyber-card p-6 sm:p-7 relative overflow-hidden group hover:border-[#ff1f3d] transition-all space-y-4">
      {/* Header: Date range and optional badge */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-1.5 font-mono text-xs text-zinc-400">
          <Calendar className="w-3.5 h-3.5 text-[#ff1f3d]" />
          <span>{item.period}</span>
        </div>

        {item.badge && (
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 text-[#ff1f3d] shadow-[0_0_10px_rgba(255,31,61,0.15)]">
            {item.badge}
          </span>
        )}
      </div>

      {/* Role title and Company */}
      <div className="space-y-1.5">
        <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#ff1f3d] transition-colors leading-snug">
          {item.role}
        </h3>
        <div className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
          <Briefcase className="w-4 h-4 text-[#ff1f3d] shrink-0" />
          <span className="font-medium">{item.company}</span>
        </div>
      </div>

      {/* Description or Bullet List */}
      {item.description && (
        <p className="text-zinc-400 text-sm leading-relaxed">
          {item.description}
        </p>
      )}

      {item.bullets && (
        <ul className="space-y-2 pt-1">
          {item.bullets.map((bullet, bIdx) => (
            <li key={bIdx} className="flex items-start gap-2.5 text-sm text-zinc-400 leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-[#ff1f3d] shrink-0 mt-0.5 drop-shadow-[0_0_4px_#ff1f3d]" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Red-outlined tech tags */}
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

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="Hands-on development experience building production-grade services, distributed event pipelines, and AI backends."
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
            {experience.map((item, idx) => {
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
                    <ExperienceCard item={item} />
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
