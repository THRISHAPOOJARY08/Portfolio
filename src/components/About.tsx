import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Cpu, Layers, Sparkles, Binary, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const PILLARS = [
    {
      icon: <Binary className="w-5 h-5 text-cyan-400" />,
      title: 'Algorithmic Problem Solving',
      desc: 'Approaching complexity through structured data models, asymptotic optimization, and clean logic.',
    },
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      title: 'Full-Stack Practicality',
      desc: 'Translating concepts into maintainable software with clean database schemas and intuitive interfaces.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-sky-400" />,
      title: 'Systems & Relational Rigor',
      desc: 'Designing ACID-compliant databases and scalable application state with attention to edge cases.',
    },
  ];

  return (
    <section id="about" className="relative py-28 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Background ambient glow behind About */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.4) 0%, rgba(34, 211, 238, 0.1) 70%, transparent 80%)',
        }}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading and editorial kicker */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span className="w-2 h-0.5 bg-cyan-400 rounded-full" />
            <span>01 / Overview</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            A little about me
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-6 font-normal">
            Engineering software that solves tangible challenges through clear thinking, structured design, and continuous technical curiosity.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>B.E. Computer Science & Engineering candidate</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Strong academic track record: <strong className="text-white">9.18 CGPA</strong></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>Active in competitive programming & project building</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visually interesting glass panel */}
        <div className="lg:col-span-7">
          <div className="relative group">
            {/* Soft border gradient shimmer */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/10 rounded-2xl blur-sm opacity-60 group-hover:opacity-100 transition duration-500" />

            <div className="relative glass-panel rounded-2xl p-6 sm:p-8 space-y-6 text-slate-300 leading-relaxed shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80" />
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    Engineering Profile
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  AIET · 2024–Present
                </span>
              </div>

              {PERSONAL_INFO.bio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Three Pillars Grid */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/[0.08]">
                {PILLARS.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-200"
                  >
                    <div className="mb-2.5">{pillar.icon}</div>
                    <h3 className="text-xs font-semibold text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick recruiter quote */}
              <div className="pt-2 text-xs font-mono text-cyan-300/80 bg-cyan-950/20 border border-cyan-500/15 rounded-xl px-4 py-3">
                <span className="text-cyan-400 font-semibold">Core Focus: </span>
                <span>Applying algorithmic logic, modular backends, and responsive interfaces to build meaningful software solutions.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
