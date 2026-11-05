import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FavoritesService } from '../core/favorites.service';
import { ThemeToggle } from './theme-toggle';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, ThemeToggle],
  template: `
    <header class="sticky top-0 z-40 border-b border-white/10 bg-ink-950/70 backdrop-blur-xl">
      <div class="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4 lg:px-8">
        <div class="flex items-center justify-between gap-3 sm:contents">
          <a routerLink="/" class="group flex items-center gap-3 rounded-xl" aria-label="Idea Lab, ir al inicio">
            <span class="relative flex h-9 w-9 items-center justify-center" aria-hidden="true">
              <span class="absolute inset-0 rounded-md bg-accent-400 transition duration-500 group-hover:rotate-45"></span>
              <span class="absolute bottom-0 right-0 h-4 w-4 rounded-full bg-primary-400"></span>
            </span>
            <span class="font-display text-xl font-bold tracking-tight text-ink-50">Idea Lab</span>
          </a>
          <app-theme-toggle class="sm:order-last" />
        </div>

        <nav aria-label="Navegación principal" class="min-w-0 w-full overflow-x-auto sm:ml-auto sm:w-auto">
          <ul class="flex w-max gap-1 rounded-full bg-white/5 p-1 ring-1 ring-white/10">
            @for (link of links; track link.path) {
              <li>
                <a
                  [routerLink]="link.path"
                  routerLinkActive
                  [routerLinkActiveOptions]="{ exact: link.exact }"
                  class="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold whitespace-nowrap text-ink-200 transition duration-200 hover:-translate-y-px hover:bg-white/10 hover:text-ink-50 active:scale-95 sm:px-4 aria-[current=page]:bg-ink-50 aria-[current=page]:text-ink-950 aria-[current=page]:hover:bg-ink-100"
                >
                  {{ link.label }}
                  @if (link.path === '/favoritos' && favorites.count() > 0) {
                    <span class="rounded-full bg-primary-400 px-2 py-0.5 text-xs font-bold text-on-accent" [attr.aria-label]="favorites.count() + ' ideas guardadas'" role="status">
                      {{ favorites.count() }}
                    </span>
                  }
                </a>
              </li>
            }
          </ul>
        </nav>
      </div>
    </header>
  `,
})
export class Header {
  protected readonly favorites = inject(FavoritesService);

  protected readonly links = [
    { path: '/', label: 'Inicio', exact: true },
    { path: '/generador', label: 'Generador', exact: false },
    { path: '/paletas', label: 'Paletas', exact: false },
    { path: '/favoritos', label: 'Favoritos', exact: false },
  ];
}
