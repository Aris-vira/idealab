import { Component, computed, input } from '@angular/core';
import { Brief } from '../core/models';

const DIFFICULTY_CLASSES: Record<Brief['difficulty'], string> = {
  basico: 'bg-success-500/15 text-success-300 ring-success-400/30',
  intermedio: 'bg-warning-500/15 text-warning-300 ring-warning-400/30',
  avanzado: 'bg-error-500/15 text-error-300 ring-error-400/30',
};

@Component({
  selector: 'app-brief-card',
  template: `
    <article class="card card-interactive group flex h-full min-w-0 break-words flex-col gap-5 p-6 sm:p-8">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div class="flex items-center gap-3">
          <span class="h-3 w-3 rotate-45 bg-accent-400 transition duration-300 group-hover:rotate-180 group-hover:scale-125" aria-hidden="true"></span>
          <p class="text-sm font-semibold uppercase tracking-widest text-ink-300">{{ brief().clientType }}</p>
        </div>
        <span class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset {{ difficultyClass() }}" aria-label="Nivel de dificultad: {{ brief().difficultyLabel }}">
          {{ brief().difficultyLabel }}
        </span>
      </div>

      <header>
        <h3 class="font-display text-2xl font-bold text-ink-50 sm:text-3xl">{{ brief().projectName }}</h3>
        <p class="mt-2 leading-relaxed text-ink-200">{{ brief().description }}</p>
      </header>

      <section>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-tone-secondary">Perfil del cliente</h4>
        <p class="mt-1 leading-relaxed text-ink-50">{{ brief().clientProfile }}</p>
      </section>

      <section>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-tone-accent">Necesidad del cliente</h4>
        <p class="mt-1 leading-relaxed text-ink-50">{{ brief().need }}</p>
      </section>

      <section>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-tone-secondary">Objetivo y mensaje</h4>
        <p class="mt-1 leading-relaxed text-ink-50">{{ brief().goal }}</p>
      </section>

      <section>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-tone-accent">Público objetivo</h4>
        <p class="mt-1 leading-relaxed text-ink-50">{{ brief().audience }}</p>
      </section>

      <section>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-tone-secondary">Entregables solicitados</h4>
        <ul class="mt-2 grid gap-2">
          @for (deliverable of brief().deliverables; track deliverable.name) {
            <li class="rounded-xl bg-white/5 px-3 py-2 text-sm text-ink-50 ring-1 ring-inset ring-white/10">
              <p class="flex items-start gap-2 font-semibold">
                <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-accent-400" aria-hidden="true"></span>
                {{ deliverable.name }}
              </p>
              @if (deliverable.detail) {
                <p class="mt-1 pl-3.5 leading-relaxed text-ink-200">{{ deliverable.detail }}</p>
              }
            </li>
          }
        </ul>
      </section>

      <section>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-tone-accent">Limitaciones y condiciones</h4>
        <p class="mt-1 leading-relaxed text-ink-50">{{ brief().constraints }}</p>
      </section>

      <section>
        <h4 class="text-xs font-semibold uppercase tracking-wider text-tone-secondary">Información adicional</h4>
        <p class="mt-1 leading-relaxed text-ink-50">{{ brief().additional }}</p>
      </section>

      <div class="mt-auto flex flex-wrap gap-3 pt-2">
        <ng-content />
      </div>
    </article>
  `,
})
export class BriefCard {
  readonly brief = input.required<Brief>();

  protected readonly difficultyClass = computed(() => DIFFICULTY_CLASSES[this.brief().difficulty] ?? DIFFICULTY_CLASSES['intermedio']);
}
