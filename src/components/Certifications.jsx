import React from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolio.js';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <motion.section
      id="certs"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Certifications"
          subtitle="Verified technical credentials and industry-recognized domain certifications."
        />

        {/* Grid of 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cyber-card p-6 sm:p-7 flex flex-col justify-between border border-[rgba(255,31,61,0.25)] hover:border-[#ff1f3d] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,31,61,0.35)] transition-all duration-300 group"
            >
              <div>
                {/* Award icon in a red-tinted square */}
                <div className="w-11 h-11 rounded-lg bg-[#ff1f3d]/10 border border-[#ff1f3d]/40 flex items-center justify-center text-[#ff1f3d] mb-5 shadow-[0_0_12px_rgba(255,31,61,0.25)] group-hover:scale-105 group-hover:border-[#ff1f3d] transition-all shrink-0">
                  <Award className="w-5 h-5" />
                </div>

                {/* Name */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-[#ff1f3d] transition-colors leading-snug mb-2">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <p className="text-zinc-400 text-sm font-medium mb-1">
                  {cert.issuer}
                </p>

                {/* Year */}
                <span className="font-mono text-xs text-zinc-500 block mb-4">
                  Issued: {cert.year}
                </span>
              </div>

              {/* View Certificate link */}
              <div className="pt-3 border-t border-[rgba(255,31,61,0.15)]">
                <a
                  href={cert.link}
                  className="text-xs font-mono text-[#ff1f3d] hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium group/link"
                >
                  <span>View Certificate</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
