import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS, EDUCATION_DATA } from '../data/portfolioData';
import { X, Printer, Mail, MapPin, ExternalLink, GraduationCap, CheckCircle } from 'lucide-react';

interface ResumeOverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeOverviewModal: React.FC<ResumeOverviewModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#05070c]/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-3xl bg-[#0b0e17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/[0.08] flex items-center justify-between bg-gradient-to-r from-white/[0.03] to-transparent">
          <div>
            <h3 className="text-xl font-display font-bold text-white">
              Curated Resume Overview
            </h3>
            <p className="text-xs font-mono text-slate-400">
              Verified Candidate Credentials · Recruiter Snapshot
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              aria-label="Print or save as PDF"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-300 text-xs sm:text-sm font-sans scrollbar-thin">
          {/* Header Profile */}
          <div className="pb-5 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-2xl font-bold font-display text-white">
                {PERSONAL_INFO.name}
              </h4>
              <p className="text-cyan-400 font-medium">
                {PERSONAL_INFO.role}
              </p>
            </div>
            <div className="space-y-1 text-slate-400 font-mono text-xs">
              <div>Email: <span className="text-slate-200">{PERSONAL_INFO.email}</span></div>
              <div>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.github}</a></div>
              <div>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.linkedin}</a></div>
              <div>Affiliation: {PERSONAL_INFO.institution}</div>
              <div>Current CGPA: {PERSONAL_INFO.cgpa}</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3 font-semibold">
              Education
            </h5>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex justify-between items-baseline font-semibold text-white">
                    <span>{edu.degree}</span>
                    <span className="text-xs font-mono text-cyan-300">{edu.score}</span>
                  </div>
                  <div className="text-slate-400 text-xs mt-0.5">
                    {edu.institution} · {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2 font-semibold">
              Technical Competencies
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
                  <span className="text-white font-medium block text-xs">{cat.title}:</span>
                  <span className="text-slate-400 font-mono text-xs">
                    {cat.skills.map(s => s.name).join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h5 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-3 font-semibold">
              Highlighted Projects
            </h5>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                  <div className="flex justify-between items-center text-white font-semibold">
                    <span>{proj.name}</span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {proj.technologies.slice(0, 3).join(' · ')}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs mt-1">
                    {proj.overview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/[0.08] bg-[#07090f] flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Prepared for Internship & Placement Evaluation</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white text-slate-950 font-semibold cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
