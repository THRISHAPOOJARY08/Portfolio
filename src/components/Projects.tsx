import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { FarmIQVisual } from './project-visuals/FarmIQVisual';
import { ProductManagementVisual } from './project-visuals/ProductManagementVisual';
import { AttendanceAnalyzerVisual } from './project-visuals/AttendanceAnalyzerVisual';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, BookOpen, Layers, Terminal } from 'lucide-react';

interface ProjectsProps {
  onOpenContact: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onOpenContact }) => {
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const renderProjectVisual = (id: string) => {
    switch (id) {
      case 'farmiq':
        return <FarmIQVisual />;
      case 'product-management-system':
        return <ProductManagementVisual />;
      case 'student-attendance-analyzer':
        return <AttendanceAnalyzerVisual />;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="relative py-28 px-4 max-w-6xl mx-auto scroll-mt-20">
      {/* Background ambient glow */}
      <div
        className="absolute top-1/4 left-1/3 w-[600px] h-[400px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.2) 50%, transparent 80%)',
        }}
      />

      {/* Section Header */}
      <div className="mb-20">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <span className="w-2 h-0.5 bg-cyan-400 rounded-full" />
          <span>03 / Featured Work</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
              Selected Engineering Projects
            </h2>
            <p className="text-slate-400 text-base max-w-xl font-normal">
              Practical software systems addressing agricultural intelligence, relational inventory scalability, and predictive academic metrics.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 border border-white/10 px-3.5 py-1.5 rounded-lg bg-white/[0.02]">
            3 Featured Case Studies
          </div>
        </div>
      </div>

      {/* Editorial Case Study Panels */}
      <div className="space-y-24">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 1;

          // Motion pattern classes based on requirement:
          // Project 01: Fade + upward movement
          // Project 02: Horizontal reveal
          // Project 03: Scale + blur-to-sharp
          const motionStyle =
            index === 0
              ? 'transition-all duration-700 ease-out hover:-translate-y-1'
              : index === 1
              ? 'transition-all duration-700 ease-out hover:translate-x-1'
              : 'transition-all duration-700 ease-out hover:scale-[1.01]';

          return (
            <article
              key={project.id}
              data-cursor="project"
              className={`relative glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-2xl group ${motionStyle}`}
            >
              {/* Subtle top border glow line */}
              <div
                className="absolute top-0 inset-x-12 h-px opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
                }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Text Content Column */}
                <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div>
                    {/* Project Number & Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-3xl sm:text-4xl font-extrabold text-white/20 group-hover:text-cyan-400/80 transition-colors">
                        {project.number}
                      </span>
                      <span className="text-white/20">/</span>
                      <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Project Name */}
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                      {project.name}
                    </h3>

                    {/* Tagline */}
                    <div className="text-xs sm:text-sm font-mono text-cyan-400 mb-4">
                      {project.tagline}
                    </div>

                    {/* Short Description */}
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.overview}
                    </p>

                    {/* Tech Stack Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-slate-400 mb-8 pb-6 border-b border-white/[0.08]">
                      <span className="text-slate-500">Built with:</span>
                      {project.technologies.map((tech, i) => (
                        <React.Fragment key={tech}>
                          <span className="text-slate-200 hover:text-cyan-300 transition-colors">
                            {tech}
                          </span>
                          {i < project.technologies.length - 1 && (
                            <span className="text-slate-600">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Metrics */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-white transition-all duration-200 cursor-pointer group/btn"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:scale-110 transition-transform" />
                      <span>Case Study Deep Dive</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                    </button>

                    {/* Quick Metric highlight */}
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-slate-500 uppercase">
                        {project.metrics[0].label}
                      </div>
                      <div className="text-xs font-mono font-semibold text-cyan-300">
                        {project.metrics[0].value}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Abstract Visual Column */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]">
                    {renderProjectVisual(project.id)}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onOpenContact={onOpenContact}
      />
    </section>
  );
};
