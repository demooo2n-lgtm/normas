/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ParticleMatrixBackground } from './components/ParticleMatrixBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CourseIdentification } from './components/CourseIdentification';
import { NationalStandards } from './components/NationalStandards';
import { LearningActivity } from './components/LearningActivity';
import { TeamMembers } from './components/TeamMembers';
import { LearningPathRoadmap } from './components/LearningPathRoadmap';
import { StandardsSearch } from './components/StandardsSearch';
import { AgileDocGenerator } from './components/AgileDocGenerator';
import { StandardComparator } from './components/StandardComparator';
import { MaturityEvaluator } from './components/MaturityEvaluator';
import { StandardDetailModal } from './components/StandardDetailModal';
import { AdminPanelModal } from './components/AdminPanelModal';
import { Footer } from './components/Footer';

import { INITIAL_STANDARDS, INITIAL_AGILE_TEMPLATES } from './data/initialStandards';
import { Standard, StandardCategory } from './types/standards';

const LOCAL_STORAGE_KEY = 'normasoft_standards_db_oficial_v3';

export default function App() {
  const [standards, setStandards] = useState<Standard[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading standards from localStorage', e);
    }
    return INITIAL_STANDARDS;
  });

  const [activeTab, setActiveTab] = useState<string>('catalogo');
  const [selectedStandard, setSelectedStandard] = useState<Standard | null>(null);
  const [selectedPhase, setSelectedPhase] = useState<Standard['sdlcPhase'] | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);

  // Sync standards to localStorage whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(standards));
    } catch (e) {
      console.error('Error saving standards to localStorage', e);
    }
  }, [standards]);

  // Admin handlers
  const handleSaveStandard = (updatedStandard: Standard) => {
    setStandards(prev => {
      const index = prev.findIndex(s => s.id === updatedStandard.id);
      if (index >= 0) {
        const copy = [...prev];
        copy[index] = updatedStandard;
        return copy;
      } else {
        return [updatedStandard, ...prev];
      }
    });
  };

  const handleDeleteStandard = (id: string) => {
    setStandards(prev => prev.filter(s => s.id !== id));
  };

  const handleResetDefaults = () => {
    setStandards(INITIAL_STANDARDS);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const handleImportStandards = (newStandards: Standard[]) => {
    setStandards(newStandards);
  };

  const handleScrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#060913] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Interactive informatics particle matrix background with cursor reaction */}
      <ParticleMatrixBackground />

      {/* Main navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenEvaluator={() => handleScrollToSection('evaluador')}
        totalStandardsCount={standards.length}
      />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <Hero
          onSearchClick={() => handleScrollToSection('catalogo')}
          onDocsClick={() => handleScrollToSection('agil')}
          onEvaluatorClick={() => handleScrollToSection('evaluador')}
          onTeamClick={() => handleScrollToSection('integrantes')}
          totalStandards={standards.length}
        />

        {/* Team Members / Integrantes del Proyecto */}
        <CourseIdentification />
        <TeamMembers />
        <NationalStandards />

        {/* Interactive SDLC Learning Roadmap Pipeline */}
        <LearningPathRoadmap
          selectedPhase={selectedPhase}
          onSelectPhase={(phase) => {
            setSelectedPhase(phase);
            handleScrollToSection('catalogo');
          }}
        />

        {/* Standards Catalog & Smart Search */}
        <StandardsSearch
          standards={standards}
          onSelectStandard={(std) => setSelectedStandard(std)}
          selectedPhase={selectedPhase}
          onClearPhase={() => setSelectedPhase(null)}
        />

        {/* Standard Comparator */}
        <StandardComparator standards={standards} />

        {/* Agile Documentation Templates & DoD Generator */}
        <AgileDocGenerator templates={INITIAL_AGILE_TEMPLATES} />

        {/* Maturity & Quality Evaluator (Self-Assessment Tool) */}
        <LearningActivity />
        <MaturityEvaluator />
      </main>

      {/* Standard Detail Modal */}
      {selectedStandard && (
        <StandardDetailModal
          standard={selectedStandard}
          onClose={() => setSelectedStandard(null)}
        />
      )}

      {/* Intuitive Admin Panel Modal */}
      {adminOpen && (
        <AdminPanelModal
          standards={standards}
          onClose={() => setAdminOpen(false)}
          onSaveStandard={handleSaveStandard}
          onDeleteStandard={handleDeleteStandard}
          onResetDefaults={handleResetDefaults}
          onImportStandards={handleImportStandards}
        />
      )}

      {/* Footer */}
      <Footer
        onOpenAdmin={() => setAdminOpen(true)}
        onOpenEvaluator={() => handleScrollToSection('evaluador')}
      />
    </div>
  );
}
