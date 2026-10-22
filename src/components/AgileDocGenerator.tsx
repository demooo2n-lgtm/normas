import React, { useState } from 'react';
import { FileText, Copy, Download, Check, Sparkles, Code, CheckCircle2, ChevronRight } from 'lucide-react';
import { AgileTemplate } from '../types/standards';

interface AgileDocGeneratorProps {
  templates: AgileTemplate[];
}

export const AgileDocGenerator: React.FC<AgileDocGeneratorProps> = ({ templates }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(templates[0]?.id || 'tpl-dod');
  const [copied, setCopied] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const currentTemplate = templates.find(t => t.id === selectedTemplateId) || templates[0];

  const handleCopyMarkdown = () => {
    if (!currentTemplate) return;
    navigator.clipboard.writeText(currentTemplate.markdownContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadMarkdown = () => {
    if (!currentTemplate) return;
    const blob = new Blob([currentTemplate.markdownContent], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${currentTemplate.id}.md`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2000);
  };

  return (
    <section id="agil" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      {/* Header Badge */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
          <span>● PRÁCTICAS Y MARCOS ÁGILES (COMPLEMENTARIOS)</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
          Aplicación Práctica en Proyectos Ágiles y DevOps
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-3xl mx-auto">
          Las normas no impiden trabajar con Scrum, Kanban o DevOps. La meta no es producir documentos innecesarios, sino generar evidencia suficiente para demostrar que el producto satisface sus requisitos y que el proceso es repetible, seguro y mejorable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Template Selector list (Left 4 cols) */}
        <div className="lg:col-span-4 space-y-2.5">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-1 mb-2">
            Selecciona una Plantilla Ágil:
          </div>

          {templates.map((tpl) => {
            const isSelected = selectedTemplateId === tpl.id;
            return (
              <button
                key={tpl.id}
                onClick={() => setSelectedTemplateId(tpl.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-slate-800/90 border-cyan-500/80 shadow-lg shadow-cyan-950/40 text-white'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-700">
                      {tpl.category}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {tpl.difficulty}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {tpl.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {tpl.description}
                  </p>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${
                  isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Template Preview and Actions (Right 8 cols) */}
        <div className="lg:col-span-8 glass-panel rounded-2xl border border-slate-700 shadow-xl overflow-hidden">
          {/* Header toolbar */}
          <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400">
                  {currentTemplate.category}
                </span>
                <span className="text-slate-500">·</span>
                <span className="text-xs text-slate-400">
                  Norma sugerida: <strong className="text-slate-200">{currentTemplate.recommendedNorm}</strong>
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {currentTemplate.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyMarkdown}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
                title="Copiar contenido Markdown"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado' : 'Copiar Markdown'}</span>
              </button>

              <button
                onClick={handleDownloadMarkdown}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-md shadow-cyan-950/50 transition-colors cursor-pointer"
                title="Descargar archivo .md"
              >
                {downloadSuccess ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" /> : <Download className="w-3.5 h-3.5" />}
                <span>{downloadSuccess ? 'Descargado' : 'Descargar .md'}</span>
              </button>
            </div>
          </div>

          {/* Description banner */}
          <div className="px-5 py-3 bg-cyan-950/30 border-b border-cyan-900/30 text-xs text-cyan-200/90 flex items-center justify-between">
            <span>{currentTemplate.description}</span>
            <span className="font-mono text-slate-400 ml-2 whitespace-nowrap">{currentTemplate.estimatedTime}</span>
          </div>

          {/* Markdown Content Viewer */}
          <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 bg-[#070b14]/90 overflow-x-auto max-h-[500px] overflow-y-auto leading-relaxed">
            <pre className="whitespace-pre-wrap font-mono">
              <code>{currentTemplate.markdownContent}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
