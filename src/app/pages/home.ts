import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { randomIdea } from '../core/idea-generator';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <section class="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
      <div class="animate-fade-up">
        <p class="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-tone-accent">
          <span class="h-px w-10 bg-accent-400" aria-hidden="true"></span>
          Inspiración para creativos
        </p>
        <h1 class="mt-6 font-display text-6xl font-bold tracking-tight text-ink-50 sm:text-7xl lg:text-8xl">
          Idea <span class="text-tone-accent">Lab</span>
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
          Descubre conceptos, estilos visuales y paletas de color para tu próximo proyecto. Cuando una
          idea te inspire, guárdala y vuelve a ella cuando la necesites.
        </p>
        <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a routerLink="/generador" class="btn btn-primary w-full sm:w-auto">Comenzar</a>
          <a routerLink="/paletas" class="btn btn-secondary w-full sm:w-auto">Explorar paletas</a>
        </div>
      </div>

      <div class="relative mx-auto h-80 w-full max-w-md sm:h-96" aria-hidden="true">
        <div class="absolute inset-x-0 top-0 h-full rounded-[2.5rem] ring-1 ring-white/10"></div>
        <span class="absolute left-6 top-8 h-40 w-40 animate-float rounded-full bg-primary-400 sm:h-48 sm:w-48"></span>
        <span class="absolute right-8 top-4 h-28 w-28 animate-float rounded-tl-[5rem] rounded-br-[5rem] bg-secondary-400 sm:h-32 sm:w-32" style="animation-delay: -2s"></span>
        <span class="absolute bottom-16 left-10 h-20 w-20 animate-float bg-accent-400" style="animation-delay: -4s; clip-path: polygon(50% 0, 100% 100%, 0 100%)"></span>
        <span class="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-md border-2 border-ink-50/60"></span>

        <div class="glass absolute bottom-6 right-0 w-64 animate-fade-up rounded-2xl p-5 transition duration-500 hover:-translate-y-1 sm:w-72">
          <p class="text-xs font-semibold uppercase tracking-widest text-tone-accent">Idea de muestra</p>
          <p class="mt-2 font-display text-xl font-bold text-ink-50">{{ preview.concept }}</p>
          <p class="mt-2 text-sm text-ink-200">{{ preview.theme }} · {{ preview.style }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 lg:px-8" aria-labelledby="herramientas-titulo">
      <div class="flex items-end justify-between gap-6 border-t border-white/10 pt-8">
        <h2 id="herramientas-titulo" class="font-display text-3xl font-bold text-ink-50 sm:text-4xl">Tres herramientas para avanzar</h2>
        <p class="hidden text-sm font-semibold uppercase tracking-widest text-ink-400 md:block">Índice 01 — 03</p>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        @for (tool of tools; track tool.path; let i = $index) {
          <a
            [routerLink]="tool.path"
            class="card card-interactive group relative flex flex-col gap-4 overflow-hidden p-6 animate-fade-up"
            [style.animation-delay.ms]="i * 100"
            [attr.aria-labelledby]="'tool-title-' + i"
            [attr.aria-describedby]="'tool-desc-' + i"
          >
            <span class="absolute inset-x-0 top-0 h-1 origin-left scale-x-25 transition duration-500 group-hover:scale-x-100" [class]="tool.tone" aria-hidden="true"></span>
            <span class="font-display text-6xl font-bold text-outline transition duration-500 group-hover:text-accent-400" aria-hidden="true">
              0{{ i + 1 }}
            </span>
            <h3 [id]="'tool-title-' + i" class="font-display text-xl font-bold text-ink-50">{{ tool.title }}</h3>
            <p [id]="'tool-desc-' + i" class="leading-relaxed text-ink-200">{{ tool.description }}</p>
            <span class="mt-auto pt-2 text-sm font-semibold text-tone-accent">
              {{ tool.cta }} <span class="inline-block transition duration-300 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
            </span>
          </a>
        }
      </div>
    </section>
  `,
})
export class Home {
  protected readonly preview = randomIdea();

  protected readonly tools = [
    {
      path: '/generador',
      title: 'Generador creativo',
      description: 'Recibe una propuesta con temática, concepto, estilo visual y un elemento obligatorio.',
      cta: 'Generar una idea',
      tone: 'bg-primary-400',
    },
    {
      path: '/paletas',
      title: 'Paletas de color',
      description: 'Combinaciones de cinco colores con códigos HEX listos para copiar.',
      cta: 'Ver paletas',
      tone: 'bg-secondary-400',
    },
    {
      path: '/favoritos',
      title: 'Mis favoritos',
      description: 'Guarda, revisa y elimina las ideas que más te inspiran.',
      cta: 'Abrir favoritos',
      tone: 'bg-accent-400',
    },
  ];
}
