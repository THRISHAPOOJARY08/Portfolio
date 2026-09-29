import React, { useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { MouseLight } from './components/MouseLight';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeOverviewModal } from './components/ResumeOverviewModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#07080d] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Background Lighting & Particles System */}
      <AmbientBackground />

      {/* Interactive Ambient Mouse Lighting (Desktop) */}
      <MouseLight />

      {/* Custom Desktop Cursor Indicator */}
      <CustomCursor />

      {/* Floating Translucent Glass Navbar */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Content Flow */}
      <main className="relative z-20 flex flex-col">
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('projects')}
          onConnectClick={() => scrollToSection('contact')}
        />

        {/* Continuous Flow Divider 1 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent max-w-4xl mx-auto my-4" />

        {/* About Section */}
        <About />

        {/* Continuous Flow Divider 2 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent max-w-4xl mx-auto my-4" />

        {/* Skills Section */}
        <Skills />

        {/* Continuous Flow Divider 3 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/15 to-transparent max-w-4xl mx-auto my-4" />

        {/* Projects Section (Main Focus) */}
        <Projects onOpenContact={() => scrollToSection('contact')} />

        {/* Continuous Flow Divider 4 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent max-w-4xl mx-auto my-4" />

        {/* Education Section */}
        <Education />

        {/* Continuous Flow Divider 5 */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent max-w-4xl mx-auto my-4" />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Printable/Inspectable Resume Modal */}
      <ResumeOverviewModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
