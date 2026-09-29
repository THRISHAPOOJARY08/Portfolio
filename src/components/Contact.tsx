import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, ArrowRight, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(subject || 'Engineering Opportunity / Portfolio Inquiry');
    const mailtoBody = encodeURIComponent(
      `Hello Thrisha,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 4000);
  };

  return (
    <section id="contact" className="relative py-32 px-4 max-w-5xl mx-auto scroll-mt-20">
      {/* Large expanding ambient light behind contact */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(129, 140, 248, 0.3) 50%, rgba(34, 211, 238, 0.15) 75%, transparent 85%)',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
          <span className="w-2 h-0.5 bg-cyan-400 rounded-full" />
          <span>05 / Connect</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Let's build something meaningful.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
          Whether you have an internship opportunity, a software project, or want to talk algorithms and systems architecture, my inbox is always open.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: Quick Connect & Direct Channels (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          {/* Email Quick Action Card */}
          <div className="glass-panel rounded-2xl p-6 border border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 to-transparent shadow-xl">
            <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 mb-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>DIRECT EMAIL</span>
            </div>

            <div className="text-sm font-mono text-white mb-4 break-all select-all font-semibold">
              {PERSONAL_INFO.email}
            </div>

            <button
              onClick={handleCopyEmail}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-xs font-mono text-cyan-300 transition-all duration-200 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="glass-panel rounded-2xl p-6 border border-white/[0.08] space-y-3 shadow-xl">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
              Verified Profiles
            </div>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all group"
            >
              <div className="flex items-center gap-3 text-slate-200">
                <Linkedin className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-medium">LinkedIn Profile</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all group"
            >
              <div className="flex items-center gap-3 text-slate-200">
                <Github className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-medium">GitHub Repositories</span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Institution badge */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono text-slate-400">
            <div>Student Affiliation:</div>
            <div className="text-slate-200 font-medium mt-0.5">
              Alva's Institute of Engineering and Technology
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Mijar, Moodbidri, Karnataka, India
            </div>
          </div>
        </div>

        {/* Right: Interactive Message Composer (7 cols) */}
        <div className="lg:col-span-7">
          <div className="relative group h-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/10 rounded-2xl blur-sm opacity-60" />

            <form
              onSubmit={handleSendMessage}
              className="relative glass-panel rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10 shadow-2xl h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      Send a Message
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jane Doe"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full bg-[#080a11] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Your Email / Organization
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. jane@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full bg-[#080a11] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Internship Role / Project Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#080a11] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your note or project brief here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#080a11] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Glowing CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full relative group/submit py-3 px-6 rounded-xl font-display font-semibold text-xs uppercase tracking-widest text-slate-950 bg-gradient-to-r from-white via-cyan-100 to-white shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-slate-950" />
                  <span>GET IN TOUCH</span>
                </button>

                {sentSuccess && (
                  <div className="text-center text-xs font-mono text-emerald-400 mt-2">
                    Opening your default email client with your message...
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
