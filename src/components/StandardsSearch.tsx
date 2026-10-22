import React, { useState, useMemo } from 'react';
import { Search, ArrowUpRight, BookOpen, X, Table } from 'lucide-react';
import { Standard } from '../types/standards';
import { SUMMARY_TABLE_DATA } from '../data/initialStandards';

interface StandardsSearchProps {
  standards: Standard[];
  onSelectStandard: (standard: Standard) => void;
  selectedPhase: string | null;
  onClearPhase: () => void;
}

export const StandardsSearch: React.FC<StandardsSearchProps> = ({
  standards,
  onSelectStandard,
  selectedPhase,
  onClearPhase
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories: { id: string; label: string; count: number }[] = useMemo(() => {
    const counts: Record<string, number> = {
      all: standards.length,
      iso: standards.filter(s => s.category === 'iso').length,
      cmmi: standards.filter(s => s.category === 'cmmi').length,
      documentation: standards.filter(s => s.category === 'documentation').length,
      security: standards.filter(s => s.category === 'security').length,
      ai: standards.filter(s => s.category === 'ai').length,
      complementary: standards.filter(s => s.category === 'complementary').length,
      agile: standards.filter(s => s.category === 'agile').length
    };

    return [
      { id: 'all', label: 'Todos', count: counts.all },
      { id: 'iso', label: 'Normas ISO / SQuaRE / SGC', count: counts.iso },
      { id: 'cmmi', label: 'Modelo CMMI V3.0', count: counts.cmmi },
      { id: 'documentation', label: 'Pruebas, SQA & Requisitos', count: counts.documentation },
      { id: 'security', label: 'Seguridad & DevSecOps', count: counts.security },
      { id: 'ai', label: 'Inteligencia Artificial', count: counts.ai },
      { id: 'complementary', label: 'Complementarias & Safety', count: counts.complementary },
      { id: 'agile', label: 'Prácticas y marcos ágiles (complementarios)', count: counts.agile }
    ];
  }, [standards]);

  const filteredStandards = useMemo(() => {
    return standards.filter((item) => {
      if (selectedPhase && item.sdlcPhase !== selectedPhase) {
        return false;
      }

      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inCode = item.code.toLowerCase().includes(q);
        const inTitle = item.title.toLowerCase().includes(q);
        const inSummary = item.summary.toLowerCase().includes(q);
        const inDesc = item.description.toLowerCase().includes(q);
        const inPillars = item.keyPillars.some(p => p.toLowerCase().includes(q));
        const inOrg = item.organization.toLowerCase().includes(q);
        if (!inCode && !inTitle && !inSummary && !inDesc && !inPillars && !inOrg) {
          return false;
        }
      }

      return true;
    });
  }, [standards, selectedPhase, selectedCategory, searchQuery]);

  const getStatusStyle = (status: Standard['status']) => {
    switch (status) {
      case 'Vigente':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-800/60';
      case 'Vigente (en revisión)':
        return 'bg-amber-950/70 text-amber-300 border-amber-800/60';
      case 'Borrador':
        return 'bg-rose-950/70 text-rose-300 border-rose-800/60';
      case 'Complementario':
        return 'bg-indigo-950/70 text-indigo-300 border-indigo-800/60';
      default:
        return 'bg-slate-900 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="catalogo" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Summary Table from the Official Document */}
      <div className="mb-14">
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
            <Table className="w-3.5 h-3.5" />
            <span>SÍNTESIS NORMATIVA GENERAL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Panorama de Normas y Marcos por Área
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
            No todas las normas tienen el mismo propósito: algunas definen características de calidad del producto; otras organizan el ciclo de vida, las pruebas, la seguridad, la gestión organizacional o la inteligencia artificial.
          </p>
        </div>

        <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900/95 text-cyan-300 font-mono text-xs uppercase border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6">Área</th>
                  <th className="py-3.5 px-4 sm:px-6">Norma o marco principal</th>
                  <th className="py-3.5 px-4 sm:px-6">Finalidad</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70">
                {SUMMARY_TABLE_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-900/50 transition-colors">
                    <td className="py-3 px-4 sm:px-6 font-semibold text-white whitespace-nowrap">
                      {row.area}
                    </td>
                    <td className="py-3 px-4 sm:px-6 font-mono text-cyan-300 whitespace-nowrap">
                      {row.mainStandard}
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-slate-300">
                      {row.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Header section for Search */}
      <div className="text-center space-y-2 mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-[11px] font-mono tracking-wider text-cyan-400 uppercase">
          <span>● CATÁLOGO DETALLADO Y BUSCADOR</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
          Buscador de Normas ISO, IEEE, CMMI V3.0, IA y Marcos
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto">
          Consulta las ediciones vigentes, estados reales (Vigente, Vigente en revisión, Borrador o Complementario), características y listas de verificación.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="max-w-3xl mx-auto mb-6">
        <div className="relative glass-panel rounded-2xl p-2 border border-slate-700 shadow-xl focus-within:border-cyan-500/80 transition-colors">
          <div className="flex items-center gap-3 px-3 py-1">
            <Search className="w-5 h-5 text-cyan-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por código o tema (ej: 25010:2023, 12207:2026, 9001:2026, CMMI V3.0, IEEE 730-2026, ASVS 5.0.0, 42001)..."
              className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                title="Limpiar búsqueda"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Phase tag alert if active */}
        {selectedPhase && (
          <div className="mt-2.5 flex items-center justify-between px-3 py-1.5 rounded-lg bg-cyan-950/40 border border-cyan-800/50 text-xs text-cyan-300">
            <span>
              Filtrado por fase: <strong>{selectedPhase}</strong>
            </span>
            <button
              onClick={onClearPhase}
              className="text-xs underline text-cyan-400 hover:text-white cursor-pointer"
            >
              Quitar filtro
            </button>
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-4 mb-8 text-xs font-medium">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 border ${
                isSelected
                  ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/60 shadow-md shadow-cyan-950/40 font-semibold'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                isSelected ? 'bg-cyan-900/90 text-cyan-200' : 'bg-slate-800 text-slate-400'
              }`}>
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Results Count Strip */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-6 px-1">
        <div>
          Mostrando <strong className="text-white tabular-nums">{filteredStandards.length}</strong> registro(s)
        </div>
        {searchQuery && (
          <div className="text-cyan-400 font-mono">
            Término: "{searchQuery}"
          </div>
        )}
      </div>

      {/* Grid of Cards */}
      {filteredStandards.length === 0 ? (
        <div className="glass-panel rounded-2xl p-10 text-center border border-slate-800 max-w-lg mx-auto">
          <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-white">No se encontraron resultados</h3>
          <p className="text-xs text-slate-400 mt-1">
            Intenta con otro término o selecciona "Todos".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              if (selectedPhase) onClearPhase();
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold text-cyan-400 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-800/60 rounded-xl transition-colors cursor-pointer"
          >
            Restablecer Filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStandards.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                {/* Header Status & Year */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-wider font-semibold border ${getStatusStyle(item.status)}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>Estado: {item.status}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                    Edición: {item.year}
                  </span>
                </div>

                {/* Standard Code & Title */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.code}
                </h3>
                <p className="text-xs font-medium text-cyan-400/90 mt-0.5 mb-2">
                  {item.title}
                </p>

                {/* Summary */}
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Key feature tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.keyPillars.slice(0, 2).map((pillar, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/70 border border-slate-800 text-slate-300 truncate max-w-[230px]"
                    >
                      {pillar}
                    </span>
                  ))}
                  {item.keyPillars.length > 2 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-900/70 text-slate-400 border border-slate-800">
                      +{item.keyPillars.length - 2}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom action row */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 truncate max-w-[140px]" title={item.organization}>
                  {item.organization}
                </span>

                <button
                  onClick={() => onSelectStandard(item)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-cyan-600 border border-slate-700 hover:border-cyan-500 shadow-sm transition-all cursor-pointer group-hover:bg-cyan-600"
                >
                  <span>VER DETALLE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
