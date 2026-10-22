import React, { useState } from 'react';
import { CheckCircle2, XCircle, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface Item { area: string; ref: string; q: string; options: string[]; answer: number; why: string }

const ITEMS: Item[] = [
  { area: 'Ciclo de vida', ref: 'ISO/IEC/IEEE 12207:2026', q: 'La ISO/IEC/IEEE 12207:2026 obliga a trabajar con cascada.', options: ['Verdadero', 'Falso'], answer: 1, why: 'No obliga a ninguna metodología: admite enfoques iterativos, incrementales, ágiles, Scrum, Kanban o DevOps.' },
  { area: 'Ciclo de vida', ref: 'ISO/IEC 29110', q: 'Una pyme de 18 personas quiere demostrar calidad sin la carga documental de una gran corporación. ¿Qué norma le conviene?', options: ['ISO/IEC 29110', 'CMMI nivel 5', 'ISO/IEC 42001'], answer: 0, why: 'La ISO/IEC 29110 está pensada para entidades de hasta 25 personas.' },
  { area: 'Calidad del producto', ref: 'ISO/IEC 25010:2023', q: 'En la ISO/IEC 25010:2023, la antigua "usabilidad" pasó a llamarse:', options: ['Flexibilidad', 'Capacidad de interacción', 'Seguridad funcional'], answer: 1, why: 'La portabilidad pasó a Flexibilidad y se agregó Seguridad funcional (safety).' },
  { area: 'Calidad del producto', ref: 'ISO/IEC 25010:2023', q: 'El fallo de un equipo médico puede dañar físicamente a un paciente. ¿Qué característica está en juego?', options: ['Seguridad (security)', 'Seguridad funcional (safety)', 'Compatibilidad'], answer: 1, why: 'Safety evita daños a personas, bienes o medio ambiente; security protege datos y accesos.' },
  { area: 'Gestión de calidad', ref: 'ISO 9001:2026', q: '¿Quién otorga la certificación ISO 9001?', options: ['La propia ISO', 'Entidades certificadoras acreditadas', 'ISACA'], answer: 1, why: 'La certificación es voluntaria y la dan entidades certificadoras acreditadas, no la ISO.' },
  { area: 'Madurez de procesos', ref: 'CMMI V3.0', q: 'Una empresa afirma que "obtuvo la certificación CMMI". ¿Qué es lo correcto?', options: ['Es correcto: CMMI se certifica', 'CMMI no se certifica: se obtiene un nivel mediante un appraisal', 'CMMI es una norma ISO'], answer: 1, why: 'CMMI lo administra ISACA y no es una norma ISO.' },
  { area: 'Pruebas, SQA y ágil', ref: 'IEEE 730-2026 / 29119', q: 'Clasifica: las auditorías de proceso son parte de…', options: ['Testing (detecta defectos)', 'SQA (previene defectos)'], answer: 1, why: 'El testing detecta defectos; el SQA los previene con procesos, estándares, auditorías y métricas.' },
  { area: 'Pruebas, SQA y ágil', ref: 'Prácticas ágiles', q: 'Un equipo usa Scrum pero no tiene trazabilidad ni control de configuración. ¿Qué debe hacer según la 12207:2026?', options: ['Abandonar Scrum', 'Mantener Scrum y agregar trazabilidad y gestión de configuración', 'Pasar a cascada'], answer: 1, why: 'La norma no exige dejar Scrum; exige mantener esos controles.' },
  { area: 'Seguridad', ref: 'NIST SSDF', q: '¿Cuál es la versión final vigente del NIST SSDF?', options: ['SP 800-218 v1.1', 'SP 800-218 v1.2', 'SP 800-218A'], answer: 0, why: 'La v1.2 sigue como borrador público inicial desde diciembre de 2025.' },
  { area: 'Pruebas, SQA y ágil', ref: 'Buenas prácticas', q: 'Una cobertura de pruebas mayor al 70 % es un requisito obligatorio de la ISO/IEC/IEEE 29119.', options: ['Verdadero', 'Falso'], answer: 1, why: 'Es una buena práctica sugerida por la industria, no un requisito de norma.' }
];

export const LearningActivity: React.FC = () => {
  const [ans, setAns] = useState<Record<number, number>>({});
  const [done, setDone] = useState(false);
  const [showKey, setShowKey] = useState(false);

  const correct = ITEMS.filter((it, i) => ans[i] === it.answer).length;
  const pct = Math.round((correct / ITEMS.length) * 100);
  const passed = pct >= 70;
  const toReview = Array.from(new Set(ITEMS.filter((it, i) => ans[i] !== it.answer).map((it) => it.area)));
  const reset = () => { setAns({}); setDone(false); setShowKey(false); };

  return (
    <section id="actividad" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24">
      <SectionHeader
        tag="Actividad de aprendizaje"
        title="Pon a prueba lo aprendido"
        desc={`${ITEMS.length} consignas. Al terminar verás tu resultado: con 70 % o más lograste el aprendizaje esperado.`}
      />

      {!done && (
        <div className="space-y-4">
          {ITEMS.map((it, i) => (
            <div key={i} className="glass-panel rounded-2xl border border-slate-800 p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-cyan-400">CONSIGNA {i + 1}</span>
                <span className="text-[11px] font-mono text-slate-400">{it.area}</span>
              </div>
              <p className="text-sm sm:text-base font-semibold text-white mb-3 leading-snug">{it.q}</p>
              <div className="space-y-2">
                {it.options.map((o, j) => (
                  <button key={j} onClick={() => setAns({ ...ans, [i]: j })} className={`w-full text-left text-sm px-4 py-2.5 rounded-xl border transition-colors cursor-pointer ${ans[i] === j ? 'bg-cyan-950/80 border-cyan-400/80 text-white' : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:border-slate-700'}`}>
                    {o}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400 font-mono">Respondidas: {Object.keys(ans).length}/{ITEMS.length}</span>
            <button disabled={Object.keys(ans).length < ITEMS.length} onClick={() => { setDone(true); window.scrollTo({ top: document.getElementById('actividad')!.offsetTop - 80, behavior: 'smooth' }); }} className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed">
              Ver mi resultado
            </button>
          </div>
        </div>
      )}

      {done && (
        <div className="glass-panel rounded-2xl border border-slate-700 p-6 sm:p-8 space-y-5">
          <div className="text-center">
            <div className={`text-6xl font-extrabold font-mono ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>{pct}%</div>
            <div className="text-sm text-slate-300 mt-1">{correct} de {ITEMS.length} respuestas correctas</div>
            <div className={`mt-3 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold border ${passed ? 'bg-emerald-950/70 text-emerald-300 border-emerald-800' : 'bg-amber-950/70 text-amber-300 border-amber-800'}`}>
              {passed ? 'Lograste el aprendizaje esperado' : 'Necesitas revisar o fortalecer algunos contenidos'}
            </div>
          </div>
          {toReview.length > 0 && (
            <p className="text-sm text-slate-300 text-center">Te conviene repasar: <strong className="text-cyan-300">{toReview.join(' · ')}</strong></p>
          )}
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => setShowKey(!showKey)} className="inline-flex items-center gap-2 px-4 py-2 text-sm text-slate-200 bg-slate-900 border border-slate-700 rounded-xl cursor-pointer hover:border-cyan-500/50">
              {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />} {showKey ? 'Ocultar respuestas' : 'Ver respuestas'}
            </button>
            <button onClick={reset} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl cursor-pointer">
              <RefreshCw className="w-4 h-4" /> Reintentar
            </button>
          </div>
          {showKey && (
            <div className="space-y-3 pt-4 border-t border-slate-800">
              {ITEMS.map((it, i) => {
                const ok = ans[i] === it.answer;
                return (
                  <div key={i} className="flex gap-3 text-sm">
                    {ok ? <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> : <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                    <div>
                      <div className="text-slate-200">{i + 1}. {it.q}</div>
                      <div className="text-emerald-300">Respuesta: {it.options[it.answer]}</div>
                      <div className="text-xs text-slate-400">{it.why} Fuente en el sitio: {it.ref}.</div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
