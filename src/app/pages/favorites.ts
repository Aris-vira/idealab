import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../core/favorites.service';
import { BriefFavoritesService } from '../core/brief-favorites.service';
import { PaletteFavoritesService } from '../core/palette-favorites.service';
import { PALETTE_SCHEME_OPTIONS } from '../core/creative-data';
import { PaletteScheme } from '../core/models';
import { IdeaCard } from '../shared/idea-card';
import { BriefCard } from '../shared/brief-card';

@Component({
  selector: 'app-favorites',
  imports: [IdeaCard, BriefCard, RouterLink],
  template: `
    <section class="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 class="font-display text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl">Mis favoritos</h1>
          <p class="mt-4 max-w-2xl text-lg leading-relaxed text-ink-200">
            Las ideas que guardaste se mantienen en este navegador.
          </p>
        </div>
        <p class="text-sm font-semibold text-ink-300">
          {{ favorites.count() }} {{ favorites.count() === 1 ? 'idea guardada' : 'ideas guardadas' }}
        </p>
      </header>

      @if (favorites.count() === 0) {
        <div class="card mt-10 flex animate-fade-up flex-col items-center gap-4 p-6 text-center sm:p-10">
          <span class="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-400 text-2xl text-on-accent" aria-hidden="true">&#9734;</span>
          <h2 class="font-display text-2xl font-bold text-ink-50">Aún no tienes ideas guardadas</h2>
          <p class="max-w-md leading-relaxed text-ink-200">
            Genera una propuesta y pulsa "Guardar en favoritos" para conservarla aquí.
          </p>
          <a routerLink="/generador" class="btn btn-primary mt-2 w-full sm:w-auto">Ir al generador</a>
        </div>
      } @else {
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          @for (idea of favorites.favorites(); track idea.id; let i = $index) {
            <div class="animate-fade-up" [style.animation-delay.ms]="i * 60">
              <app-idea-card [idea]="idea">
                <button type="button" class="btn btn-danger" (click)="remove(idea.id)">Eliminar</button>
              </app-idea-card>
            </div>
          }
        </div>
      }

      <section class="mt-16" aria-labelledby="saved-briefs-title">
        <h2 id="saved-briefs-title" class="font-display text-3xl font-bold tracking-tight text-ink-50">Briefs guardados</h2>
        <p class="mt-2 text-sm font-semibold text-ink-200">
          {{ briefFavorites.count() }} {{ briefFavorites.count() === 1 ? 'brief guardado' : 'briefs guardados' }}
        </p>

        @if (briefFavorites.count() === 0) {
          <p class="mt-6 text-ink-200">Aún no tienes briefs guardados. Genera un brief y pulsa "Guardar en favoritos" para conservarlo aquí.</p>
        } @else {
          <div class="mt-6 grid gap-6 md:grid-cols-2">
            @for (brief of briefFavorites.briefs(); track brief.id) {
              <app-brief-card [brief]="brief">
                <button type="button" class="btn btn-danger" (click)="removeBrief(brief.id)">Eliminar</button>
              </app-brief-card>
            }
          </div>
        }
      </section>

      <section class="mt-16" aria-labelledby="saved-palettes-title">
        <h2 id="saved-palettes-title" class="font-display text-3xl font-bold tracking-tight text-ink-50">Paletas guardadas</h2>

        @if (palettes.loading()) {
          <p class="mt-6 text-ink-200">Cargando paletas...</p>
        } @else if (palettes.error()) {
          <p role="alert" class="mt-6 font-semibold text-tone-error">{{ palettes.error() }}</p>
        } @else if (palettes.palettes().length === 0) {
          <p class="mt-6 text-ink-200">Aún no tienes paletas guardadas. Guárdalas desde la sección de paletas.</p>
        } @else {
          <div class="mt-6 grid gap-6 md:grid-cols-2">
            @for (palette of palettes.palettes(); track palette.id) {
              <article class="card card-interactive flex flex-col gap-5 p-6">
                <div class="flex h-28 overflow-hidden rounded-2xl ring-1 ring-white/10" role="img" [attr.aria-label]="'Colores: ' + palette.colors.join(', ')">
                  @for (color of palette.colors; track $index) {
                    <span class="flex-1" [style.background-color]="color"></span>
                  }
                </div>
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p class="text-sm font-semibold text-ink-200">{{ schemeLabel(palette.scheme) }}</p>
                    <p class="font-display text-sm text-ink-400">{{ palette.colors.join(' · ') }}</p>
                  </div>
                  <button type="button" class="btn btn-danger" (click)="removePalette(palette.id)">Eliminar</button>
                </div>
              </article>
            }
          </div>
        }
      </section>
    </section>
  `,
})
export class Favorites {
  protected readonly favorites = inject(FavoritesService);
  protected readonly briefFavorites = inject(BriefFavoritesService);
  protected readonly palettes = inject(PaletteFavoritesService);

  protected remove(id: string): void {
    this.favorites.remove(id);
  }

  protected removeBrief(id: string): void {
    this.briefFavorites.remove(id);
  }

  protected removePalette(id: string): void {
    void this.palettes.remove(id);
  }

  protected schemeLabel(scheme: PaletteScheme): string {
    return PALETTE_SCHEME_OPTIONS.find((option) => option.value === scheme)?.label ?? scheme;
  }
}
