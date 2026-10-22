import React from 'react';

export const SectionHeader: React.FC<{ tag: string; title: string; desc?: string }> = ({ tag, title, desc }) => (
  <div className="text-center space-y-3 mb-10">
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
      <span>● {tag}</span>
    </div>
    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">{title}</h2>
    {desc && <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">{desc}</p>}
  </div>
);
