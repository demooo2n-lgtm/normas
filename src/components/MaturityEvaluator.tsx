import React, { useState } from 'react';
import { CheckCircle2, RefreshCw, Trophy, ArrowRight, ShieldCheck } from 'lucide-react';
import { MATURITY_QUESTIONS } from '../data/initialStandards';

interface MaturityEvaluatorProps {
  onClose?: () => void;
}

export const MaturityEvaluator: React.FC<MaturityEvaluatorProps> = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const currentQ = MATURITY_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < MATURITY_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
  };

  // Calculate scores
  const totalQuestions = MATURITY_QUESTIONS.length;
  let totalCmmi = 0;
  let totalIso = 0;

  Object.entries(answers).forEach(([qIdx, optIdx]) => {
    const q = MATURITY_QUESTIONS[Number(qIdx)];
    if (q && q.options[optIdx]) {
      totalCmmi += q.options[optIdx].cmmiScore;
      totalIso += q.options[optIdx].isoScore;
    }
  });

  const avgCmmi = Object.keys(answers).length > 0 ? (totalCmmi / Object.keys(answers).length).toFixed(1) : '1.0';
  const avgIso = Object.keys(answers).length > 0 ? Math.round(totalIso / Object.keys(answers).length) : 0;

  const getCmmiLevelName = (score: number) => {
    if (score < 1.8) return { level: 'Nivel 1: Inicial', desc: 'Procesos impredecibles y reactivos; es necesario estabilizar el control y la evidencia verificable.' };
    if (score < 2.8) return { level: 'Nivel 2: Gestionado', desc: 'Procesos planificados y controlados a nivel de proyecto.' };
    if (score < 3.8) return { level: 'Nivel 3: Definido', desc: 'Buenas prácticas institucionalizadas a nivel organizacional (incluyendo seguridad, datos, personas y trabajo virtual en CMMI V3.0).' };
    if (score < 4.6) return { level: 'Nivel 4: Gestionado cuantitativamente', desc: 'Desempeño medido y controlado estadísticamente.' };
    return { level: 'Nivel 5: Optimizado', desc: 'Mejora sostenida del desempeño organizacional basada en mediciones cuantitativas (evaluada mediante appraisal).' };
  };

  const cmmiResult = getCmmiLevelName(Number(avgCmmi));

  return (
    <section id="evaluador" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto scroll-mt-24">
      {/* Header Badge */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
          <span>● AUTOEVALUACIÓN NORMATIVA & CMMI V3.0</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
          Simulador de Madurez y Conformidad Normativa
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Evalúa a tu organización frente a ISO/IEC 25010:2023 (9 características), ISO/IEC/IEEE 12207:2026, ISO 9001:2026, ISO/IEC/IEEE 29119, IEEE 730-2026, ISO/IEC 27001:2022, NIST SSDF, OWASP ASVS 5.0.0, CMMI V3.0 e Inteligencia Artificial.
        </p>
      </div>

      <div className="glass-panel rounded-2xl border border-slate-700/80 shadow-2xl p-6 sm:p-8">
        {!showResults ? (
          <div>
            {/* Progress Bar & Counter */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
              <span className="font-mono text-cyan-400">
                Pregunta {currentQuestionIndex + 1} de {totalQuestions}
              </span>
              <span className="font-mono text-right">{currentQ.area}</span>
            </div>

            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-4">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-indigo-600 h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>

            {/* Interactive Question Step Pills */}
            <div className="flex flex-wrap items-center gap-1.5 mb-6">
              {MATURITY_QUESTIONS.map((q, idx) => {
                const isCurrent = idx === currentQuestionIndex;
                const isAnswered = answers[idx] !== undefined;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    title={q.area}
                    className={`w-7 h-7 rounded-lg text-[11px] font-mono font-semibold transition-all cursor-pointer flex items-center justify-center border ${
                      isCurrent
                        ? 'bg-cyan-500 text-slate-950 border-cyan-300 shadow-md shadow-cyan-500/30 scale-105'
                        : isAnswered
                        ? 'bg-cyan-950/80 text-cyan-300 border-cyan-700/60 hover:bg-cyan-900/70'
                        : 'bg-slate-900/70 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Question Text */}
            <div className="space-y-2 mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {currentQ.question}
              </h3>
              <p className="text-xs text-slate-400 italic">
                {currentQ.explanation}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((opt, idx) => {
                const isSelected = answers[currentQuestionIndex] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-cyan-950/80 border-cyan-400/80 shadow-md shadow-cyan-950/50 text-white'
                        : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-800/50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected ? 'border-cyan-400 bg-cyan-500 text-black' : 'border-slate-600'
                    }`}>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-black inline-block" />}
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs sm:text-sm font-medium leading-relaxed block">
                        {opt.text}
                      </span>
                      {isSelected && (
                        <span className="text-[11px] font-mono text-cyan-300 block pt-1 border-t border-cyan-900/60">
                          {opt.feedback}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer Navigation */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                Anterior
              </button>

              <button
                onClick={handleNext}
                disabled={answers[currentQuestionIndex] === undefined}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed shadow-md shadow-cyan-950 transition-all cursor-pointer"
              >
                <span>{currentQuestionIndex === totalQuestions - 1 ? 'Calcular Resultados' : 'Siguiente'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Results View */
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center space-y-2 pb-6 border-b border-slate-800">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-500 to-indigo-600 mx-auto flex items-center justify-center shadow-lg shadow-cyan-500/20 text-white mb-2">
                <Trophy className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Diagnóstico de Madurez (CMMI V3.0) y Calidad (ISO/IEEE)
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
                Recuerda que CMMI V3.0 (ISACA) no es una norma ISO y no se certifica: la organización se somete a una evaluación o <em>appraisal</em>.
              </p>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-900/80 border border-indigo-900/40 text-center space-y-1">
                <span className="text-xs font-mono text-indigo-400 uppercase">
                  Nivel Estimado para Appraisal CMMI V3.0
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {cmmiResult.level}
                </div>
                <p className="text-xs text-slate-300 pt-1">
                  {cmmiResult.desc}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-900/80 border border-cyan-900/40 text-center space-y-1">
                <span className="text-xs font-mono text-cyan-400 uppercase">
                  Alineación con Normas ISO / IEEE / NIST / OWASP
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-300 font-mono">
                  {avgIso}%
                </div>
                <p className="text-xs text-slate-300 pt-1">
                  Porcentaje promedio frente a las ediciones vigentes del marco normativo.
                </p>
              </div>
            </div>

            {/* Score Breakdown by Standard Area */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center justify-between">
                <span>Desglose por Norma y Área Técnica ({Object.keys(answers).length}/{totalQuestions} evaluadas)</span>
                <span>Alineación</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {MATURITY_QUESTIONS.map((q, idx) => {
                  const ansIdx = answers[idx];
                  const selectedOpt = ansIdx !== undefined ? q.options[ansIdx] : null;
                  const score = selectedOpt ? selectedOpt.isoScore : 0;
                  return (
                    <div key={q.id} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] gap-2">
                        <span className="text-slate-300 font-medium truncate" title={q.area}>
                          {idx + 1}. {q.area}
                        </span>
                        <span className="font-mono text-cyan-300 font-semibold shrink-0 tabular-nums">
                          {score}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            score >= 80 ? 'bg-emerald-500' : score >= 45 ? 'bg-amber-400' : 'bg-rose-500'
                          }`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Steps Recommendations */}
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Combinación Recomendada de Normas Vigentes</span>
              </h4>
              <ul className="text-xs text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Calidad del producto y en uso:</strong> Especificar las 9 características de ISO/IEC 25010:2023 y evaluar la calidad en uso en contexto real con ISO/IEC 25019:2023.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Ciclo de vida, pruebas y SQA:</strong> Organizar el ciclo de vida con ISO/IEC/IEEE 12207:2026 (o ISO/IEC 29110 para VSE de hasta 25 personas), pruebas con ISO/IEC/IEEE 29119 y aseguramiento de calidad con IEEE 730-2026.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong>Gestión, seguridad e IA:</strong> Aplicar ISO 9001:2026 para gestión de calidad, ISO/IEC 27001:2022 + NIST SSDF (SP 800-218 v1.1) + OWASP ASVS 5.0.0 para seguridad, e ISO/IEC 42001:2023, 5338:2023 y 25059:2023 en sistemas de IA.
                  </span>
                </li>
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={handleRestart}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Repetir Evaluación</span>
              </button>

              <a
                href="#agil"
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 transition-colors cursor-pointer"
              >
                Ver Aplicación Práctica en Ágil y DevOps
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
