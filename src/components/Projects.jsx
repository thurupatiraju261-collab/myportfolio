import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolio.js';

function ProjectScreenshot({ previewType, title }) {
  // 16:9 mock technical UI screenshots with dark cybernetic themes
  switch (previewType) {
    case 'restaurant':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="restGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1a080c" />
              <stop offset="100%" stopColor="#080204" />
            </linearGradient>
          </defs>
          <rect width="640" height="360" fill="url(#restGrad)" />
          {/* Header Bar */}
          <rect x="20" y="20" width="600" height="36" rx="6" fill="#120609" stroke="#ff1f3d" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="42" cy="38" r="4" fill="#ff1f3d" />
          <circle cx="56" cy="38" r="4" fill="#52525b" />
          <circle cx="70" cy="38" r="4" fill="#52525b" />
          <text x="94" y="42" fill="#e4e4e7" fontSize="11" fontFamily="monospace" fontWeight="bold">POS_TERMINAL // KITCHEN_DISPLAY_LIVE</text>
          <rect x="520" y="28" width="85" height="20" rx="4" fill="#ff1f3d" fillOpacity="0.2" stroke="#ff1f3d" strokeWidth="1" />
          <text x="532" y="42" fill="#ff1f3d" fontSize="9" fontFamily="monospace" fontWeight="bold">ACTIVE: 12 TABLES</text>
          
          {/* Table Grid Mock */}
          <rect x="20" y="70" width="135" height="90" rx="8" fill="#1c0a0f" stroke="#ff1f3d" strokeWidth="1.5" />
          <text x="32" y="94" fill="#ffffff" fontSize="13" fontFamily="sans-serif" fontWeight="bold">Table 01</text>
          <text x="32" y="112" fill="#ff1f3d" fontSize="10" fontFamily="monospace">ORDER #4092</text>
          <rect x="32" y="125" width="80" height="6" rx="3" fill="#ff1f3d" fillOpacity="0.8" />
          <rect x="32" y="137" width="50" height="6" rx="3" fill="#3f3f46" />

          <rect x="175" y="70" width="135" height="90" rx="8" fill="#120609" stroke="#3f3f46" strokeWidth="1" />
          <text x="187" y="94" fill="#a1a1aa" fontSize="13" fontFamily="sans-serif" fontWeight="bold">Table 02</text>
          <text x="187" y="112" fill="#71717a" fontSize="10" fontFamily="monospace">AVAILABLE</text>

          <rect x="330" y="70" width="135" height="90" rx="8" fill="#1c0a0f" stroke="#ff1f3d" strokeWidth="1.5" />
          <text x="342" y="94" fill="#ffffff" fontSize="13" fontFamily="sans-serif" fontWeight="bold">Table 03</text>
          <text x="342" y="112" fill="#ff1f3d" fontSize="10" fontFamily="monospace">BILLING PENDING</text>
          <rect x="342" y="125" width="100" height="6" rx="3" fill="#ff1f3d" />

          <rect x="485" y="70" width="135" height="90" rx="8" fill="#120609" stroke="#3f3f46" strokeWidth="1" />
          <text x="497" y="94" fill="#a1a1aa" fontSize="13" fontFamily="sans-serif" fontWeight="bold">Table 04</text>
          <text x="497" y="112" fill="#71717a" fontSize="10" fontFamily="monospace">RESERVED</text>

          {/* Lower Ticket Queue */}
          <rect x="20" y="180" width="600" height="155" rx="8" fill="#120609" stroke="#27272a" strokeWidth="1" />
          <rect x="35" y="200" width="170" height="115" rx="6" fill="#1f090e" stroke="#ff1f3d" strokeWidth="1" />
          <text x="48" y="222" fill="#ffffff" fontSize="11" fontWeight="bold">Kitchen Order #104</text>
          <text x="48" y="240" fill="#a1a1aa" fontSize="10">2x Truffle Risotto</text>
          <text x="48" y="258" fill="#a1a1aa" fontSize="10">1x Smoked Salmon</text>
          <rect x="48" y="280" width="85" height="18" rx="4" fill="#ff1f3d" />
          <text x="56" y="293" fill="#ffffff" fontSize="9" fontWeight="bold">PREPARING</text>

          <rect x="230" y="200" width="170" height="115" rx="6" fill="#17070b" stroke="#3f3f46" strokeWidth="1" />
          <text x="243" y="222" fill="#ffffff" fontSize="11" fontWeight="bold">Kitchen Order #105</text>
          <text x="243" y="240" fill="#a1a1aa" fontSize="10">3x Artisan Margherita</text>
          <rect x="243" y="280" width="80" height="18" rx="4" fill="#27272a" />
          <text x="251" y="293" fill="#a1a1aa" fontSize="9" fontWeight="bold">QUEUED</text>

          <rect x="425" y="200" width="180" height="115" rx="6" fill="#17070b" stroke="#3f3f46" strokeWidth="1" />
          <text x="438" y="222" fill="#ffffff" fontSize="11" fontWeight="bold">Analytics Summary</text>
          <text x="438" y="244" fill="#ff1f3d" fontSize="16" fontWeight="bold">$4,820.50</text>
          <text x="438" y="262" fill="#71717a" fontSize="10">TODAY'S REVENUE</text>
        </svg>
      );

    case 'resume':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#0b0306" />
          <circle cx="160" cy="180" r="90" fill="#19070d" stroke="#ff1f3d" strokeWidth="3" strokeDasharray="565" strokeDashoffset="120" />
          <text x="160" y="175" textAnchor="middle" fill="#ffffff" fontSize="36" fontWeight="bold" fontFamily="sans-serif">94%</text>
          <text x="160" y="205" textAnchor="middle" fill="#ff1f3d" fontSize="11" fontFamily="monospace" fontWeight="bold">MATCH SCORE</text>
          
          {/* Analysis Bars */}
          <rect x="300" y="80" width="300" height="18" rx="4" fill="#27272a" />
          <rect x="300" y="80" width="280" height="18" rx="4" fill="#ff1f3d" />
          <text x="300" y="70" fill="#e4e4e7" fontSize="12" fontWeight="bold">Keyword Relevance (NLP)</text>

          <rect x="300" y="140" width="300" height="18" rx="4" fill="#27272a" />
          <rect x="300" y="140" width="245" height="18" rx="4" fill="#ff1f3d" fillOpacity="0.8" />
          <text x="300" y="130" fill="#e4e4e7" fontSize="12" fontWeight="bold">Technical Stack Alignment</text>

          <rect x="300" y="200" width="300" height="18" rx="4" fill="#27272a" />
          <rect x="300" y="200" width="260" height="18" rx="4" fill="#ff1f3d" fillOpacity="0.8" />
          <text x="300" y="190" fill="#e4e4e7" fontSize="12" fontWeight="bold">Experience & Metric Density</text>

          <rect x="300" y="260" width="300" height="50" rx="6" fill="#17060a" stroke="#ff1f3d" strokeWidth="1" strokeOpacity="0.4" />
          <text x="315" y="285" fill="#ffffff" fontSize="11" fontWeight="bold">ATS RECOMMENDATION: HIGH PRIORITY</text>
          <text x="315" y="300" fill="#a1a1aa" fontSize="10">Candidate matches 18/19 required competencies.</text>
        </svg>
      );

    case 'finance':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#080204" />
          {/* Grid lines */}
          <line x1="40" y1="80" x2="600" y2="80" stroke="#27272a" strokeWidth="1" strokeDasharray="4" />
          <line x1="40" y1="160" x2="600" y2="160" stroke="#27272a" strokeWidth="1" strokeDasharray="4" />
          <line x1="40" y1="240" x2="600" y2="240" stroke="#27272a" strokeWidth="1" strokeDasharray="4" />

          {/* Glowing Red Curve */}
          <path
            d="M 50 250 Q 140 220, 220 180 T 380 130 T 520 80 T 600 60"
            fill="none"
            stroke="#ff1f3d"
            strokeWidth="3.5"
            style={{ filter: 'drop-shadow(0 0 10px #ff1f3d)' }}
          />
          <path
            d="M 50 250 Q 140 220, 220 180 T 380 130 T 520 80 T 600 60 L 600 290 L 50 290 Z"
            fill="#ff1f3d"
            fillOpacity="0.08"
          />

          {/* Metric Cards Top */}
          <rect x="50" y="30" width="160" height="50" rx="6" fill="#160509" stroke="#ff1f3d" strokeWidth="1" />
          <text x="65" y="50" fill="#71717a" fontSize="10" fontFamily="monospace">PORTFOLIO VALUE</text>
          <text x="65" y="70" fill="#ffffff" fontSize="16" fontWeight="bold">$84,320.40</text>

          <rect x="230" y="30" width="140" height="50" rx="6" fill="#120407" stroke="#27272a" strokeWidth="1" />
          <text x="245" y="50" fill="#71717a" fontSize="10" fontFamily="monospace">MONTHLY GAIN</text>
          <text x="245" y="70" fill="#34d399" fontSize="16" fontWeight="bold">+18.4%</text>

          {/* Bottom Table */}
          <rect x="50" y="280" width="550" height="50" rx="6" fill="#120407" stroke="#27272a" strokeWidth="1" />
          <text x="70" y="310" fill="#e4e4e7" fontSize="12" fontWeight="bold">Recent Transactions (Encrypted JWT Session)</text>
          <circle cx="560" cy="305" r="4" fill="#34d399" />
        </svg>
      );

    case 'legal':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#080204" />
          <rect x="40" y="40" width="260" height="280" rx="8" fill="#120407" stroke="#3f3f46" strokeWidth="1" />
          <rect x="55" y="60" width="140" height="10" rx="2" fill="#ff1f3d" />
          <line x1="55" y1="90" x2="270" y2="90" stroke="#3f3f46" strokeWidth="2" />
          <line x1="55" y1="110" x2="270" y2="110" stroke="#3f3f46" strokeWidth="2" />
          <line x1="55" y1="130" x2="240" y2="130" stroke="#ff1f3d" strokeWidth="2" />
          <line x1="55" y1="150" x2="270" y2="150" stroke="#3f3f46" strokeWidth="2" />
          <line x1="55" y1="170" x2="210" y2="170" stroke="#3f3f46" strokeWidth="2" />
          
          <rect x="330" y="40" width="270" height="280" rx="8" fill="#19070c" stroke="#ff1f3d" strokeWidth="1.5" />
          <text x="350" y="70" fill="#ffffff" fontSize="13" fontWeight="bold">AI Legal Breakdown</text>
          <text x="350" y="90" fill="#ff1f3d" fontSize="10" fontFamily="monospace">OPENAI_GPT4_LEGAL_AGENT</text>
          <rect x="350" y="110" width="230" height="85" rx="6" fill="#0f0306" stroke="#ff1f3d" strokeWidth="1" strokeOpacity="0.3" />
          <text x="360" y="130" fill="#e4e4e7" fontSize="10">"Clause 4.2 indemnification is</text>
          <text x="360" y="146" fill="#e4e4e7" fontSize="10">unbounded. Recommend adding</text>
          <text x="360" y="162" fill="#e4e4e7" fontSize="10">liability cap equal to 12 months fee."</text>
          
          <rect x="350" y="210" width="230" height="30" rx="4" fill="#ff1f3d" fillOpacity="0.2" stroke="#ff1f3d" strokeWidth="1" />
          <text x="365" y="230" fill="#ff1f3d" fontSize="11" fontWeight="bold">RISK SCORE: LOW COMPLIANCE RISK</text>
        </svg>
      );

    case 'repo':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#070204" />
          {/* Header */}
          <rect x="40" y="30" width="560" height="60" rx="8" fill="#140508" stroke="#ff1f3d" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="75" cy="60" r="16" fill="#27272a" />
          <text x="105" y="56" fill="#ffffff" fontSize="14" fontWeight="bold">github.com/developer</text>
          <text x="105" y="74" fill="#a1a1aa" fontSize="10" fontFamily="monospace">84 Repositories · 1,420 Contributions</text>

          {/* Activity Heatmap Grid Mock */}
          <rect x="40" y="110" width="560" height="130" rx="8" fill="#100407" stroke="#27272a" strokeWidth="1" />
          <text x="60" y="135" fill="#a1a1aa" fontSize="11" fontFamily="monospace">CONTRIBUTION GRAPH (2026)</text>
          
          {/* Grid squares */}
          <g transform="translate(60, 150)">
            {[0, 1, 2, 3, 4, 5, 6].map((row) => (
              <g key={row} transform={`translate(0, ${row * 10})`}>
                {[...Array(38)].map((_, col) => {
                  const intensity = (row * col) % 5;
                  const colors = ['#18181b', '#3f171d', '#701a27', '#b3152c', '#ff1f3d'];
                  return (
                    <rect
                      key={col}
                      x={col * 13}
                      y={0}
                      width="9"
                      height="7"
                      rx="1.5"
                      fill={colors[intensity]}
                    />
                  );
                })}
              </g>
            ))}
          </g>

          {/* Bottom stats */}
          <rect x="40" y="260" width="170" height="65" rx="6" fill="#140508" stroke="#ff1f3d" strokeWidth="1" />
          <text x="55" y="284" fill="#71717a" fontSize="10" fontFamily="monospace">COMMITS THIS YEAR</text>
          <text x="55" y="310" fill="#ff1f3d" fontSize="18" fontWeight="bold">2,480</text>

          <rect x="235" y="260" width="170" height="65" rx="6" fill="#140508" stroke="#27272a" strokeWidth="1" />
          <text x="250" y="284" fill="#71717a" fontSize="10" fontFamily="monospace">STARS EARNED</text>
          <text x="250" y="310" fill="#ffffff" fontSize="18" fontWeight="bold">384</text>

          <rect x="430" y="260" width="170" height="65" rx="6" fill="#140508" stroke="#27272a" strokeWidth="1" />
          <text x="445" y="284" fill="#71717a" fontSize="10" fontFamily="monospace">PULL REQUESTS</text>
          <text x="445" y="310" fill="#ffffff" fontSize="18" fontWeight="bold">92</text>
        </svg>
      );

    case 'auth':
      return (
        <svg viewBox="0 0 640 360" className="w-full h-full object-cover">
          <rect width="640" height="360" fill="#070204" />
          <circle cx="320" cy="150" r="75" fill="#140508" stroke="#ff1f3d" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 12px rgba(255,31,61,0.5))' }} />
          {/* Shield */}
          <path
            d="M 320 100 L 355 115 L 355 155 C 355 180, 320 200, 320 200 C 320 200, 285 180, 285 155 L 285 115 Z"
            fill="#ff1f3d"
            fillOpacity="0.2"
            stroke="#ff1f3d"
            strokeWidth="3"
          />
          <circle cx="320" cy="145" r="7" fill="#ffffff" />
          <line x1="320" y1="152" x2="320" y2="165" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

          {/* Terminal Banner */}
          <rect x="80" y="245" width="480" height="65" rx="8" fill="#120407" stroke="#ff1f3d" strokeWidth="1" strokeOpacity="0.5" />
          <text x="105" y="270" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="monospace">JWT_TOKEN_SIGNING // RS256 ALGORITHM</text>
          <text x="105" y="292" fill="#a1a1aa" fontSize="10" fontFamily="monospace">Roles: [ADMIN, SDE_POD_LEAD] · Exp: 3600s · Refresh: Active</text>
        </svg>
      );

    default:
      return (
        <div className="w-full h-full bg-[#120407] flex items-center justify-center text-[#ff1f3d]">
          <Sparkles className="w-12 h-12" />
        </div>
      );
  }
}

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Projects"
          subtitle="Production-grade full-stack applications, AI intelligence tools, and developer telemetry architectures."
        />

        {/* Grid: 2 columns on desktop, 1 on mobile, 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="cyber-card overflow-hidden group hover:border-[#ff1f3d] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,31,61,0.35)] transition-all duration-300 flex flex-col justify-between border border-[rgba(255,31,61,0.25)]"
            >
              {/* 16:9 screenshot at the top with dark overlay and hover zoom */}
              <div className="relative aspect-video w-full overflow-hidden bg-black/60 border-b border-[rgba(255,31,61,0.2)]">
                {/* Visual mock screenshot */}
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out">
                  <ProjectScreenshot
                    previewType={project.previewType}
                    title={project.title}
                  />
                </div>

                {/* Dark overlay with subtle gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0b0507] via-transparent to-black/30 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Small red "Featured" badge at top-right of the image on the first two cards */}
                {project.featured && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#ff1f3d] text-white text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_14px_#ff1f3d] z-10 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff1f3d] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags + Action buttons row */}
                <div className="pt-3 border-t border-[rgba(255,31,61,0.15)] flex flex-wrap items-center justify-between gap-3">
                  {/* Small red-outlined tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-xs px-2.5 py-1 rounded bg-[#050203] border border-[rgba(255,31,61,0.3)] text-zinc-300 group-hover:border-[rgba(255,31,61,0.5)] transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub + ExternalLink icon buttons at bottom right */}
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg border border-[rgba(255,31,61,0.3)] text-zinc-400 hover:text-white hover:border-[#ff1f3d] hover:shadow-[0_0_12px_rgba(255,31,61,0.35)] transition-all bg-[#050203]"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg border border-[rgba(255,31,61,0.3)] text-zinc-400 hover:text-white hover:border-[#ff1f3d] hover:shadow-[0_0_12px_rgba(255,31,61,0.35)] transition-all bg-[#050203]"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
