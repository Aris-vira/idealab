import {
  BRIEF_CATEGORIES,
  CLIENT_PROFILES,
  CLIENT_SECTORS,
  DIFFICULTIES,
  LOCATIONS,
} from './brief-data';
import { Brief, BriefDifficulty, Deliverable } from './models';

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function pickMany<T>(items: readonly T[], min: number, max: number): T[] {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function difficultyFor(deliverableCount: number): BriefDifficulty {
  if (deliverableCount <= 2) return 'basico';
  if (deliverableCount <= 4) return 'intermedio';
  return 'avanzado';
}

export function randomBrief(): Brief {
  const sector = pick(CLIENT_SECTORS);
  const category = BRIEF_CATEGORIES[sector.category];

  const projectName = pick(sector.names);
  const description = pick(sector.descriptions);
  const location = pick(LOCATIONS);
  const clientProfile = pick(CLIENT_PROFILES);
  const scenario = pick(category.scenarios);
  const constraints = pick(category.constraints);
  const additional = pick(category.additionals);

  const selectedDeliverables = pickMany(category.deliverables, 1, 5);
  const deliverables: Deliverable[] = selectedDeliverables
    .map((template) => ({
      name: template.name,
      detail: pick(template.details),
    }))
    .sort((a, b) => a.name.localeCompare(b.name, 'es'));

  const difficulty = difficultyFor(deliverables.length);
  const difficultyLabel = DIFFICULTIES.find((d) => d.value === difficulty)?.label ?? difficulty;

  return {
    id: `brief-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
    projectName,
    clientType: sector.sector,
    description: `${description}, ubicada ${location}.`,
    location,
    clientProfile,
    need: scenario.need,
    goal: scenario.goal,
    audience: sector.audience,
    deliverables,
    constraints,
    additional: `${additional}. Personalidad de marca: ${sector.personality}.`,
    difficulty,
    difficultyLabel,
  };
}
