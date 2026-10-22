export type StandardCategory =
  | 'iso'
  | 'cmmi'
  | 'agile'
  | 'documentation'
  | 'security'
  | 'ai'
  | 'complementary';

export type StandardStatus =
  | 'Vigente'
  | 'Vigente (en revisión)'
  | 'Borrador'
  | 'Complementario';

export interface Standard {
  id: string;
  code: string;
  title: string;
  category: StandardCategory;
  badge: string;
  status: StandardStatus;
  organization: string;
  year: string;
  summary: string;
  description: string;
  sdlcPhase: 'Requerimientos' | 'Arquitectura' | 'Gestión Ágil' | 'Testing & QA' | 'Calidad de Producto';
  keyPillars: string[];
  documentationArtifacts: string[];
  checklist: string[];
  practicalExample: string;
  featured?: boolean;
  accentColor?: string;
  views?: number;
}

export interface SummaryTableRow {
  area: string;
  mainStandard: string;
  purpose: string;
}

export interface BibliographyItem {
  author: string;
  year: string;
  title: string;
  url: string;
}

export interface AgileTemplate {
  id: string;
  title: string;
  category: 'Scrum' | 'Nexus Scaled' | 'Kanban' | 'XP' | 'Arquitectura';
  description: string;
  estimatedTime: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  recommendedNorm: string;
  markdownContent: string;
  defaultData: Record<string, string>;
}

export interface MaturityQuestion {
  id: number;
  area: string;
  question: string;
  explanation: string;
  options: {
    text: string;
    cmmiScore: number; // 1 to 5
    isoScore: number;  // 0 to 100
    feedback: string;
  }[];
}

export interface ComparisonDimension {
  title: string;
  description: string;
  isoRating: string;
  cmmiRating: string;
  agileRating: string;
}
