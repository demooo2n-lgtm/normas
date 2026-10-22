import React from 'react';
import { ArrowRight, Layers, FileCheck, CheckCircle2, Shield, Code2 } from 'lucide-react';
import { Standard } from '../types/standards';

interface LearningPathRoadmapProps {
  onSelectPhase: (phase: Standard['sdlcPhase']) => void;
  selectedPhase: string | null;
}

export const LearningPathRoadmap: React.FC<LearningPathRoadmapProps> = ({
  onSelectPhase,
  selectedPhase
}) => {
  const steps: {
    id: Standard['sdlcPhase'];
    num: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
    standards: string;
  }[] = [
    {
      id: 'Requerimientos',
      num: '01',
      title: 'REQUERIMIENTOS',
      subtitle: 'Requisitos & VSE',
      icon: <FileCheck className="w-4 h-4 text-cyan-400" />,
      color: 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/40 text-cyan-400',
      standards: '29148:2018 · 15289:2019 · 29110'
    },
    {
      id: 'Arquitectura',
      num: '02',
      title: 'CICLO DE VIDA',
      subtitle: 'Arquitectura & SGSI',
      icon: <Code2 className="w-4 h-4 text-sky-400" />,
      color: 'from-sky-500/20 to-sky-500/5 border-sky-500/40 text-sky-400',
      standards: '12207:2026 · 27001:2022 · 5055'
    },
    {
      id: 'Gestión Ágil',
      num: '03',
      title: 'MADUREZ & SGC',
      subtitle: 'Procesos & Gestión',
      icon: <Layers className="w-4 h-4 text-indigo-400" />,
      color: 'from-indigo-500/20 to-indigo-500/5 border-indigo-500/40 text-indigo-400',
      standards: 'CMMI V3.0 · ISO 9001:2026'
    },
    {
      id: 'Testing & QA',
      num: '04',
      title: 'PRUEBAS & SQA',
      subtitle: 'Testing & DevSecOps',
      icon: <Shield className="w-4 h-4 text-purple-400" />,
      color: 'from-purple-500/20 to-purple-500/5 border-purple-500/40 text-purple-400',
      standards: '29119 · IEEE 730-2026 · ASVS 5.0.0'
    },
    {
      id: 'Calidad de Producto',
      num: '05',
      title: 'CALIDAD & IA',
      subtitle: 'SQuaRE & Sistemas IA',
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
      color: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/40 text-emerald-400',
      standards: '25010:2023 (9 características) · IA'
    }
  ];

  return (
    <section id="ruta" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header Badge */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
          <span>● RECORRIDO DE CALIDAD EN EL SDLC</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Ciclo de Vida de Ingeniería y Gobernanza
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Haz clic en cada fase del ciclo de desarrollo para filtrar los estándares y plantillas aplicables directamente.
        </p>
      </div>

      {/* Interactive Pipeline Steps */}
      <div className="glass-panel rounded-2xl p-4 sm:p-6 border border-slate-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
          {steps.map((step, index) => {
            const isSelected = selectedPhase === step.id;
            return (
              <div key={step.id} className="relative group">
                <button
                  onClick={() => onSelectPhase(step.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer bg-gradient-to-b ${
                    isSelected
                      ? `${step.color} shadow-lg shadow-cyan-950/50 ring-1 ring-cyan-400`
                      : 'from-slate-900/90 to-slate-900/50 border-slate-800/80 hover:border-slate-700 hover:from-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700">
                      {step.num}
                    </span>
                    <div className="p-1.5 rounded-lg bg-slate-800/80">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {step.subtitle}
                  </p>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 text-[11px] font-mono text-cyan-300/80 truncate">
                    {step.standards}
                  </div>
                </button>

                {/* Arrow connector between steps (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 pointer-events-none text-slate-600">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {selectedPhase && (
          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400">
              Fase filtrada: <strong className="text-cyan-400">{selectedPhase}</strong>
            </span>
            <button
              onClick={() => onSelectPhase(null as any)}
              className="text-cyan-400 hover:text-cyan-300 underline font-medium cursor-pointer"
            >
              Restablecer filtro completo
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
