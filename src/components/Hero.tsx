import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onConnectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onConnectClick }) => {
  // Staged entrance animation steps (0s - 3s)
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // 0 - 0.5s: Background light appears
    const t0 = setTimeout(() => setStage(1), 100);
    // 0.5 - 1s: Ambient particles visible
    const t1 = setTimeout(() => setStage(2), 600);
    // 1 - 1.5s: "THRISHA" reveals
    const t2 = setTimeout(() => setStage(3), 1100);
    // 1.5 - 2s: Subtitle reveals
    const t3 = setTimeout(() => setStage(4), 1600);
    // 2 - 2.5s: Introduction reveals
    const t4 = setTimeout(() => setStage(5), 2100);
    // 2.5 - 3s: Buttons reveal
    const t5 = setTimeout(() => setStage(6), 2600);

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 overflow-hidden"
    >
      {/* Central hero aura */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] rounded-full blur-[140px] pointer-events-none transition-all duration-1000 ${
          stage >= 1 ? 'opacity-35 scale-100' : 'opacity-0 scale-75'
        }`}
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(56, 189, 248, 0.45) 0%, rgba(129, 140, 248, 0.25) 45%, rgba(6, 182, 212, 0.1) 70%, transparent 80%)',
        }}
      />

      {/* Decorative architectural grid lines */}
      <div
        className={`absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transition-opacity duration-1000 ${
          stage >= 2 ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div
        className={`absolute inset-x-0 bottom-1/4 h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent transition-opacity duration-1000 ${
          stage >= 2 ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle status indicator */}
        <div
          className={`flex items-center gap-2 mb-6 transition-all duration-700 ease-out ${
            stage >= 2
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-3 blur-xs'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-300/90 tracking-wide bg-cyan-950/40 border border-cyan-500/20 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>Alva's Institute of Engineering & Technology</span>
            <span className="text-cyan-500/40">·</span>
            <span className="text-slate-300">CGPA: 9.18</span>
          </div>
        </div>

        {/* Name Title */}
        <div className="relative mb-3">
          <h1
            className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase select-none transition-all duration-1000 ease-out ${
              stage >= 3
                ? 'opacity-100 translate-y-0 filter-none tracking-normal'
                : 'opacity-0 translate-y-8 blur-md tracking-widest'
            }`}
          >
            <span className="bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-[0_4px_30px_rgba(255,255,255,0.15)]">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Underglow bar */}
          <div
            className={`h-[2px] mx-auto rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-1000 delay-300 ${
              stage >= 3 ? 'w-48 sm:w-64 opacity-80' : 'w-0 opacity-0'
            }`}
          />
        </div>

        {/* Subtitle */}
        <div
          className={`mt-4 mb-6 transition-all duration-700 ease-out ${
            stage >= 4
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-5 blur-xs'
          }`}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-wide text-slate-200">
            <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.role}</span>
          </h2>
        </div>

        {/* Stylistic Introduction */}
        <p
          className={`max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed font-normal mb-10 transition-all duration-700 ease-out ${
            stage >= 5
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-5 blur-xs'
          }`}
        >
          "{PERSONAL_INFO.tagline}"
        </p>

        {/* Action Buttons & Social Links */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 sm:gap-6 transition-all duration-700 ease-out ${
            stage >= 6
              ? 'opacity-100 translate-y-0 filter-none'
              : 'opacity-0 translate-y-6 blur-xs'
          }`}
        >
          <div className="flex items-center gap-3">
            {/* Primary View My Work CTA */}
            <button
              onClick={onExploreClick}
              className="group relative px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-white via-cyan-50 to-slate-100 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </span>
            </button>

            {/* Secondary Connect CTA */}
            <button
              onClick={onConnectClick}
              className="px-6 py-3 rounded-xl font-medium text-sm text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/30 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              Let's Connect
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/[0.06]">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              aria-label="GitHub Profile"
              title="Thrisha on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/10 rounded-lg transition-all"
              aria-label="LinkedIn Profile"
              title="Thrisha on LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-white/10 rounded-lg transition-all"
              aria-label="Email Thrisha"
              title="Email Thrisha"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Clean unboxed metadata strip (zero-pill discipline) */}
        <div
          className={`mt-14 pt-8 border-t border-white/[0.06] w-full flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono transition-all duration-700 ${
            stage >= 6 ? 'opacity-80' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Open for 2025/2026 Internships</span>
          </div>
          <span className="text-white/20">/</span>
          <span>Core Focus: Systems & Algorithms</span>
          <span className="text-white/20">/</span>
          <span>B.E. Computer Science & Engineering</span>
        </div>
      </div>

      {/* Subtle bottom scroll prompt */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-slate-500 uppercase tracking-widest transition-opacity duration-1000 ${
          stage >= 6 ? 'opacity-60' : 'opacity-0'
        }`}
      >
        <span className="tracking-widest">Scroll to explore</span>
        <div className="w-4 h-7 rounded-full border border-slate-600/40 p-1 flex justify-center">
          <div className="w-1 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
