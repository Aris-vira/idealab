import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../core/favorites.service';
import { BriefFavoritesService } from '../core/brief-favorites.service';
import { randomIdea } from '../core/idea-generator';
import { randomBrief } from '../core/brief-generator';
import { Brief, Idea } from '../core/models';
import { IdeaCard } from '../shared/idea-card';
import { BriefCard } from '../shared/brief-card';

type GeneratorMode = 'inspiration' | 'brief';

@Component({
  selector: 'app-idea-generator',
  imports: [IdeaCard, BriefCard, RouterLink],
  template: `
    <section class="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header class="mb-8 text-center sm:text-left">
        <h1 class="font-display text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl">Generador creativo</h1>
        <p class="mt-4 max-w-2xl text-lg leading-relaxed text-ink-200">
          Elige un modo y genera propuestas para tus proyectos visuales o encargos de práctica.
        </p>
      </header>

      <div role="tablist" aria-label="Modo del generador" class="mb-8 inline-flex rounded-full bg-white/5 p-1 ring-1 ring-inset ring-white/15">
        @for (option of modes; track option.value; let i = $index) {
          <button
            type="button"
            role="tab"
            [id]="'gen-tab-' + option.value"
            [attr.aria-selected]="mode() === option.value"
            [attr.tabindex]="mode() === option.value ? 0 : -1"
            (click)="switchMode(option.value)"
            (keydown)="onTabKeydown($event, i)"
            class="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition duration-200"
            [class]="mode() === option.value ? 'bg-accent-400 text-on-accent' : 'text-ink-200 hover:bg-white/10'"
          >
            {{ option.label }}
          </button>
        }
      </div>

      <div role="tabpanel" [attr.aria-labelledby]="'gen-tab-' + mode()">
      @if (mode() === 'inspiration') {
        @for (item of [idea()]; track item.id) {
          <app-idea-card [idea]="item">
            <button type="button" class="btn btn-primary w-full sm:w-auto" (click)="generate()">Generar otra propuesta</button>
            @if (isIdeaSaved()) {
              <button type="button" class="btn btn-danger w-full sm:w-auto" (click)="toggleIdeaFavorite()">
                Quitar de favoritos
              </button>
            } @else {
              <button type="button" class="btn btn-secondary w-full sm:w-auto" (click)="toggleIdeaFavorite()">
                Guardar en favoritos
              </button>
            }
          </app-idea-card>
        }

        <p class="mt-6 min-h-6 text-center text-sm font-semibold text-tone-secondary sm:text-left" role="status" aria-live="polite">
          @if (isIdeaSaved()) {
            Idea guardada. <a routerLink="/favoritos" class="underline underline-offset-4 hover:text-tone-secondary">Ver en Mis favoritos</a>
          }
        </p>
      } @else {
        @for (item of [brief()]; track item.id) {
          <app-brief-card [brief]="item">
            <button type="button" class="btn btn-primary w-full sm:w-auto" (click)="generateBrief()">Generar otro brief</button>
            @if (isBriefSaved()) {
              <button type="button" class="btn btn-danger w-full sm:w-auto" (click)="toggleBriefFavorite()">
                Quitar de favoritos
              </button>
            } @else {
              <button type="button" class="btn btn-secondary w-full sm:w-auto" (click)="toggleBriefFavorite()">
                Guardar en favoritos
              </button>
            }
          </app-brief-card>
        }

        <p class="mt-6 min-h-6 text-center text-sm font-semibold text-tone-secondary sm:text-left" role="status" aria-live="polite">
          @if (isBriefSaved()) {
            Brief guardado. <a routerLink="/favoritos" class="underline underline-offset-4 hover:text-tone-secondary">Ver en Mis favoritos</a>
          }
        </p>
      }
      </div>
    </section>
  `,
})
export class IdeaGenerator {
  private readonly favorites = inject(FavoritesService);
  private readonly briefFavorites = inject(BriefFavoritesService);

  protected readonly modes: readonly { value: GeneratorMode; label: string }[] = [
    { value: 'inspiration', label: 'Inspiración creativa' },
    { value: 'brief', label: 'Brief creativo' },
  ];

  protected readonly mode = signal<GeneratorMode>('inspiration');
  protected readonly idea = signal<Idea>(randomIdea());
  protected readonly brief = signal<Brief>(randomBrief());

  protected isIdeaSaved = () => this.favorites.isSaved(this.idea().id);
  protected isBriefSaved = () => this.briefFavorites.isSaved(this.brief().id);

  protected switchMode(value: GeneratorMode): void {
    this.mode.set(value);
  }

  protected onTabKeydown(event: KeyboardEvent, currentIndex: number): void {
    const lastIndex = this.modes.length - 1;
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
      const next = this.modes[nextIndex];
      this.switchMode(next.value);
      const btn = document.getElementById('gen-tab-' + next.value);
      btn?.focus();
    }
  }

  protected generate(): void {
    this.idea.set(randomIdea());
  }

  protected toggleIdeaFavorite(): void {
    const current = this.idea();
    if (this.favorites.isSaved(current.id)) {
      this.favorites.remove(current.id);
    } else {
      this.favorites.save(current);
    }
  }

  protected generateBrief(): void {
    this.brief.set(randomBrief());
  }

  protected toggleBriefFavorite(): void {
    const current = this.brief();
    if (this.briefFavorites.isSaved(current.id)) {
      this.briefFavorites.remove(current.id);
    } else {
      this.briefFavorites.save(current);
    }
  }
}
