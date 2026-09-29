import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layers, 
  Code2, 
  Layout, 
  Boxes, 
  Wrench,
  Database
} from 'lucide-react';
import {
  SiJavascript,
  SiC,
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiAxios,
  SiChartdotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiLinux,
  SiMongodb,
  SiPostgresql,
  SiFirebase
} from 'react-icons/si';
import { FaJava, FaDatabase, FaCss3Alt, FaAws, FaCode } from 'react-icons/fa';
import SectionTitle from './SectionTitle.jsx';
import { portfolioData } from '../data/portfolio.js';

export default function TechStack() {
  const { techStack } = portfolioData;
  const [activeTab, setActiveTab] = useState('All');

  const tabIcons = {
    All: Layers,
    Languages: Code2,
    Frameworks: Layout,
    Libraries: Boxes,
    Tools: Wrench,
  };

  const renderIcon = (key) => {
    const iconClass = "w-7 h-7 sm:w-8 sm:h-8";
    switch (key) {
      case 'Java':
        return <FaJava className={iconClass} />;
      case 'JavaScript':
        return <SiJavascript className={iconClass} />;
      case 'C':
        return <SiC className={iconClass} />;
      case 'SQL':
        return <FaDatabase className={iconClass} />;
      case 'HTML':
        return <SiHtml5 className={iconClass} />;
      case 'CSS':
        return <FaCss3Alt className={iconClass} />;
      case 'React':
        return <SiReact className={iconClass} />;
      case 'Nodejs':
        return <SiNodedotjs className={iconClass} />;
      case 'Express':
        return <SiExpress className={iconClass} />;
      case 'Tailwind':
        return <SiTailwindcss className={iconClass} />;
      case 'Redux':
        return <SiRedux className={iconClass} />;
      case 'Axios':
        return <SiAxios className={iconClass} />;
      case 'Chartjs':
        return <SiChartdotjs className={iconClass} />;
      case 'Git':
        return <SiGit className={iconClass} />;
      case 'GitHub':
        return <SiGithub className={iconClass} />;
      case 'Docker':
        return <SiDocker className={iconClass} />;
      case 'Postman':
        return <SiPostman className={iconClass} />;
      case 'VSCode':
        return <FaCode className={iconClass} />;
      case 'Linux':
        return <SiLinux className={iconClass} />;
      case 'MongoDB':
        return <SiMongodb className={iconClass} />;
      case 'PostgreSQL':
        return <SiPostgresql className={iconClass} />;
      case 'Firebase':
        return <SiFirebase className={iconClass} />;
      case 'AWS':
        return <FaAws className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  const filteredItems =
    activeTab === 'All'
      ? techStack.items
      : techStack.items.filter((item) => item.category === activeTab);

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={techStack.title}
          subtitle="Battle-tested production toolkit across core languages, modern client frameworks, state libraries, and cloud devops tools."
        />

        {/* Filter tabs: centered pill group with small icons.
            The active tab has a red/15 bg with a red border and red text.
        */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#0b0507] border border-[rgba(255,31,61,0.2)] gap-1 sm:gap-2 flex-wrap justify-center shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            {techStack.categories.map((cat) => {
              const isActive = activeTab === cat.id;
              const Icon = tabIcons[cat.id] || Layers;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[rgba(255,31,61,0.15)] border border-[#ff1f3d] text-[#ff1f3d] shadow-[0_0_12px_rgba(255,31,61,0.25)] font-semibold'
                      : 'text-zinc-400 hover:text-white border border-transparent hover:bg-zinc-900/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid: grid-cols-3 sm:grid-cols-5, gap-4.
            Filtering re-animates the grid with framer-motion AnimatePresence.
            Each tile is a bordered rounded-xl card with the logo icon and a small label below.
            Hover: red glow and slight lift.
        */}
        <motion.div 
          layout 
          className="grid grid-cols-3 sm:grid-cols-5 gap-4 max-w-5xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.name}
                initial={{ opacity: 0, scale: 0.85, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -15 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="cyber-card p-4 sm:p-5 flex flex-col items-center justify-center text-center gap-2.5 rounded-xl border border-[rgba(255,31,61,0.25)] hover:border-[#ff1f3d] hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,31,61,0.35)] transition-all cursor-pointer group bg-[#0b0507]"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-zinc-300 group-hover:text-[#ff1f3d] group-hover:scale-110 transition-all duration-200">
                  {renderIcon(item.iconKey)}
                </div>
                <span className="font-mono text-xs sm:text-sm text-zinc-200 group-hover:text-white transition-colors truncate max-w-full font-medium">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </motion.section>
  );
}
