import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header';
import { Footer } from './layout/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  host: { class: 'flex min-h-screen flex-col' },
  template: `
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-white"
    >
      Saltar al contenido
    </a>
    <app-header />
    <main id="main" tabindex="-1" class="flex flex-1 flex-col focus:outline-none">
      <router-outlet />
    </main>
    <app-footer />
  `,
})
export class App {}
