import { Component, input } from '@angular/core';
import { Idea } from '../core/models';
import { StylePanel } from './style-panel';

@Component({
  selector: 'app-idea-card',
  imports: [StylePanel],
  template: `
    <article class="card card-interactive group flex h-full min-w-0 break-words flex-col gap-6 p-6 sm:p-8">
      <div class="flex items-center gap-3">
        <span class="h-3 w-3 rotate-45 bg-primary-400 transition duration-300 group-hover:rotate-180 group-hover:scale-125" aria-hidden="true"></span>
        <p class="text-sm font-semibold uppercase tracking-widest text-ink-300">Temática: {{ idea().theme }}</p>
      </div>

      <div class="grid items-start gap-6 lg:grid-cols-2">
        <app-style-panel [styleName]="idea().style" />

        <div class="flex flex-col gap-6">
          <h3 class="font-display text-2xl font-bold text-ink-50 sm:text-3xl">{{ idea().concept }}</h3>

          <dl class="grid gap-4">
            <div class="rounded-2xl bg-accent-900 p-4 ring-1 ring-inset ring-accent-400/25">
              <dt class="text-xs font-semibold uppercase tracking-wider text-tone-accent">Elemento obligatorio</dt>
              <dd class="mt-1 font-semibold text-ink-50">{{ idea().element }}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="mt-auto flex flex-wrap gap-3 pt-2">
        <ng-content />
      </div>
    </article>
  `,
})
export class IdeaCard {
  readonly idea = input.required<Idea>();
}
