import { computed, effect, Injectable, signal } from '@angular/core';
import { Idea } from './models';

const STORAGE_KEY = 'idea-lab.favorites';

function isIdea(value: unknown): value is Idea {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return ['id', 'theme', 'concept', 'style', 'element'].every((key) => typeof candidate[key] === 'string');
}

function loadFavorites(): Idea[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(isIdea) : [];
  } catch {
    return [];
  }
}

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly items = signal<Idea[]>(loadFavorites());

  readonly favorites = this.items.asReadonly();
  readonly count = computed(() => this.items().length);

  constructor() {
    effect(() => {
      const snapshot = JSON.stringify(this.items());
      try {
        localStorage.setItem(STORAGE_KEY, snapshot);
      } catch {
        // Storage may be full or disabled; favorites still work for this session.
      }
    });
  }

  isSaved(id: string): boolean {
    return this.items().some((idea) => idea.id === id);
  }

  save(idea: Idea): void {
    if (this.isSaved(idea.id)) return;
    this.items.update((list) => [idea, ...list]);
  }

  remove(id: string): void {
    this.items.update((list) => list.filter((idea) => idea.id !== id));
  }
}
