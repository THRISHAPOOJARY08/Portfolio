import React, { useState } from 'react';
import { AlertTriangle, TrendingUp, Users, CheckCircle2, Calculator } from 'lucide-react';

export const AttendanceAnalyzerVisual: React.FC = () => {
  const [attendedSessions, setAttendedSessions] = useState(38);
  const totalSessions = 55;
  const targetPct = 75;

  const currentPct = ((attendedSessions / totalSessions) * 100);
  const isShortage = currentPct < targetPct;

  // Formula for consecutive classes needed: (target * total - attended) / (1 - target)
  const recoveryClassesNeeded = Math.max(
    0,
    Math.ceil((0.75 * totalSessions - attendedSessions) / (1 - 0.75))
  );

  return (
    <div className="w-full h-full min-h-[380px] bg-[#0d0918] rounded-2xl border border-indigo-500/25 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group select-none shadow-2xl">
      {/* Background radial glow */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar: Analytics Status Header */}
      <div className="flex items-center justify-between pb-4 border-b border-indigo-500/20 z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-indigo-300 font-semibold tracking-wide">
              SHORTAGE ANALYZER · HEURISTIC ENGINE
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              Statutory 75% Cutoff · Dynamic Predictive Recovery Model
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-full border ${
          isShortage
            ? 'text-rose-300 bg-rose-950/60 border-rose-500/40'
            : 'text-emerald-300 bg-emerald-950/60 border-emerald-500/40'
        }`}>
          {isShortage ? (
            <>
              <AlertTriangle className="w-3 h-3 text-rose-400" />
              <span>Shortfall Triggered</span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>Compliant &gt; 75%</span>
            </>
          )}
        </div>
      </div>

      {/* Middle: Interactive Dynamic Threshold Simulation */}
      <div className="my-5 space-y-4 relative z-10">
        {/* Metric gauge & recovery card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Realtime Attendance Percentage Display */}
          <div className="bg-[#080512] rounded-xl p-4 border border-indigo-500/20 flex flex-col justify-between">
            <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
              <span>CURRENT ATTENDANCE</span>
              <span className="text-indigo-400 font-bold">{attendedSessions} / {totalSessions} hrs</span>
            </div>

            <div className="my-2 flex items-baseline gap-2">
              <span className={`text-3xl font-display font-bold ${
                isShortage ? 'text-rose-400' : 'text-emerald-400'
              }`}>
                {currentPct.toFixed(1)}%
              </span>
              <span className="text-xs font-mono text-slate-500">
                / 75.0% required
              </span>
            </div>

            {/* Threshold Progress Bar */}
            <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden mt-1">
              <div
                className={`h-full transition-all duration-300 ${
                  isShortage ? 'bg-rose-500' : 'bg-emerald-400'
                }`}
                style={{ width: `${Math.min(100, currentPct)}%` }}
              />
              {/* 75% regulatory marker */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_#ffffff]"
                style={{ left: '75%' }}
                title="75% Regulatory Cutoff"
              />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-slate-500 mt-1">
              <span>0%</span>
              <span className="text-white font-semibold">75% Cutoff</span>
              <span>100%</span>
            </div>
          </div>

          {/* Recovery Calculator Box */}
          <div className="bg-[#080512] rounded-xl p-4 border border-indigo-500/20 flex flex-col justify-between">
            <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1.5">
              <Calculator className="w-3 h-3 text-indigo-400" />
              <span>PREDICTIVE RECOVERY SIMULATOR</span>
            </div>

            <div className="my-2">
              {isShortage ? (
                <div>
                  <div className="text-2xl font-display font-bold text-amber-300">
                    +{recoveryClassesNeeded} Classes
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Mandatory consecutive sessions to regain examination eligibility.
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-2xl font-display font-bold text-emerald-400">
                    Safe Margin
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Eligible for examination. Can miss up to {Math.floor((attendedSessions - 0.75 * totalSessions) / 0.75)} sessions before warning.
                  </div>
                </div>
              )}
            </div>

            {/* Quick Interactive Slider to test calculator */}
            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-3">
              <span className="text-[10px] font-mono text-slate-400">Test Attended:</span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setAttendedSessions(prev => Math.max(25, prev - 2))}
                  className="px-2 py-0.5 text-xs font-mono bg-white/10 hover:bg-white/20 rounded text-white"
                >
                  -2
                </button>
                <span className="text-xs font-mono text-indigo-300 w-8 text-center">{attendedSessions}</span>
                <button
                  onClick={() => setAttendedSessions(prev => Math.min(totalSessions, prev + 2))}
                  className="px-2 py-0.5 text-xs font-mono bg-white/10 hover:bg-white/20 rounded text-white"
                >
                  +2
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Specs */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-indigo-500/20 text-center z-10">
        <div className="p-2 rounded-lg bg-indigo-950/30">
          <div className="text-[10px] font-mono text-slate-400">TIME COMPLEXITY</div>
          <div className="text-xs font-semibold text-indigo-300">O(N) Batch</div>
        </div>
        <div className="p-2 rounded-lg bg-indigo-950/30">
          <div className="text-[10px] font-mono text-slate-400">THRESHOLD</div>
          <div className="text-xs font-semibold text-slate-200">75% VTU/Norm</div>
        </div>
        <div className="p-2 rounded-lg bg-indigo-950/30">
          <div className="text-[10px] font-mono text-slate-400">SIMULATOR</div>
          <div className="text-xs font-semibold text-slate-200">Dynamic ceil()</div>
        </div>
        <div className="p-2 rounded-lg bg-indigo-950/30">
          <div className="text-[10px] font-mono text-slate-400">NOTIFICATION</div>
          <div className="text-xs font-semibold text-indigo-400">Auto-Alert</div>
        </div>
      </div>
    </div>
  );
};
