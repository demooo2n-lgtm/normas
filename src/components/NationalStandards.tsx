import React from 'react';
import { Globe2, Flag } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

const INTERNATIONAL = [
  { name: 'ISO', desc: 'Organización Internacional de Normalización: ISO 9001, ISO/IEC 27001, familia 25000.' },
  { name: 'IEC', desc: 'Comisión Electrotécnica Internacional: normas electrotécnicas y, junto con ISO, las ISO/IEC.' },
  { name: 'IEEE', desc: 'Normas de ingeniería de software como IEEE 730-2026 (SQA) y la 12207 conjunta.' },
  { name: 'COPANT', desc: 'Comisión Panamericana de Normas Técnicas: organismo de normalización de las Américas.' }
];

const NATIONAL = [
  { code: 'NP ISO/IEC 27000', desc: 'Visión general y vocabulario de los sistemas de gestión de seguridad de la información.' },
  { code: 'NP ISO/IEC 27001', desc: 'Requisitos del sistema de gestión de seguridad de la información (SGSI).' },
  { code: 'NP-NM ISO/IEC 27005', desc: 'Gestión de riesgos de seguridad de la información.' },
  { code: 'NP ISO/IEC 20000-1', desc: 'Requisitos del sistema de gestión de servicios de TI.' }
];

export const NationalStandards: React.FC = () => (
  <section id="normativas" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
    <SectionHeader
      tag="Marco normativo"
      title="Normativa internacional y nacional"
      desc="Las normas internacionales se adoptan en el país como Normas Paraguayas (NP). Verifica la edición vigente en la ficha oficial antes de citarla."
    />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="glass-panel rounded-2xl border border-slate-800 p-6">
        <div className="flex items-center gap-2 text-sky-300 font-bold mb-4"><Globe2 className="w-5 h-5" /> Internacionales</div>
        <ul className="space-y-3">
          {INTERNATIONAL.map((n) => (
            <li key={n.name} className="flex gap-3">
              <span className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950 border border-cyan-800/60 rounded px-2 py-1 h-fit">{n.name}</span>
              <span className="text-sm text-slate-300 leading-relaxed">{n.desc}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="glass-panel rounded-2xl border border-slate-800 p-6">
        <div className="flex items-center gap-2 text-emerald-300 font-bold mb-4"><Flag className="w-5 h-5" /> Nacionales (Paraguay)</div>
        <ul className="space-y-3">
          {NATIONAL.map((n) => (
            <li key={n.code} className="flex gap-3">
              <span className="font-mono text-xs font-bold text-emerald-300 bg-emerald-950 border border-emerald-800/60 rounded px-2 py-1 h-fit whitespace-nowrap">{n.code}</span>
              <span className="text-sm text-slate-300 leading-relaxed">{n.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
