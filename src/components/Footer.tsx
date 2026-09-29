import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 border-t border-white/[0.08] bg-[#05070c] z-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300">
            <Code2 className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-xs font-display font-bold text-white tracking-wider">
              {PERSONAL_INFO.name.toUpperCase()}
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              Computer Science & Engineering · AIET
            </div>
          </div>
        </div>

        <div className="text-xs font-mono text-slate-500 text-center">
          <span>Designed with intentional minimalism & clean software craftsmanship</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
