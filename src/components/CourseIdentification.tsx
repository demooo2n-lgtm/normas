import React from 'react';
import { GraduationCap, BookOpen, Target, ListOrdered } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

// EDITAR: datos de identificación del curso (orientaciones de la profesora)
const COURSE = {
  grupo: '3º BTI',
  asignatura: 'Completar nombre de la asignatura',
  tema: 'Normas vigentes para el desarrollo de software y de calidad',
  capacidad: 'Analiza las normas vigentes para el desarrollo de software y de calidad, nacionales e internacionales.'
};

const INDEX = [
  { id: 'integrantes', n: '01', label: 'Integrantes y bloques', desc: 'Quién presenta cada área' },
  { id: 'normativas', n: '02', label: 'Normativa internacional y nacional', desc: 'COPANT, ISO, IEC y normas paraguayas' },
  { id: 'ruta', n: '03', label: 'Ruta de calidad', desc: 'Normas según la fase del ciclo de vida' },
  { id: 'catalogo', n: '04', label: 'Catálogo de normas', desc: 'Tabla resumen, buscador y detalle' },
  { id: 'comparador', n: '05', label: 'Comparador', desc: 'Cómo se complementan las normas' },
  { id: 'agil', n: '06', label: 'Docs ágiles y DoD', desc: 'Evidencia en Scrum, Kanban y DevOps' },
  { id: 'actividad', n: '07', label: 'Actividad de aprendizaje', desc: '10 consignas con resultado y retroalimentación' },
  { id: 'evaluador', n: '08', label: 'Evaluador de madurez', desc: 'Autoevaluación CMMI V3.0 e ISO' }
];

export const CourseIdentification: React.FC = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const items = [
    { icon: <GraduationCap className="w-4 h-4" />, k: 'Grupo / curso', v: COURSE.grupo },
    { icon: <BookOpen className="w-4 h-4" />, k: 'Asignatura', v: COURSE.asignatura },
    { icon: <ListOrdered className="w-4 h-4" />, k: 'Tema asignado', v: COURSE.tema },
    { icon: <Target className="w-4 h-4" />, k: 'Capacidad a desarrollar', v: COURSE.capacidad }
  ];
  return (
    <section id="identificacion" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <SectionHeader tag="Identificación del trabajo" title="Ficha del curso y organización del sitio" />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 glass-panel rounded-2xl border border-slate-800 p-6 space-y-5">
          {items.map((it) => (
            <div key={it.k} className="flex gap-3">
              <div className="w-9 h-9 rounded-lg bg-cyan-950 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shrink-0">{it.icon}</div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">{it.k}</div>
                <div className="text-sm text-slate-100 leading-snug">{it.v}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-3 glass-panel rounded-2xl border border-slate-800 p-6">
          <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3">Organización general de los contenidos</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {INDEX.map((i) => (
              <button key={i.id} onClick={() => go(i.id)} className="text-left flex gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-colors cursor-pointer">
                <span className="font-mono text-sm font-bold text-cyan-400">{i.n}</span>
                <span>
                  <span className="block text-sm font-semibold text-white">{i.label}</span>
                  <span className="block text-xs text-slate-400">{i.desc}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
