import { Injectable, signal } from '@angular/core';
import { supabase } from './supabase';
import { Palette, SavedPalette, PaletteScheme } from './models';

interface PaletteRow {
  id: string;
  scheme: PaletteScheme;
  colors: string[];
  created_at: string;
}

function toSavedPalette(row: PaletteRow): SavedPalette {
  return { id: row.id, scheme: row.scheme, colors: row.colors, createdAt: row.created_at };
}

function isPaletteRow(value: unknown): value is PaletteRow {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate['id'] === 'string' &&
    typeof candidate['scheme'] === 'string' &&
    typeof candidate['created_at'] === 'string' &&
    Array.isArray(candidate['colors']) &&
    candidate['colors'].every((color) => typeof color === 'string')
  );
}

@Injectable({ providedIn: 'root' })
export class PaletteFavoritesService {
  readonly palettes = signal<SavedPalette[]>([]);
  readonly loading = signal(true);
  readonly error = signal<string | null>(null);

  constructor() {
    void this.load();
  }

  async load(): Promise<void> {
    this.loading.set(true);
    this.error.set(null);
    const { data, error } = await supabase
      .from('favorite_palettes')
      .select('id, scheme, colors, created_at')
      .order('created_at', { ascending: false });
    this.loading.set(false);
    if (error || !Array.isArray(data) || !data.every(isPaletteRow)) {
      this.error.set('No se pudieron cargar las paletas guardadas.');
      return;
    }
    this.palettes.set(data.map(toSavedPalette));
  }

  async save(palette: Palette): Promise<boolean> {
    const { data, error } = await supabase
      .from('favorite_palettes')
      .insert({ scheme: palette.scheme, colors: palette.colors })
      .select('id, scheme, colors, created_at')
      .single();
    if (error || !isPaletteRow(data)) {
      this.error.set('No se pudo guardar la paleta. Inténtalo de nuevo.');
      return false;
    }
    this.error.set(null);
    this.palettes.update((list) => [toSavedPalette(data), ...list]);
    return true;
  }

  async remove(id: string): Promise<void> {
    const { error } = await supabase.from('favorite_palettes').delete().eq('id', id);
    if (error) {
      this.error.set('No se pudo eliminar la paleta. Inténtalo de nuevo.');
      return;
    }
    this.error.set(null);
    this.palettes.update((list) => list.filter((palette) => palette.id !== id));
  }
}
