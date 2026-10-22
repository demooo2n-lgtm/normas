import React from 'react';
import { ShieldCheck, BookOpen, GitBranch, ArrowUp, ExternalLink, Info } from 'lucide-react';
import { BIBLIOGRAPHY_DATA } from '../data/initialStandards';

interface FooterProps {
  onOpenAdmin: () => void;
  onOpenEvaluator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onOpenEvaluator }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-slate-800/80 bg-[#040711] py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        {/* Official Bibliography Section from Document */}
        <div className="mb-12 pb-10 border-b border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h3 className="text-lg font-extrabold text-white tracking-tight">
                Bibliografía Oficial y Referencias Normativas
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Enlaces oficiales a ISO, IEEE, ISACA, NIST y OWASP citados en el documento de investigación.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
            {BIBLIOGRAPHY_DATA.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/90 hover:border-cyan-500/40 transition-all group flex items-start justify-between gap-2 text-xs"
              >
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-cyan-400">
                    {item.author} ({item.year})
                  </span>
                  <p className="text-slate-200 font-medium group-hover:text-cyan-300 transition-colors leading-snug">
                    {item.title}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 shrink-0 mt-0.5" />
              </a>
            ))}
          </div>

          {/* Academic Note from Document */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
            <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Nota:</strong> las normas ISO e IEEE completas suelen ser de pago. Para una investigación académica, conviene citar su ficha oficial y usar el texto íntegro únicamente cuando la biblioteca institucional tenga licencia de acceso.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-md shadow-cyan-500/20">
              <div className="w-full h-full bg-[#080d1a] rounded-[11px] flex items-center justify-center text-cyan-400 font-mono text-xs font-bold">
                &lt;/&gt;
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-tight text-white font-mono">
                  NORMA<span className="text-cyan-400">·SOFT</span>
                </span>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.2 rounded border border-cyan-800/50">
                  ISO · IEEE · CMMI V3.0
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Normas Vigentes para el Desarrollo y la Calidad del Software
              </p>
            </div>
          </div>

          {/* Center: Tech tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>ISO/IEC 25010:2023 (9 características)</span>
            </span>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-indigo-400" />
              <span>CMMI V3.0 (ISACA)</span>
            </span>
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>ISO/IEC/IEEE 12207:2026 & ISO 9001:2026</span>
            </span>
          </div>

          {/* Right: Actions & Top Button */}
          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenAdmin}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Panel Admin
            </button>
            <span>·</span>
            <button
              onClick={onOpenEvaluator}
              className="hover:text-cyan-300 transition-colors cursor-pointer"
            >
              Evaluador
            </button>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              aria-label="Subir al inicio"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <div>
            <span className="text-slate-300 font-semibold">Integrantes del Proyecto:</span>{' '}
            <span className="text-cyan-400 font-medium">Leonardo</span> ·{' '}
            <span className="text-purple-400 font-medium">Miguel</span> ·{' '}
            <span className="text-sky-400 font-medium">Franco.A</span> ·{' '}
            <span className="text-indigo-400 font-medium">Franco.P</span> ·{' '}
            <span className="text-emerald-400 font-medium">Tadeo</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono">SQuaRE · ISO/IEC/IEEE 29119 · IEEE 730-2026 · NIST SSDF · OWASP ASVS 5.0.0 · IA 42001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
