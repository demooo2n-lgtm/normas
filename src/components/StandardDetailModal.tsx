import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Layers, ShieldCheck, ExternalLink, Copy, Check, Sparkles, Building2, Calendar } from 'lucide-react';
import { Standard } from '../types/standards';

interface StandardDetailModalProps {
  standard: Standard | null;
  onClose: () => void;
  onCompareWith?: (standard: Standard) => void;
}

export const StandardDetailModal: React.FC<StandardDetailModalProps> = ({
  standard,
  onClose,
  onCompareWith
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [copied, setCopied] = useState(false);

  if (!standard) return null;

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const completedCount = Object.values(checkedItems).filter(Boolean).length;
  const totalChecklist = standard.checklist.length;
  const progressPercent = totalChecklist > 0 ? Math.round((completedCount / totalChecklist) * 100) : 0;

  const handleCopySummary = () => {
    const text = `${standard.code} - ${standard.title}\n\nOrganización: ${standard.organization} (${standard.year})\n\nResumen: ${standard.summary}\n\nPilares Clave:\n${standard.keyPillars.map(p => `- ${p}`).join('\n')}\n\nEjemplo Práctico:\n${standard.practicalExample}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel rounded-2xl border border-slate-700/80 shadow-2xl p-5 sm:p-7 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
                {standard.badge}
              </span>
              <span className="text-xs text-slate-300 font-mono bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                Estado: {standard.status}
              </span>
              <span className="text-xs text-slate-500">·</span>
              <span className="text-xs text-slate-400">
                Fase: <strong className="text-slate-300">{standard.sdlcPhase}</strong>
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
              {standard.code}
            </h2>
            <p className="text-sm font-medium text-cyan-400">
              {standard.title}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metadata info strip */}
        <div className="my-4 grid grid-cols-2 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
          <div>
            <span className="text-slate-500 block">Organismo Emisor</span>
            <span className="font-medium text-slate-200">{standard.organization}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Última Revisión</span>
            <span className="font-mono text-cyan-300">{standard.year}</span>
          </div>
          <div>
            <span className="text-slate-500 block">Categoría</span>
            <span className="font-mono text-purple-300 uppercase">{standard.category}</span>
          </div>
        </div>

        {/* Description & Summary */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Resumen Técnico
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {standard.description}
          </p>
        </div>

        {/* Key Pillars */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Pilares y Características Principales</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {standard.keyPillars.map((pillar, i) => (
              <div 
                key={i}
                className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 flex items-start gap-2"
              >
                <span className="text-cyan-400 font-mono mt-0.5">0{i + 1}.</span>
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Documentation Artifacts */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5" />
            <span>Artefactos de Documentación Obligatorios / Recomendados</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {standard.documentationArtifacts.map((artifact, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 rounded-lg text-xs bg-slate-800/90 border border-slate-700/70 text-slate-200"
              >
                📄 {artifact}
              </span>
            ))}
          </div>
        </div>

        {/* Interactive Self-Audit Checklist */}
        <div className="space-y-3 mb-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Checklist de Verificación Rápida para tu Proyecto</span>
            </h3>
            <span className="text-xs font-mono text-emerald-300 font-semibold">
              {completedCount} de {totalChecklist} ({progressPercent}%)
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full transition-all duration-300" 
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="space-y-2 pt-2">
            {standard.checklist.map((item, idx) => (
              <label 
                key={idx}
                onClick={() => toggleCheck(idx)}
                className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-slate-800/50 cursor-pointer transition-colors text-xs text-slate-300"
              >
                <input
                  type="checkbox"
                  checked={!!checkedItems[idx]}
                  onChange={() => {}}
                  className="mt-0.5 rounded border-slate-700 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
                />
                <span className={checkedItems[idx] ? 'line-through text-slate-400' : ''}>
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Real World Practical Example */}
        <div className="space-y-2 mb-6 p-4 rounded-xl bg-cyan-950/20 border border-cyan-900/40">
          <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Caso Práctico en la Industria</span>
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed italic">
            "{standard.practicalExample}"
          </p>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copiado al portapapeles' : 'Copiar Resumen'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Cerrar Vista
          </button>
        </div>
      </div>
    </div>
  );
};
