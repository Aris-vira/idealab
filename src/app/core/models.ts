export interface Idea {
  id: string;
  theme: string;
  concept: string;
  style: string;
  element: string;
}

export type PaletteScheme = 'analogous' | 'complementary' | 'triadic' | 'split' | 'monochromatic';

export interface Palette {
  scheme: PaletteScheme;
  colors: string[];
}

export interface SavedPalette extends Palette {
  id: string;
  createdAt: string;
}

export type BriefDifficulty = 'basico' | 'intermedio' | 'avanzado';

export interface Deliverable {
  name: string;
  detail: string;
}

export interface Brief {
  id: string;
  projectName: string;
  clientType: string;
  description: string;
  location: string;
  clientProfile: string;
  need: string;
  goal: string;
  audience: string;
  deliverables: Deliverable[];
  constraints: string;
  additional: string;
  difficulty: BriefDifficulty;
  difficultyLabel: string;
}
