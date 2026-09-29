import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookMarked, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-28 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Background ambient light */}
      <div
        className="absolute top-1/2 right-1/4 w-[400px] h-[300px] rounded-full blur-[130px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(129, 140, 248, 0.4) 0%, rgba(34, 211, 238, 0.1) 60%, transparent 75%)',
        }}
      />

      {/* Section Header */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <span className="w-2 h-0.5 bg-cyan-400 rounded-full" />
          <span>04 / Background</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Education & Academic Foundation
        </h2>
        <p className="text-slate-400 text-base max-w-xl font-normal">
          Academic milestones highlighting technical fundamentals, mathematical rigor, and engineering coursework.
        </p>
      </div>

      {/* Compact Timeline Cards */}
      <div className="space-y-6">
        {EDUCATION_DATA.map((item, idx) => (
          <div
            key={idx}
            className={`glass-panel rounded-2xl p-6 sm:p-8 border transition-all duration-300 ${
              item.current
                ? 'border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-transparent to-transparent'
                : 'border-white/[0.08] hover:border-white/20'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <GraduationCap className={`w-4 h-4 ${item.current ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="text-xs font-mono text-slate-400">
                    {item.period}
                  </span>
                  {item.current && (
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                      Current Degree
                    </span>
                  )}
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {item.degree}
                </h3>

                <div className="text-sm text-slate-300 flex items-center gap-1.5 mt-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{item.institution}</span>
                </div>
              </div>

              {/* Score / Distinction Badge */}
              <div className="text-left sm:text-right shrink-0">
                <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  Academic Performance
                </div>
                <div className="text-lg font-mono font-bold text-cyan-300">
                  {item.score}
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-5 space-y-2.5">
              {item.highlights.map((highlight, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Coursework list (if present) */}
            {item.coursework && (
              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <BookMarked className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Coursework & Domains:</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-300">
                  {item.coursework.map((course, cIdx) => (
                    <React.Fragment key={course}>
                      <span className="text-slate-300 hover:text-white transition-colors">
                        {course}
                      </span>
                      {cIdx < item.coursework!.length - 1 && (
                        <span className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
