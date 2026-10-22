import React, { useState } from 'react';
import { Search, FileText, Sparkles, Copy, Check } from 'lucide-react';

interface HeroProps {
  onSearchClick: () => void;
  onDocsClick: () => void;
  onEvaluatorClick: () => void;
  onTeamClick?: () => void;
  totalStandards: number;
}

export const Hero: React.FC<HeroProps> = ({
  onSearchClick,
  onDocsClick,
  onEvaluatorClick,
  onTeamClick,
  totalStandards
}) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'python' | 'json' | 'cmmi'>('python');
  const [copied, setCopied] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const codeSnippets = {
    python: `class QualityStandardsFramework:
    """Combinación recomendada de normas vigentes para desarrollo y calidad."""
    def __init__(self, organization: str):
        self.organization = organization
        self.product_quality = "ISO/IEC 25010:2023 (9 características) & 25019:2023 (Calidad en uso)"
        self.lifecycle = "ISO/IEC/IEEE 12207:2026, 15289:2019, 29148:2018 & ISO/IEC 29110"
        self.testing_and_sqa = "ISO/IEC/IEEE 29119 (Partes 1-5) & IEEE 730-2026"
        self.quality_management = "ISO 9001:2026 & ISO/IEC/IEEE 90003:2018"
        self.security = ["ISO/IEC 27001:2022", "NIST SSDF SP 800-218 v1.1", "OWASP ASVS 5.0.0"]
        self.process_maturity = "CMMI V3.0 (2023 - ISACA Appraisal)"
        self.ai_governance = ["ISO/IEC 42001:2023", "ISO/IEC 5338:2023", "ISO/IEC 25059:2023"]`,
    json: `{
  "standard": "ISO/IEC 25010:2023",
  "note": "Reemplazó a 25010:2011. La calidad en uso se trata por separado en ISO/IEC 25019:2023",
  "product_quality_9_characteristics": {
    "1_adecuacion_funcional": ["completitud", "corrección", "pertinencia"],
    "2_eficiencia_del_desempeno": ["comportamiento_temporal", "capacidad", "utilizacion_de_recursos"],
    "3_compatibilidad": ["coexistencia", "interoperabilidad"],
    "4_capacidad_de_interaccion": ["aprendizaje", "operabilidad", "prevencion_errores", "inclusion", "asistencia"],
    "5_fiabilidad": ["ausencia_de_fallos", "disponibilidad", "tolerancia_a_fallos", "recuperabilidad"],
    "6_seguridad_security": ["confidencialidad", "integridad", "autenticidad", "trazabilidad", "resistencia"],
    "7_mantenibilidad": ["analizabilidad", "modificabilidad", "verificabilidad", "reusabilidad"],
    "8_flexibilidad": ["adaptabilidad", "instalabilidad", "sustituibilidad", "escalabilidad"],
    "9_seguridad_funcional_safety": ["evitar_danos_a_personas_bienes_negocios_software_o_medio_ambiente"]
  }
}`,
    cmmi: `# CMMI V3.0 (Lanzado en abril de 2023 - Administrado por ISACA)
# Nota: No es una norma ISO y no se certifica; la organización se somete a una evaluación (appraisal).
maturity_levels:
  level_1: "Inicial"
  level_2: "Gestionado"
  level_3: "Definido"
  level_4: "Gestionado cuantitativamente"
  level_5: "Optimizado"
v3_expanded_scope:
  - "Seguridad (Security)"
  - "Seguridad funcional (Safety)"
  - "Gestión de datos"
  - "Gestión de personas"
  - "Trabajo virtual"`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-6 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Decorative center radial glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-cyan-500/15 via-indigo-600/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      {/* Top Monospace Pill */}
      <div className="flex justify-center mb-5">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-cyan-800/50 shadow-inner shadow-cyan-950/40 text-xs font-mono tracking-wider text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>INGENIERÍA DE SOFTWARE · NORMAS INTERNACIONALES Y MARCOS DE CALIDAD</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Normas Vigentes para el{' '}
          <span className="text-gradient-cyan">Desarrollo de Software</span>{' '}
          y la <span className="text-gradient-purple">Calidad</span>
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          La calidad del software no se limita a que un programa “funcione”: debe cumplir necesidades funcionales, ser seguro, fiable, fácil de utilizar, eficiente, mantenible y adaptable, respaldado por procesos controlados, evidencia verificable y mejora continua (<span className="text-cyan-300 font-medium">Familia ISO/IEC 25000 SQuaRE</span>,{' '}
          <span className="text-sky-300 font-medium">ISO/IEC/IEEE 12207:2026</span>,{' '}
          <span className="text-indigo-300 font-medium">ISO 9001:2026</span>,{' '}
          <span className="text-purple-300 font-medium">CMMI V3.0</span> e{' '}
          <span className="text-emerald-300 font-medium">IA ISO/IEC 42001/5338/25059</span>).
        </p>

        {/* Presenters Callout */}
        <div className="pt-1 flex items-center justify-center">
          <button
            onClick={onTeamClick}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-xs text-slate-300 hover:text-cyan-300 transition-colors cursor-pointer"
          >
            <span className="text-cyan-400 font-mono font-semibold">Expositores:</span>
            <span>Leonardo · Miguel · Franco.A · Franco.P · Tadeo</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onSearchClick}
            className="flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all transform active:scale-95 cursor-pointer"
          >
            <Search className="w-4 h-4" />
            <span>Explorar Normas y Tabla Resumen</span>
          </button>

          <button
            onClick={onDocsClick}
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-500/40 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Aplicación en Ágil y DevOps</span>
          </button>

          <button
            onClick={onEvaluatorClick}
            className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700 hover:border-indigo-500/40 rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Evaluador CMMI V3.0 & ISO</span>
          </button>
        </div>
      </div>

      {/* Terminal Code Preview */}
      <div className="mt-8 max-w-3xl mx-auto">
        <button onClick={() => setShowCode(!showCode)} className="mx-auto mb-3 flex items-center gap-2 text-xs font-mono text-cyan-300 hover:text-white cursor-pointer">{showCode ? '▾ Ocultar resumen en código' : '▸ Ver resumen en código'}</button>
        {showCode && (
        <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#090d16]/90 shadow-2xl shadow-black/60 backdrop-blur-xl">
          {/* Terminal Window Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              
              {/* Tabs */}
              <div className="ml-3 flex items-center gap-1">
                <button
                  onClick={() => setActiveCodeTab('python')}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                    activeCodeTab === 'python'
                      ? 'bg-slate-800 text-cyan-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  combinacion_normas.py
                </button>
                <button
                  onClick={() => setActiveCodeTab('json')}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                    activeCodeTab === 'json'
                      ? 'bg-slate-800 text-indigo-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  iso_25010_2023.json
                </button>
                <button
                  onClick={() => setActiveCodeTab('cmmi')}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                    activeCodeTab === 'cmmi'
                      ? 'bg-slate-800 text-purple-300 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  cmmi_v3_isaca.yml
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-flex text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded">
                DOCUMENTO OFICIAL
              </span>
              <button
                onClick={handleCopyCode}
                className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
                title="Copiar código"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Code Content */}
          <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] text-slate-300 overflow-x-auto leading-relaxed bg-[#070b14]/70 max-h-[260px] overflow-y-auto">
            <pre>
              <code>{codeSnippets[activeCodeTab]}</code>
            </pre>
          </div>
        </div>
        )}
      </div>

      {/* 4 Stat Metric Cards */}
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
        <button
          onClick={onTeamClick}
          className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 text-center border border-slate-800/80 transition-all cursor-pointer group"
        >
          <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums group-hover:scale-105 transition-transform">
            5
          </div>
          <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium group-hover:text-cyan-300">
            Integrantes Expositores
          </div>
        </button>

        <div className="glass-panel rounded-2xl p-4 sm:p-5 text-center border border-slate-800/80 transition-transform hover:-translate-y-0.5">
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-mono tabular-nums">
            {totalStandards}
          </div>
          <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
            Bloques Normativos y Marcos
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-4 sm:p-5 text-center border border-slate-800/80 transition-transform hover:-translate-y-0.5">
          <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono tabular-nums">
            9
          </div>
          <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
            Características ISO/IEC 25010:2023
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-4 sm:p-5 text-center border border-slate-800/80 transition-transform hover:-translate-y-0.5">
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
            5
          </div>
          <div className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
            Niveles CMMI V3.0 (ISACA)
          </div>
        </div>
      </div>
    </section>
  );
};
