import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Users, 
  RefreshCw, 
  MessageCircle, 
  BarChart3, 
  Rocket 
} from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolio.js';

export default function SoftSkills() {
  const { softSkills } = portfolioData;

  const iconMap = {
    Lightbulb: Lightbulb,
    Users: Users,
    RefreshCw: RefreshCw,
    MessageCircle: MessageCircle,
    BarChart3: BarChart3,
    Rocket: Rocket,
  };

  return (
    <motion.section
      id="softskills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={softSkills.title}
          subtitle={softSkills.subtitle}
        />

        {/* Grid: 3 columns x 2 rows on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {softSkills.items.map((item, index) => {
            const Icon = iconMap[item.iconName] || Lightbulb;

            return (
              <div
                key={index}
                className="cyber-card p-6 sm:p-8 text-center flex flex-col items-center justify-start border border-[rgba(255,31,61,0.25)] hover:border-[#ff1f3d] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,31,61,0.35)] transition-all duration-300 group"
              >
                {/* Red Lucide icon in a soft red circle */}
                <div className="w-14 h-14 rounded-full bg-[#ff1f3d]/10 border border-[#ff1f3d]/30 flex items-center justify-center text-[#ff1f3d] mx-auto mb-5 group-hover:scale-110 group-hover:border-[#ff1f3d] group-hover:shadow-[0_0_18px_rgba(255,31,61,0.45)] transition-all shrink-0">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title (white, font-bold) */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#ff1f3d] transition-colors mb-3">
                  {item.title}
                </h3>

                {/* Muted description */}
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
