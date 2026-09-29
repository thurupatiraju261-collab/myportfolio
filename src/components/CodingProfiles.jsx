import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolio.js';

export default function CodingProfiles() {
  const { codingProfiles } = portfolioData;

  const iconMap = {
    Code2: Code2,
    BookOpen: BookOpen,
  };

  return (
    <motion.section
      id="profiles"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={codingProfiles.title}
          subtitle={codingProfiles.subtitle}
        />

        {/* Two centered cards in a grid (md:grid-cols-2, max-w-4xl, gap-6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 items-stretch">
          {codingProfiles.profiles.map((profile, idx) => {
            const Icon = iconMap[profile.iconName] || Code2;

            return (
              <div
                key={idx}
                className="cyber-card p-6 sm:p-8 flex flex-col justify-between border border-[rgba(255,31,61,0.25)] hover:border-[#ff1f3d] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,31,61,0.35)] transition-all duration-300 group"
              >
                <div>
                  {/* Header: Red-tinted icon square and Platform Name */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-11 h-11 rounded-lg bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 flex items-center justify-center text-[#ff1f3d] shadow-[0_0_14px_rgba(255,31,61,0.25)] group-hover:scale-105 group-hover:border-[#ff1f3d] transition-transform shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff1f3d] transition-colors">
                        {profile.platform}
                      </h3>
                      <span className="font-mono text-xs text-zinc-500">
                        Competitive Coding
                      </span>
                    </div>
                  </div>

                  {/* 2 Mini Stats */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-[#050203] border border-[rgba(255,31,61,0.15)] mb-5">
                    {profile.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="space-y-0.5">
                        <span className="block font-mono text-[11px] uppercase text-zinc-500 font-medium tracking-wider">
                          {stat.label}
                        </span>
                        <span className="font-heading font-bold text-lg sm:text-xl text-[#ff1f3d] tracking-tight drop-shadow-[0_0_8px_rgba(255,31,61,0.3)]">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Text description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {profile.text}
                  </p>
                </div>

                {/* Button: "View Profile ↗" */}
                <div className="pt-2 border-t border-[rgba(255,31,61,0.15)]">
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#ff1f3d] text-[#ff1f3d] hover:bg-[#ff1f3d]/10 hover:shadow-[0_0_20px_rgba(255,31,61,0.35)] transition-all font-medium text-sm"
                  >
                    <span>View Profile</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
