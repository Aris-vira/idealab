import { Component, computed, input, signal } from '@angular/core';
import { pinterestSearchUrl, STYLE_REFERENCES, StyleReference, styleImageUrl } from '../core/style-references';

type PanelTab = 'gallery' | 'about';

@Component({
  selector: 'app-style-panel',
  template: `
    <section class="overflow-hidden rounded-2xl bg-[#0e3d38] p-4 text-[#eef9f7] shadow-lg shadow-black/30 ring-1 ring-[#6fcbbb]/30 sm:p-5">
      <p class="text-xs font-semibold uppercase tracking-widest text-[#6fcbbb]">Estilo visual</p>
      <h4 class="mt-1 font-display text-xl font-bold tracking-tight text-[#eef9f7] sm:text-2xl">{{ styleName() }}</h4>

      <div role="tablist" aria-label="Secciones del estilo" class="mt-4 inline-flex rounded-full bg-black/25 p-1 ring-1 ring-[#6fcbbb]/25">
        @for (option of tabs; track option.value; let i = $index) {
          <button
            type="button"
            role="tab"
            [id]="'style-tab-' + option.value"
            [attr.aria-selected]="tab() === option.value"
            [attr.tabindex]="tab() === option.value ? 0 : -1"
            (click)="tab.set(option.value)"
            (keydown)="onTabKeydown($event, i)"
            class="cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold transition duration-200"
            [class]="tab() === option.value ? 'bg-[#6fcbbb] text-[#0e3d38]' : 'text-[#cfeee8] hover:bg-white/10'"
          >
            {{ option.label }}
          </button>
        }
      </div>

      @if (reference(); as ref) {
        @if (tab() === 'gallery') {
          <div
            class="mt-4 grid max-h-56 grid-cols-2 gap-2 overflow-y-auto pr-1 md:grid-cols-3"
            tabindex="0"
            role="region"
            aria-label="Galería de referencias del estilo"
          >
            @for (photoId of ref.photoIds; track photoId) {
              <a
                [href]="searchUrl()"
                target="_blank"
                rel="noopener noreferrer"
                [attr.aria-label]="'Buscar referencias de ' + styleName() + ' en Pinterest, se abre en una pestaña nueva'"
                class="group relative aspect-square overflow-hidden rounded-xl bg-black/20 ring-1 ring-[#6fcbbb]/20 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 hover:ring-[#6fcbbb]/80"
              >
                <img
                  [src]="imageUrl(photoId)"
                  [alt]="'Referencia visual de ' + styleName() + ' (imagen ' + ($index() + 1) + ' de ' + ref.photoIds.length + ')'"
                  loading="lazy"
                  class="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-110"
                />
              </a>
            }
          </div>
        } @else {
          <div class="mt-4 grid gap-4 text-sm text-[#eef9f7] sm:grid-cols-2">
            <div>
              <h5 class="text-sm font-semibold uppercase tracking-wider text-[#6fcbbb]">Características</h5>
              <p class="mt-2 leading-relaxed">{{ ref.description }}</p>
            </div>
            <div>
              <h5 class="text-sm font-semibold uppercase tracking-wider text-[#6fcbbb]">Elementos principales</h5>
              <ul class="mt-2 list-disc space-y-1 pl-5 leading-relaxed">
                @for (element of ref.elements; track element) {
                  <li>{{ element }}</li>
                }
              </ul>
            </div>
            <div class="sm:col-span-2">
              <h5 class="text-sm font-semibold uppercase tracking-wider text-[#6fcbbb]">Colores</h5>
              <ul class="mt-3 flex flex-wrap gap-3">
                @for (color of ref.colors; track color) {
                  <li class="flex items-center gap-2 rounded-full bg-black/25 py-1 pl-1 pr-3 text-sm font-semibold">
                    <span class="h-6 w-6 rounded-full ring-1 ring-white/30" [style.background-color]="color" aria-hidden="true"></span>
                    {{ color }}
                  </li>
                }
              </ul>
            </div>
          </div>
        }
      } @else {
        <p class="mt-5 text-[#cfeee8]">Todavía no hay referencias guardadas para este estilo.</p>
      }

      <div class="mt-4 flex justify-end">
        <a
          [href]="searchUrl()"
          target="_blank"
          rel="noopener noreferrer"
          [attr.aria-label]="'Ver más en Pinterest sobre ' + styleName() + ', se abre en una pestaña nueva'"
          class="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#6fcbbb] px-4 py-2 text-sm font-bold text-[#0e3d38] shadow-md shadow-black/30 transition duration-200 hover:-translate-y-0.5 hover:bg-[#a8e2d8] sm:w-auto"
        >
          Ver más en Pinterest
          <span aria-hidden="true">&nearr;</span>
        </a>
      </div>
    </section>
  `,
})
export class StylePanel {
  readonly styleName = input.required<string>();

  protected readonly tabs: readonly { value: PanelTab; label: string }[] = [
    { value: 'gallery', label: 'Galería' },
    { value: 'about', label: 'Acerca del estilo' },
  ];
  protected readonly tab = signal<PanelTab>('gallery');
  protected readonly reference = computed<StyleReference | undefined>(
    () => (STYLE_REFERENCES as Partial<Record<string, StyleReference>>)[this.styleName()],
  );
  protected readonly searchUrl = computed(() => pinterestSearchUrl(this.styleName()));

  protected imageUrl(photoId: number): string {
    return styleImageUrl(photoId);
  }

  protected onTabKeydown(event: KeyboardEvent, currentIndex: number): void {
    const lastIndex = this.tabs.length - 1;
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
      const next = this.tabs[nextIndex];
      this.tab.set(next.value);
      const btn = document.getElementById('style-tab-' + next.value);
      btn?.focus();
    }
  }
}
