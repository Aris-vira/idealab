import { computed, effect, Injectable, signal } from '@angular/core';
import { Brief, Deliverable } from './models';

const STORAGE_KEY = 'idea-lab.brief-favorites';

function normalizeDeliverables(value: unknown): Deliverable[] {
  if (!Array.isArray(value)) return [];
  return value.map((d) => {
    if (typeof d === 'string') return { name: d, detail: '' };
    if (typeof d === 'object' && d !== null) {
      const obj = d as Record<string, unknown>;
      return { name: String(obj['name'] ?? ''), detail: String(obj['detail'] ?? '') };
    }
    return { name: '', detail: '' };
  }).filter((d) => d.name.length > 0);
}

function isBriefLike(value: unknown): boolean {
  if (typeof value !== 'object' || value === null) return false;
  const c = value as Record<string, unknown>;
  return (
    typeof c['id'] === 'string' &&
    typeof c['clientType'] === 'string' &&
    typeof c['need'] === 'string' &&
    Array.isArray(c['deliverables'])
  );
}

function toBrief(value: unknown): Brief | null {
  if (!isBriefLike(value)) return null;
  const c = value as Record<string, unknown>;
  return {
    id: String(c['id']),
    projectName: typeof c['projectName'] === 'string' ? c['projectName'] : c['clientType'] as string,
    clientType: c['clientType'] as string,
    description: typeof c['description'] === 'string' ? c['description'] : '',
    location: typeof c['location'] === 'string' ? c['location'] : '',
    clientProfile: typeof c['clientProfile'] === 'string' ? c['clientProfile'] : '',
    need: c['need'] as string,
    goal: typeof c['goal'] === 'string' ? c['goal'] : '',
    audience: typeof c['audience'] === 'string' ? c['audience'] : '',
    deliverables: normalizeDeliverables(c['deliverables']),
    constraints: typeof c['constraints'] === 'string' ? c['constraints'] : '',
    additional: typeof c['additional'] === 'string' ? c['additional'] : '',
    difficulty: (c['difficulty'] === 'basico' || c['difficulty'] === 'intermedio' || c['difficulty'] === 'avanzado' ? c['difficulty'] : 'intermedio') as Brief['difficulty'],
    difficultyLabel: typeof c['difficultyLabel'] === 'string' ? c['difficultyLabel'] : 'Intermedio',
  };
}

function loadBriefs(): Brief[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(toBrief).filter((b): b is Brief => b !== null);
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class BriefFavoritesService {
  private readonly items = signal<Brief[]>(loadBriefs());

  readonly briefs = this.items.asReadonly();
  readonly count = computed(() => this.items().length);

  constructor() {
    effect(() => {
      const snapshot = JSON.stringify(this.items());
      try {
        localStorage.setItem(STORAGE_KEY, snapshot);
      } catch {
        // Storage may be full or disabled; briefs still work for this session.
      }
    });
  }

  isSaved(id: string): boolean {
    return this.items().some((brief) => brief.id === id);
  }

  save(brief: Brief): void {
    if (this.isSaved(brief.id)) return;
    this.items.update((list) => [brief, ...list]);
  }

  remove(id: string): void {
    this.items.update((list) => list.filter((brief) => brief.id !== id));
  }
}
