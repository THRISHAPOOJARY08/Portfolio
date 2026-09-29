import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Database, Layers, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#05070c]/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#0b0e17] border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-slate-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] flex items-start justify-between bg-gradient-to-b from-white/[0.04] to-transparent">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
              <span className="font-semibold text-white/50">{project.number}</span>
              <span>/</span>
              <span>{project.category}</span>
            </div>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-display font-bold text-white">
              {project.name}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Case Study"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 scrollbar-thin">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Project Overview
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-3">
              Core Technical Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-relaxed">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Engineering Decisions */}
          <div className="p-4 sm:p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <Layers className="w-4 h-4" />
              <span className="font-semibold uppercase">System Architecture & Logic</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
              {project.architecture}
            </p>
          </div>

          {/* Challenges & Solutions */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Technical Considerations & Edge Cases
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {project.challenges}
            </p>
          </div>

          {/* Technologies Used (Zero-pill text tags with separators) */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider mb-2">
              Stack & Technologies
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-300">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-white">
                    {tech}
                  </span>
                  {idx < project.technologies.length - 1 && <span className="text-slate-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-white/[0.08] bg-[#07090f] flex items-center justify-between">
          <div className="text-xs font-mono text-slate-400">
            Author: Thrisha · Alva's Institute of Eng & Tech
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/THRISHAPOOJARY08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-white text-slate-900 hover:bg-cyan-100 transition-colors cursor-pointer"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
