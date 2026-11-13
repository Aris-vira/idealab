import { Component, DestroyRef, inject, signal } from '@angular/core';
import { generatePalette, readableTextColor } from '../core/palette-generator';
import { PALETTE_SCHEME_OPTIONS } from '../core/creative-data';
import { Palette, PaletteScheme } from '../core/models';
import { PaletteFavoritesService } from '../core/palette-favorites.service';
import { SoundService } from '../core/sound.service';

@Component({
  selector: 'app-palettes',
  template: `
    <section class="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header class="max-w-2xl">
        <h1 class="font-display text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl">Paletas de color</h1>
        <p class="mt-4 text-lg leading-relaxed text-ink-200">
          Elige una armonía y obtén cinco colores listos para usar. Haz clic en cualquier color para copiar su código.
        </p>
      </header>

      <div class="mt-8 flex flex-wrap gap-2" role="radiogroup" aria-label="Tipo de armonía">
        @for (option of schemeOptions; track option.value; let i = $index) {
          <button
            type="button"
            role="radio"
            [attr.aria-checked]="palette().scheme === option.value"
            [attr.tabindex]="palette().scheme === option.value ? 0 : -1"
            [title]="option.description"
            (click)="selectScheme(option.value)"
            (keydown)="onRadioKeydown($event, i)"
            class="cursor-pointer rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-ink-200 ring-1 ring-white/15 transition duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:ring-white/30 active:scale-95 aria-checked:bg-accent-400 aria-checked:text-on-accent aria-checked:ring-accent-400 aria-checked:hover:bg-accent-300"
          >
            {{ option.label }}
          </button>
        }
      </div>

      <div class="mt-8 flex animate-fade-up flex-col overflow-hidden rounded-3xl shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:h-[26rem] sm:flex-row">
        @for (color of palette().colors; track $index) {
          <button
            type="button"
            class="group relative flex min-h-28 flex-1 cursor-pointer flex-col justify-end gap-1 p-5 text-left transition-[flex-grow,filter] duration-500 ease-out hover:brightness-105 focus-visible:-outline-offset-4 sm:min-h-0 sm:hover:flex-[1.35]"
            [style.background-color]="color"
            [style.color]="textColor(color)"
            [attr.aria-label]="'Copiar color ' + color"
            (click)="copyColor(color)"
          >
            <span class="font-display text-2xl font-bold tracking-wide">{{ color }}</span>
            <span class="text-sm font-semibold opacity-100 transition duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100">
              {{ copiedColor() === color ? 'Copiado' : 'Clic para copiar' }}
            </span>
          </button>
        }
      </div>

      <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <button type="button" class="btn btn-secondary w-full sm:w-auto" (click)="newPalette()">Nueva paleta</button>
        <button type="button" class="btn btn-primary w-full sm:w-auto" [disabled]="saved()" [attr.aria-disabled]="saved()" (click)="savePalette()">
          {{ saved() ? 'Guardada en favoritos' : 'Guardar en favoritos' }}
        </button>
        <button type="button" class="btn btn-secondary w-full sm:w-auto" (click)="copyAll()">Copiar todos los códigos</button>
      </div>

      <p class="mt-6 min-h-6 text-sm font-semibold text-tone-secondary" role="status" aria-live="polite">{{ status() }}</p>
    </section>
  `,
})
export class Palettes {
  protected readonly schemeOptions = PALETTE_SCHEME_OPTIONS;
  protected readonly palette = signal<Palette>(generatePalette('analogous'));
  protected readonly copiedColor = signal<string | null>(null);
  protected readonly status = signal('');
  protected readonly saved = signal(false);
  private readonly favorites = inject(PaletteFavoritesService);
  private readonly sound = inject(SoundService);

  private readonly failureMessage = 'No se pudo copiar automáticamente. Selecciona el código manualmente.';
  private statusTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.statusTimer));
  }

  protected textColor(hex: string): string {
    return readableTextColor(hex);
  }

  protected selectScheme(scheme: PaletteScheme): void {
    this.palette.set(generatePalette(scheme));
    this.copiedColor.set(null);
    this.saved.set(false);
  }

  protected onRadioKeydown(event: KeyboardEvent, currentIndex: number): void {
    const lastIndex = this.schemeOptions.length - 1;
    let nextIndex: number | null = null;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = currentIndex < lastIndex ? currentIndex + 1 : 0;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : lastIndex;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = lastIndex;
    }
    if (nextIndex !== null) {
      event.preventDefault();
      const next = this.schemeOptions[nextIndex];
      this.selectScheme(next.value);
      const btn = document.querySelector<HTMLButtonElement>(
        `button[role="radio"]:nth-of-type(${nextIndex + 1})`,
      );
      btn?.focus();
    }
  }

  protected newPalette(): void {
    this.palette.set(generatePalette(this.palette().scheme));
    this.copiedColor.set(null);
    this.saved.set(false);
  }

  protected async savePalette(): Promise<void> {
    if (this.saved()) return;
    const ok = await this.favorites.save(this.palette());
    if (ok) {
      this.saved.set(true);
      this.sound.playSave();
      this.announce('Paleta guardada en favoritos.');
    } else {
      this.announce(this.favorites.error() ?? 'No se pudo guardar la paleta.');
    }
  }

  protected async copyColor(hex: string): Promise<void> {
    const copied = await this.writeToClipboard(hex);
    this.copiedColor.set(copied ? hex : null);
    this.announce(copied ? `Color ${hex} copiado al portapapeles.` : this.failureMessage);
  }

  protected async copyAll(): Promise<void> {
    const codes = this.palette().colors.join(', ');
    const copied = await this.writeToClipboard(codes);
    this.copiedColor.set(null);
    this.announce(copied ? 'Los cinco códigos se copiaron al portapapeles.' : this.failureMessage);
  }

  private async writeToClipboard(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  private announce(message: string): void {
    this.status.set(message);
    clearTimeout(this.statusTimer);
    this.statusTimer = setTimeout(() => this.status.set(''), 3000);
  }
}
