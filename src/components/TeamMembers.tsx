import React from 'react';
import { Terminal, ShieldCheck, Layers, GitBranch, Cpu, Award } from 'lucide-react';

export interface Member {
  name: string;
  role: string;
  specialty: string;
  icon: React.ReactNode;
  accentBg: string;
  accentText: string;
  borderColor: string;
  badge: string;
}

export const TeamMembers: React.FC = () => {
  const members: Member[] = [
    {
      name: 'Leonardo',
      role: 'Líder de Proyecto & Coordinación',
      specialty: 'Ciclo de Vida ISO/IEC/IEEE 12207:2026, ISO/IEC 29110 (VSE) e IA (ISO/IEC 42001, 5338 y 25059)',
      icon: <Terminal className="w-5 h-5" />,
      accentBg: 'from-cyan-500 to-sky-600',
      accentText: 'text-cyan-400',
      borderColor: 'hover:border-cyan-500/50',
      badge: 'LÍDER TÉCNICO'
    },
    {
      name: 'Miguel',
      role: 'Especialista en Normas ISO',
      specialty: 'Familia ISO/IEC 25000 (SQuaRE), ISO/IEC 25010:2023 (9 características), 25019:2023 e ISO 9001:2026',
      icon: <ShieldCheck className="w-5 h-5" />,
      accentBg: 'from-purple-500 to-indigo-600',
      accentText: 'text-purple-400',
      borderColor: 'hover:border-purple-500/50',
      badge: 'ESTÁNDARES ISO'
    },
    {
      name: 'Franco.A',
      role: 'Ingeniería de Procesos & CMMI',
      specialty: 'CMMI V3.0 (2023 - ISACA, Niveles 1 a 5, Appraisal) e ISO/IEC 33000 (SPICE)',
      icon: <Layers className="w-5 h-5" />,
      accentBg: 'from-sky-500 to-blue-600',
      accentText: 'text-sky-400',
      borderColor: 'hover:border-sky-500/50',
      badge: 'CMMI V3.0'
    },
    {
      name: 'Franco.P',
      role: 'Pruebas, SQA & Evidencia Ágil',
      specialty: 'ISO/IEC/IEEE 29119 (Partes 1–5), IEEE 730-2026 (SQA) y Aplicación Práctica en Ágil y DevOps',
      icon: <GitBranch className="w-5 h-5" />,
      accentBg: 'from-indigo-500 to-violet-600',
      accentText: 'text-indigo-400',
      borderColor: 'hover:border-indigo-500/50',
      badge: 'PRUEBAS & SQA'
    },
    {
      name: 'Tadeo',
      role: 'Seguridad & Desarrollo Seguro',
      specialty: 'ISO/IEC 27001:2022, 27002:2022, NIST SSDF (SP 800-218 v1.1), OWASP ASVS 5.0.0 e ISO/IEC 5055:2021',
      icon: <Cpu className="w-5 h-5" />,
      accentBg: 'from-emerald-500 to-teal-600',
      accentText: 'text-emerald-400',
      borderColor: 'hover:border-emerald-500/50',
      badge: 'SEGURIDAD & DEVSECOPS'
    }
  ];

  return (
    <section id="integrantes" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header section matching screenshot 1 style */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
          <span>● // EQUIPO EXPOSITOR & DESARROLLO 2026</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
          Integrantes del Proyecto
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Equipo responsable de la investigación teórica, estructuración de normas vigentes, diseño interactivo y presentación pública de esta plataforma.
        </p>
      </div>

      {/* 5 Cards grid - styled matching screenshot 1 avatar cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map((member, index) => (
          <div
            key={index}
            className={`glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800/80 transition-all duration-300 text-center flex flex-col items-center justify-between group hover:-translate-y-1 ${member.borderColor}`}
          >
            <div className="flex flex-col items-center w-full">
              {/* Circular Icon with gradient glow */}
              <div className="relative mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${member.accentBg} p-[1px] shadow-lg shadow-black/50 group-hover:shadow-cyan-500/20 transition-all duration-300`}>
                  <div className="w-full h-full bg-[#080d19] rounded-[15px] flex items-center justify-center text-white">
                    {member.icon}
                  </div>
                </div>
                <span className="absolute -bottom-1 -right-1 text-[9px] font-mono font-bold px-1.5 py-0.2 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                  0{index + 1}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-base font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                {member.name}
              </h3>

              {/* Role */}
              <p className={`text-xs font-semibold ${member.accentText} mt-1 mb-2`}>
                {member.role}
              </p>

              {/* Specialty note */}
              <p className="text-xs text-slate-300 leading-relaxed text-center">
                {member.specialty}
              </p>
            </div>

            {/* Bottom badge */}
            <div className="mt-4 pt-3 border-t border-slate-800/70 w-full">
              <span className="inline-block text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2.5 py-0.5 rounded border border-slate-800">
                {member.badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Presentation Callout & ZIP Download Banner */}
      <div className="mt-8 glass-panel rounded-2xl p-5 sm:p-6 border border-slate-700/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 bg-gradient-to-r from-slate-900/90 via-cyan-950/20 to-indigo-950/30">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">
                Proyecto Oficial de Exposición & Auditoría Técnica
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-800 px-2 py-0.5 rounded">
                COMPLETO & LISTO
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">
              Desarrollado y presentado por <strong>Leonardo</strong>, <strong>Miguel</strong>, <strong>Franco.A</strong>, <strong>Franco.P</strong> y <strong>Tadeo</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
