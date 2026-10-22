import React, { useState } from 'react';
import { X, Plus, Edit2, Trash2, Download, Upload, RotateCcw, Check, AlertTriangle, ShieldCheck, Database, Search } from 'lucide-react';
import { Standard, StandardCategory } from '../types/standards';

interface AdminPanelModalProps {
  standards: Standard[];
  onClose: () => void;
  onSaveStandard: (standard: Standard) => void;
  onDeleteStandard: (id: string) => void;
  onResetDefaults: () => void;
  onImportStandards: (standards: Standard[]) => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  standards,
  onClose,
  onSaveStandard,
  onDeleteStandard,
  onResetDefaults,
  onImportStandards
}) => {
  const [adminSearch, setAdminSearch] = useState('');
  const [editingStandard, setEditingStandard] = useState<Standard | null>(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState<Partial<Standard>>({
    id: '',
    code: '',
    title: '',
    category: 'iso',
    badge: 'CALIDAD · VIGENTE',
    status: 'Vigente',
    organization: '',
    year: '2026',
    summary: '',
    description: '',
    sdlcPhase: 'Arquitectura',
    keyPillars: [],
    documentationArtifacts: [],
    checklist: [],
    practicalExample: ''
  });

  const [pillarsInput, setPillarsInput] = useState('');
  const [artifactsInput, setArtifactsInput] = useState('');
  const [checklistInput, setChecklistInput] = useState('');

  const showNotification = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 2500);
  };

  const handleStartCreate = () => {
    setFormData({
      id: `std-${Date.now()}`,
      code: '',
      title: '',
      category: 'iso',
      badge: 'ESTÁNDAR · VIGENTE',
      status: 'Vigente',
      organization: 'ISO / IEC',
      year: '2026',
      summary: '',
      description: '',
      sdlcPhase: 'Calidad de Producto',
      keyPillars: [],
      documentationArtifacts: [],
      checklist: [],
      practicalExample: ''
    });
    setPillarsInput('');
    setArtifactsInput('');
    setChecklistInput('');
    setIsCreatingNew(true);
    setEditingStandard(null);
  };

  const handleStartEdit = (standard: Standard) => {
    setFormData({ ...standard });
    setPillarsInput(standard.keyPillars.join('\n'));
    setArtifactsInput(standard.documentationArtifacts.join('\n'));
    setChecklistInput(standard.checklist.join('\n'));
    setEditingStandard(standard);
    setIsCreatingNew(false);
  };

  const handleCancelForm = () => {
    setEditingStandard(null);
    setIsCreatingNew(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.code || !formData.title || !formData.summary) {
      alert('Por favor completa los campos requeridos (Código, Título y Resumen).');
      return;
    }

    const updated: Standard = {
      id: formData.id || `std-${Date.now()}`,
      code: formData.code.trim(),
      title: formData.title.trim(),
      category: formData.category || 'iso',
      badge: formData.badge || `${formData.category?.toUpperCase()} · ${formData.status?.toUpperCase() || 'VIGENTE'}`,
      status: formData.status || 'Vigente',
      organization: formData.organization || 'Estándar de Calidad',
      year: formData.year || '2026',
      summary: formData.summary.trim(),
      description: formData.description?.trim() || formData.summary.trim(),
      sdlcPhase: formData.sdlcPhase || 'Calidad de Producto',
      keyPillars: pillarsInput.split('\n').map(s => s.trim()).filter(Boolean),
      documentationArtifacts: artifactsInput.split('\n').map(s => s.trim()).filter(Boolean),
      checklist: checklistInput.split('\n').map(s => s.trim()).filter(Boolean),
      practicalExample: formData.practicalExample?.trim() || 'Implementación práctica en proyectos de ingeniería.'
    };

    onSaveStandard(updated);
    showNotification(isCreatingNew ? 'Nuevo estándar creado exitosamente' : 'Estándar actualizado');
    handleCancelForm();
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(standards, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `normas_software_${new Date().toISOString().slice(0, 10)}.json`);
    dlAnchorElem.click();
    showNotification('Catálogo exportado en formato JSON');
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0].code) {
          onImportStandards(parsed);
          showNotification(`Se importaron ${parsed.length} estándares correctamente`);
        } else {
          alert('El archivo no contiene un formato válido de estándares de software.');
        }
      } catch (err) {
        alert('Error al leer el archivo JSON.');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const filteredAdminList = standards.filter(s => {
    if (!adminSearch) return true;
    const q = adminSearch.toLowerCase();
    return s.code.toLowerCase().includes(q) || s.title.toLowerCase().includes(q) || s.organization.toLowerCase().includes(q);
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto glass-panel rounded-2xl border border-slate-700 shadow-2xl p-5 sm:p-7 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Panel de Administración de Normas y Estándares
              </h2>
              <p className="text-xs text-slate-400">
                Gestiona el catálogo, agrega nuevas normativas y respalda los datos del sistema.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar panel de administración"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className="my-3 p-3 rounded-xl bg-emerald-950/80 border border-emerald-700 text-xs font-medium text-emerald-300 flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Global Toolbar */}
        <div className="my-5 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleStartCreate}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-950 transition-colors cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Nuevo Estándar</span>
            </button>

            <button
              onClick={handleExportJSON}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar JSON</span>
            </button>

            <label className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              <span>Importar JSON</span>
              <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
            </label>
          </div>

          <button
            onClick={() => {
              if (confirm('¿Restaurar los estándares originales de fábrica? Se sobrescribirán los cambios.')) {
                onResetDefaults();
                showNotification('Catálogo restablecido con los valores por defecto');
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 transition-colors cursor-pointer"
            title="Restaurar valores de fábrica"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Restaurar Fábrica</span>
          </button>
        </div>

        {/* If Creating or Editing, Show Form */}
        {(isCreatingNew || editingStandard) ? (
          <form onSubmit={handleFormSubmit} className="space-y-4 p-5 rounded-2xl bg-slate-900/90 border border-slate-700 mb-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-cyan-400">
                {isCreatingNew ? 'Añadir Nuevo Estándar / Norma' : `Editar: ${editingStandard?.code}`}
              </h3>
              <button
                type="button"
                onClick={handleCancelForm}
                className="text-xs text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Código de la Norma *</label>
                <input
                  type="text"
                  required
                  placeholder="ej. ISO/IEC 25010:2023"
                  value={formData.code}
                  onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Título Oficial *</label>
                <input
                  type="text"
                  required
                  placeholder="ej. Modelo de Calidad del Producto Software"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Categoría</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as StandardCategory })}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500 cursor-pointer"
                >
                  <option value="iso">Normas ISO / SQuaRE / SGC</option>
                  <option value="cmmi">Modelo CMMI V3.0</option>
                  <option value="documentation">Pruebas, SQA & Requisitos</option>
                  <option value="security">Seguridad & Desarrollo Seguro</option>
                  <option value="ai">Inteligencia Artificial</option>
                  <option value="complementary">Complementarias y Sectoriales</option>
                  <option value="agile">Prácticas y marcos ágiles (complementarios)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Organización Emisora</label>
                <input
                  type="text"
                  placeholder="ej. ISO / IEC JTC 1/SC 7"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Año / Edición Vigente</label>
                <input
                  type="text"
                  placeholder="ej. 2023"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500 font-mono"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Estado Real</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as Standard['status'] })}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500 cursor-pointer"
                >
                  <option value="Vigente">Vigente</option>
                  <option value="Vigente (en revisión)">Vigente (en revisión)</option>
                  <option value="Borrador">Borrador</option>
                  <option value="Complementario">Complementario</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Fase del Ciclo (SDLC)</label>
                <select
                  value={formData.sdlcPhase}
                  onChange={(e) => setFormData({ ...formData, sdlcPhase: e.target.value as any })}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500 cursor-pointer"
                >
                  <option value="Requerimientos">Requerimientos</option>
                  <option value="Arquitectura">Arquitectura</option>
                  <option value="Gestión Ágil">Gestión Ágil</option>
                  <option value="Testing & QA">Testing & QA</option>
                  <option value="Calidad de Producto">Calidad de Producto</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1">Resumen Ejecutivo *</label>
              <textarea
                required
                rows={2}
                placeholder="Breve descripción del objetivo de la norma..."
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-slate-400 block mb-1">Pilares Clave (1 por línea)</label>
                <textarea
                  rows={4}
                  placeholder="Adecuación Funcional&#10;Eficiencia de Desempeño&#10;Seguridad"
                  value={pillarsInput}
                  onChange={(e) => setPillarsInput(e.target.value)}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 font-mono"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Artefactos de Documentación (1 por línea)</label>
                <textarea
                  rows={4}
                  placeholder="Checklist de DoD&#10;Matriz de Trazabilidad RTM&#10;Plan de Pruebas"
                  value={artifactsInput}
                  onChange={(e) => setArtifactsInput(e.target.value)}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 font-mono"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400 block mb-1">Preguntas de Checklist (1 por línea)</label>
                <textarea
                  rows={4}
                  placeholder="¿Se mide la cobertura de pruebas unitarias?&#10;¿Se auditan dependencias?"
                  value={checklistInput}
                  onChange={(e) => setChecklistInput(e.target.value)}
                  className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1">Ejemplo Práctico en la Industria</label>
              <input
                type="text"
                placeholder="ej. Una fintech implementa SLAs de sub-200ms de latencia..."
                value={formData.practicalExample}
                onChange={(e) => setFormData({ ...formData, practicalExample: e.target.value })}
                className="w-full bg-slate-950 text-xs text-white rounded-lg p-2.5 border border-slate-700 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={handleCancelForm}
                className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md shadow-cyan-950 transition-colors"
              >
                Guardar Estándar
              </button>
            </div>
          </form>
        ) : null}

        {/* Standards Table with quick search */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">
              Estándares Activos en el Catálogo ({standards.length})
            </h3>

            <div className="relative w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={adminSearch}
                onChange={(e) => setAdminSearch(e.target.value)}
                placeholder="Filtrar catálogo..."
                className="w-full bg-slate-900 text-xs text-white rounded-lg pl-8 pr-3 py-1.5 border border-slate-800 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900/90 text-slate-400 uppercase font-mono border-b border-slate-800 text-[10px]">
                <tr>
                  <th className="p-3">Código</th>
                  <th className="p-3">Título</th>
                  <th className="p-3">Categoría</th>
                  <th className="p-3">Fase SDLC</th>
                  <th className="p-3">Año</th>
                  <th className="p-3 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 bg-slate-950/40">
                {filteredAdminList.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-900/50 transition-colors">
                    <td className="p-3 font-mono font-semibold text-cyan-300 whitespace-nowrap">
                      {item.code}
                    </td>
                    <td className="p-3 text-slate-200 max-w-xs truncate">
                      {item.title}
                    </td>
                    <td className="p-3 font-mono uppercase text-slate-400">
                      {item.category}
                    </td>
                    <td className="p-3 text-slate-400">
                      {item.sdlcPhase}
                    </td>
                    <td className="p-3 font-mono text-slate-400">
                      {item.year}
                    </td>
                    <td className="p-3 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => handleStartEdit(item)}
                          className="p-1.5 text-slate-400 hover:text-cyan-400 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                          title="Editar"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>

                        {confirmDeleteId === item.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => {
                                onDeleteStandard(item.id);
                                setConfirmDeleteId(null);
                                showNotification('Estándar eliminado');
                              }}
                              className="px-2 py-0.5 rounded text-[10px] bg-rose-600 text-white font-semibold cursor-pointer"
                            >
                              Confirmar
                            </button>
                            <button
                              onClick={() => setConfirmDeleteId(null)}
                              className="px-1 text-[10px] text-slate-400 hover:text-white"
                            >
                              X
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setConfirmDeleteId(item.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-400 rounded hover:bg-slate-800 transition-colors cursor-pointer"
                            title="Eliminar"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Cerrar Panel
          </button>
        </div>
      </div>
    </div>
  );
};
