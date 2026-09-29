import React, { useState } from 'react';
import { Sprout, CloudRain, Sun, Wind, Activity, Zap } from 'lucide-react';

export const FarmIQVisual: React.FC = () => {
  const [activeZone, setActiveZone] = useState<number>(1);

  const ZONES = [
    { id: 1, name: 'Zone Alpha — Wheat Crop', moisture: '64%', temp: '24°C', health: 'Optimal', ph: '6.8' },
    { id: 2, name: 'Zone Beta — Pulses & Legumes', moisture: '52%', temp: '26°C', health: 'Hydration Needed', ph: '6.5' },
    { id: 3, name: 'Zone Gamma — Horticultural Bed', moisture: '78%', temp: '22°C', health: 'Excellent', ph: '7.1' },
  ];

  return (
    <div className="w-full h-full min-h-[380px] bg-[#080d12] rounded-2xl border border-emerald-500/20 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group select-none shadow-2xl">
      {/* Background radial glow */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar: Telemetry Header */}
      <div className="flex items-center justify-between pb-4 border-b border-emerald-500/20 z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Sprout className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-emerald-400 font-semibold tracking-wide">
              FARMIQ · TELEMETRY INFERENCE
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              Sensor Stream v2.4 · Normalized Relational Store
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Realtime Telemetry</span>
        </div>
      </div>

      {/* Middle: Abstract Agricultural Topology & Neural Sensor Grid */}
      <div className="my-5 relative z-10">
        {/* Abstract Sensor Matrix Visualization */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {ZONES.map((zone) => {
            const isSelected = activeZone === zone.id;
            return (
              <button
                key={zone.id}
                onClick={() => setActiveZone(zone.id)}
                className={`text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950/50 border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                    : 'bg-white/[0.02] border-white/[0.08] hover:bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>Z0{zone.id}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                </div>
                <div className="text-xs font-semibold text-white truncate mb-1">
                  {zone.name.split('—')[1]}
                </div>
                <div className="text-[10px] font-mono text-emerald-300/90">
                  {zone.moisture} Soil Saturation
                </div>
              </button>
            );
          })}
        </div>

        {/* Abstract Topographic Yield Waveform */}
        <div className="relative bg-[#050a0e] rounded-xl p-4 border border-emerald-500/20 overflow-hidden">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
            <span>SOIL MOISTURE & PREDICTIVE NUTRIENT GRADIENT</span>
            <span className="text-emerald-400">STATUS: {ZONES[activeZone - 1].health}</span>
          </div>

          <svg className="w-full h-20 text-emerald-400/80 overflow-visible" viewBox="0 0 300 70">
            <defs>
              <linearGradient id="farmGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            {/* Background gridlines */}
            <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(16, 185, 129, 0.1)" strokeDasharray="3 3" />
            <line x1="0" y1="45" x2="300" y2="45" stroke="rgba(16, 185, 129, 0.1)" strokeDasharray="3 3" />

            {/* Filled curve */}
            <path
              d={
                activeZone === 1
                  ? "M0,45 Q50,15 100,35 T200,20 T300,30 L300,70 L0,70 Z"
                  : activeZone === 2
                  ? "M0,55 Q60,40 120,50 T220,30 T300,45 L300,70 L0,70 Z"
                  : "M0,35 Q70,10 140,25 T240,15 T300,20 L300,70 L0,70 Z"
              }
              fill="url(#farmGrad)"
              className="transition-all duration-500"
            />
            {/* Stroke Line */}
            <path
              d={
                activeZone === 1
                  ? "M0,45 Q50,15 100,35 T200,20 T300,30"
                  : activeZone === 2
                  ? "M0,55 Q60,40 120,50 T220,30 T300,45"
                  : "M0,35 Q70,10 140,25 T240,15 T300,20"
              }
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              className="transition-all duration-500"
            />

            {/* Sensor Data Points */}
            <circle cx="100" cy={activeZone === 1 ? 35 : activeZone === 2 ? 50 : 25} r="4" fill="#34d399" />
            <circle cx="200" cy={activeZone === 1 ? 20 : activeZone === 2 ? 30 : 15} r="4" fill="#34d399" />
          </svg>
        </div>
      </div>

      {/* Bottom Telemetry Metrics Strip */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-emerald-500/20 text-center z-10">
        <div className="p-2 rounded-lg bg-emerald-950/30">
          <div className="text-[10px] font-mono text-slate-400">SOIL MOISTURE</div>
          <div className="text-xs font-semibold text-emerald-300">{ZONES[activeZone - 1].moisture}</div>
        </div>
        <div className="p-2 rounded-lg bg-emerald-950/30">
          <div className="text-[10px] font-mono text-slate-400">TEMPERATURE</div>
          <div className="text-xs font-semibold text-slate-200">{ZONES[activeZone - 1].temp}</div>
        </div>
        <div className="p-2 rounded-lg bg-emerald-950/30">
          <div className="text-[10px] font-mono text-slate-400">SOIL pH</div>
          <div className="text-xs font-semibold text-slate-200">{ZONES[activeZone - 1].ph}</div>
        </div>
        <div className="p-2 rounded-lg bg-emerald-950/30">
          <div className="text-[10px] font-mono text-slate-400">YIELD ESTIMATE</div>
          <div className="text-xs font-semibold text-emerald-400">+18.5%</div>
        </div>
      </div>
    </div>
  );
};
