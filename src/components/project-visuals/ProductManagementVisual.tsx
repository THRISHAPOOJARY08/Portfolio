import React, { useState } from 'react';
import { Database, Server, RefreshCw, CheckCircle, ArrowRightLeft, Layers } from 'lucide-react';

export const ProductManagementVisual: React.FC = () => {
  const [selectedSku, setSelectedSku] = useState('SKU-8821');

  const INVENTORY = [
    { sku: 'SKU-8821', name: 'Industrial Sensor Array', stock: 142, status: 'In Stock', leadTime: '24h', reorder: 40 },
    { sku: 'SKU-4910', name: 'Relay Controller Mod-X', stock: 18, status: 'Low Stock Alert', leadTime: '48h', reorder: 25 },
    { sku: 'SKU-1029', name: 'Precision Logic Core', stock: 320, status: 'Optimized', leadTime: 'Immediate', reorder: 50 },
  ];

  const currentItem = INVENTORY.find(item => item.sku === selectedSku) || INVENTORY[0];

  return (
    <div className="w-full h-full min-h-[380px] bg-[#090b14] rounded-2xl border border-sky-500/25 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden group select-none shadow-2xl">
      {/* Background radial glow */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar: Database & Engine Status */}
      <div className="flex items-center justify-between pb-4 border-b border-sky-500/20 z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-mono text-sky-300 font-semibold tracking-wide">
              MYSQL · RELATIONAL INVENTORY ENGINE
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              ACID Safe Transactions · Indexed Catalog Search
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono text-sky-300 bg-sky-950/60 border border-sky-500/30 px-2.5 py-1 rounded-full">
          <CheckCircle className="w-3 h-3 text-sky-400" />
          <span>Sync Status: Nominal</span>
        </div>
      </div>

      {/* Middle: Relational Entity Nodes & Transaction Simulation */}
      <div className="my-5 space-y-4 relative z-10">
        {/* SKU Selector Tabs */}
        <div className="grid grid-cols-3 gap-2">
          {INVENTORY.map((item) => (
            <button
              key={item.sku}
              onClick={() => setSelectedSku(item.sku)}
              className={`p-2.5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                selectedSku === item.sku
                  ? 'bg-sky-950/50 border-sky-400/60 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                  : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05]'
              }`}
            >
              <div className="text-[10px] font-mono text-slate-400 flex items-center justify-between">
                <span>{item.sku}</span>
                <span className={`w-1.5 h-1.5 rounded-full ${item.stock < item.reorder ? 'bg-amber-400 animate-ping' : 'bg-sky-400'}`} />
              </div>
              <div className="text-xs font-semibold text-white truncate mt-0.5">
                {item.name}
              </div>
              <div className="text-[10px] font-mono text-sky-300">
                Units: {item.stock}
              </div>
            </button>
          ))}
        </div>

        {/* Abstract Transaction Flow Ledger */}
        <div className="bg-[#050811] rounded-xl p-4 border border-sky-500/20">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pb-2 mb-2 border-b border-white/[0.06]">
            <span>TRANSACTION ISOLATION LEVEL: REPEATABLE READ</span>
            <span className="text-sky-400">LATENCY: 14ms</span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between text-slate-300">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>TX_78491: UPDATE products SET stock = {currentItem.stock} WHERE sku = '{currentItem.sku}'</span>
              </span>
              <span className="text-emerald-400 text-[10px]">COMMITTED</span>
            </div>

            <div className="flex items-center justify-between text-slate-400 text-[11px]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                <span>INDEX LOOKUP (B-Tree): primary key scan 1 row fetched</span>
              </span>
              <span className="text-slate-500 text-[10px]">0.002s</span>
            </div>
          </div>

          {/* Visual Stock Level Progress Bar */}
          <div className="mt-3 pt-2">
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
              <span>SAFETY STOCK THRESHOLD ({currentItem.reorder} MIN)</span>
              <span className={currentItem.stock < currentItem.reorder ? 'text-amber-400 font-bold' : 'text-sky-400'}>
                {currentItem.status}
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${
                  currentItem.stock < currentItem.reorder ? 'bg-amber-400' : 'bg-gradient-to-r from-sky-500 to-cyan-400'
                }`}
                style={{ width: `${Math.min(100, (currentItem.stock / 350) * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Architectural Specs */}
      <div className="grid grid-cols-4 gap-2 pt-3 border-t border-sky-500/20 text-center z-10">
        <div className="p-2 rounded-lg bg-sky-950/30">
          <div className="text-[10px] font-mono text-slate-400">INDEXING</div>
          <div className="text-xs font-semibold text-sky-300">B-Tree Hash</div>
        </div>
        <div className="p-2 rounded-lg bg-sky-950/30">
          <div className="text-[10px] font-mono text-slate-400">SCHEMA</div>
          <div className="text-xs font-semibold text-slate-200">3NF Normal</div>
        </div>
        <div className="p-2 rounded-lg bg-sky-950/30">
          <div className="text-[10px] font-mono text-slate-400">CONCURRENCY</div>
          <div className="text-xs font-semibold text-slate-200">Lock-Safe</div>
        </div>
        <div className="p-2 rounded-lg bg-sky-950/30">
          <div className="text-[10px] font-mono text-slate-400">QUERY TIME</div>
          <div className="text-xs font-semibold text-sky-400">&lt;15ms</div>
        </div>
      </div>
    </div>
  );
};
