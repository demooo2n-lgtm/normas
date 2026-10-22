import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Standard } from '../types/standards';

interface StandardComparatorProps {
  standards: Standard[];
}

export const StandardComparator: React.FC<StandardComparatorProps> = ({ standards }) => {
  const [standardAId, setStandardAId] = useState<string>('iso-25010');
  const [standardBId, setStandardBId] = useState<string>('cmmi-v3');

  const standardA = standards.find(s => s.id === standardAId) || standards[0];
  const standardB = standards.find(s => s.id === standardBId) || standards[1] || standards[0];

  const presets = [
    { label: 'ISO/IEC 25010:2023 vs CMMI V3.0', a: 'iso-25010', b: 'cmmi-v3' },
    { label: 'ISO/IEC/IEEE 12207:2026 vs Prácticas Ágiles', a: 'iso-12207', b: 'agile-devops-practices' },
    { label: 'ISO/IEC 27001:2022 vs OWASP ASVS 5.0.0', a: 'iso-27001', b: 'owasp-asvs' },
    { label: 'ISO/IEC/IEEE 29119 & IEEE 730-2026 vs ISO 9001:2026', a: 'iso-29119-ieee-730', b: 'iso-9001' },
    { label: 'NIST SSDF v1.1 vs Estándares de IA (42001/5338/25059)', a: 'nist-ssdf', b: 'ai-standards' }
  ];

  return (
    <section id="comparador" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header Badge */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
          <span>● MATRIZ COMPARATIVA Y COMBINACIÓN RAZONABLE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
          Comparador de Normas y Marcos Vigentes
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          No existe una única norma que cubra toda la calidad del software: compara cómo se complementan entre sí para producto, ciclo de vida, pruebas, gestión, seguridad, madurez e inteligencia artificial.
        </p>
      </div>

      {/* Preset quick buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
        <span className="text-xs text-slate-400 mr-2">Comparativas Clave:</span>
        {presets.map((preset, idx) => (
          <button
            key={idx}
            onClick={() => {
              setStandardAId(preset.a);
              setStandardBId(preset.b);
            }}
            className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-cyan-300 border border-slate-700/80 transition-colors cursor-pointer"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Selection Pickers */}
      <div className="glass-panel rounded-2xl border border-slate-800 p-5 sm:p-7 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 pb-6 border-b border-slate-800">
          {/* Selector A */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
              Norma o Marco A
            </label>
            <select
              value={standardAId}
              onChange={(e) => setStandardAId(e.target.value)}
              className="w-full bg-slate-900 text-sm text-white rounded-xl px-4 py-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              {standards.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.code} — {s.title} ({s.status})
                </option>
              ))}
            </select>
          </div>

          {/* Selector B */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-purple-400 uppercase tracking-wider block">
              Norma o Marco B
            </label>
            <select
              value={standardBId}
              onChange={(e) => setStandardBId(e.target.value)}
              className="w-full bg-slate-900 text-sm text-white rounded-xl px-4 py-2.5 border border-slate-700 focus:outline-none focus:border-purple-500 cursor-pointer"
            >
              {standards.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.code} — {s.title} ({s.status})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card A */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-cyan-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                Estado: {standardA.status}
              </span>
              <span className="text-xs text-slate-400 font-mono">Edición: {standardA.year}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{standardA.code}</h3>
              <p className="text-xs text-cyan-400 font-medium">{standardA.title}</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{standardA.summary}</p>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">Enfoque Principal:</div>
              <div className="text-xs text-slate-200 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                Fase: <strong>{standardA.sdlcPhase}</strong> ({standardA.organization})
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-mono text-cyan-400 uppercase">Componentes / Características Clave:</div>
              <ul className="text-xs text-slate-300 space-y-1">
                {standardA.keyPillars.slice(0, 5).map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-cyan-400">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card B */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-purple-900/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                Estado: {standardB.status}
              </span>
              <span className="text-xs text-slate-400 font-mono">Edición: {standardB.year}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{standardB.code}</h3>
              <p className="text-xs text-purple-400 font-medium">{standardB.title}</p>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">{standardB.summary}</p>

            <div className="pt-3 border-t border-slate-800 space-y-2">
              <div className="text-xs font-mono text-slate-400 uppercase">Enfoque Principal:</div>
              <div className="text-xs text-slate-200 bg-slate-800/80 p-2.5 rounded-lg border border-slate-700">
                Fase: <strong>{standardB.sdlcPhase}</strong> ({standardB.organization})
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-xs font-mono text-purple-400 uppercase">Componentes / Características Clave:</div>
              <ul className="text-xs text-slate-300 space-y-1">
                {standardB.keyPillars.slice(0, 5).map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-purple-400">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Conclusion / Reasonable Combination Box from Document */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 via-slate-900 to-indigo-950/30 border border-slate-700 text-xs text-slate-300 space-y-1.5">
          <div className="font-semibold text-cyan-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Combinación Razonable para una Organización de Desarrollo Actual</span>
          </div>
          <p className="leading-relaxed">
            <strong>ISO/IEC 25010:2023</strong> para definir las 9 características de calidad del producto (e <strong>ISO/IEC 25019:2023</strong> para calidad en uso);{' '}
            <strong>ISO/IEC/IEEE 12207:2026</strong> para organizar el ciclo de vida;{' '}
            <strong>ISO/IEC/IEEE 29119</strong> e <strong>IEEE 730-2026</strong> para estructurar pruebas y aseguramiento de calidad (SQA);{' '}
            <strong>ISO 9001:2026</strong> para gestionar la calidad organizacional;{' '}
            <strong>ISO/IEC 27001:2022, NIST SSDF (SP 800-218 v1.1) y OWASP ASVS 5.0.0</strong> para seguridad;{' '}
            <strong>CMMI V3.0</strong> para madurez y mejora de procesos (mediante <em>appraisal</em>); e{' '}
            <strong>ISO/IEC 42001:2023, 5338:2023 y 25059:2023</strong> cuando se desarrollen o utilicen sistemas de IA.
          </p>
        </div>
      </div>
    </section>
  );
};
