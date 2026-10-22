import React, { useState } from 'react';
import { Sparkles, Settings, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenAdmin: () => void;
  onOpenEvaluator: () => void;
  totalStandardsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenAdmin,
  onOpenEvaluator,
  totalStandardsCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'identificacion', label: 'Inicio' },
    { id: 'integrantes', label: 'Equipo' },
    { id: 'normativas', label: 'Marco nacional' },
    { id: 'catalogo', label: 'Normas' },
    { id: 'comparador', label: 'Comparador' },
    { id: 'agil', label: 'Ágil' },
    { id: 'actividad', label: 'Actividad' },
    { id: 'evaluador', label: 'Evaluador' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shadow-sky-950/20 border border-slate-700/50">
        
        {/* Left: Brand Wordmark (Single visual unit per Top Bar Contract) */}
        <div 
          onClick={() => {
            setActiveTab('catalogo');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-400/40 transition-shadow">
            <div className="w-full h-full bg-[#080d1a] rounded-[11px] flex items-center justify-center text-cyan-400 font-mono text-sm font-bold">
              &lt;/&gt;
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors font-mono">
                NORMA<span className="text-cyan-400">·SOFT</span>
              </span>
              <span className="hidden md:inline-flex text-[11px] font-mono text-cyan-300/80 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded-full">
                ISO · IEEE · CMMI V3.0
              </span>
            </div>
            <span className="text-[11px] text-slate-400 tracking-wide font-normal">
              Estándares de Software & Marcos de Calidad
            </span>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => {
                  setActiveTab(link.id);
                  const el = document.getElementById(link.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  isActive
                    ? 'text-cyan-300 bg-cyan-950/70 border border-cyan-700/50 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Admin panel trigger */}
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/70 rounded-xl transition-all cursor-pointer group"
            title="Panel de Administración"
          >
            <Settings className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors group-hover:rotate-45" />
            <span className="hidden sm:inline">Admin</span>
            <span className="text-[10px] font-mono bg-slate-800 px-1.5 py-0.2 rounded text-slate-400 border border-slate-700">
              {totalStandardsCount}
            </span>
          </button>

          {/* Primary CTA: Evaluarme */}
          <button
            onClick={onOpenEvaluator}
            className="flex items-center gap-2 px-4 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/35 transition-all transform active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-100" />
            <span>Evaluarme</span>
          </button>

          {/* Mobile menu hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto glass-panel rounded-2xl p-4 border border-slate-700/60 shadow-xl space-y-2 animate-fadeIn">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
                const el = document.getElementById(link.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full text-left px-3 py-2 text-sm text-slate-200 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </button>
          ))}
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center">
            <button
              onClick={() => {
                onOpenAdmin();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-200 py-1"
            >
              <Settings className="w-4 h-4" />
              <span>Panel de Administración ({totalStandardsCount} normas)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
