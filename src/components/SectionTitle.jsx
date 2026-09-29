import React from 'react';

/**
 * Reusable Section Title Component
 * - Centered, font-heading, text-4xl md:text-5xl font-bold
 * - Last word is red (#ff1f3d), the rest is white
 * - Short red underline bar (w-16 h-1 rounded-full) with a small red dot in the center
 * - Optional muted subtitle (max-w-2xl, text-zinc-400)
 */
export default function SectionTitle({ title, subtitle, className = '' }) {
  if (!title) return null;

  const words = title.trim().split(/\s+/);
  const lastWord = words.pop();
  const restWords = words.join(' ');

  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white">
        {restWords && <span>{restWords} </span>}
        <span className="text-[#ff1f3d] drop-shadow-[0_0_16px_rgba(255,31,61,0.4)]">
          {lastWord}
        </span>
      </h2>

      {/* Red underline bar with centered glowing dot */}
      <div className="flex items-center justify-center mt-4">
        <div className="relative w-16 h-1 bg-[#ff1f3d] rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(255,31,61,0.5)]">
          <span className="absolute w-2.5 h-2.5 rounded-full bg-[#ff1f3d] ring-2 ring-[#050203] shadow-[0_0_8px_#ff1f3d]" />
        </div>
      </div>

      {subtitle && (
        <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
