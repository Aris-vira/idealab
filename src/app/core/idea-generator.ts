import { CONCEPTS, ELEMENTS, STYLES, THEMES } from './creative-data';
import { Idea } from './models';

function pick<T>(items: readonly T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function randomIdea(): Idea {
  return {
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`,
    theme: pick(THEMES),
    concept: pick(CONCEPTS),
    style: pick(STYLES),
    element: pick(ELEMENTS),
  };
}
