import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer class="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p class="font-display text-2xl font-bold text-ink-50">Idea Lab</p>
          <p class="mt-4 max-w-sm leading-relaxed text-ink-200">
            Una herramienta de inspiración para diseñadores, ilustradores y creativos que necesitan
            su próxima gran idea.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <p class="text-sm font-semibold uppercase tracking-widest text-tone-accent">Explorar</p>
          <ul class="mt-4 grid gap-3">
            @for (link of links; track link.path) {
              <li>
                <a [routerLink]="link.path" class="inline-block rounded-md text-ink-100 transition duration-200 hover:translate-x-1 hover:text-tone-accent">
                  {{ link.label }}
                </a>
              </li>
            }
          </ul>
        </nav>

        <div>
          <p class="text-sm font-semibold uppercase tracking-widest text-tone-accent">Consejo</p>
          <p class="mt-4 leading-relaxed text-ink-200">
            Tus favoritos se guardan en este navegador. Usa el mismo dispositivo para encontrarlos después.
          </p>
        </div>
      </div>

      <p aria-hidden="true" class="text-outline pointer-events-none select-none px-4 font-display text-[15vw] font-bold leading-none tracking-tighter whitespace-nowrap opacity-25 sm:text-[11vw] sm:px-6 lg:px-8">
        IDEA LAB
      </p>

      <div class="border-t border-white/10">
        <p class="mx-auto max-w-6xl px-4 py-6 text-sm text-ink-300 sm:px-6 lg:px-8">
          © {{ year }} Idea Lab. Hecho para creadores.
        </p>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  protected readonly links = [
    { path: '/', label: 'Inicio' },
    { path: '/generador', label: 'Generador creativo' },
    { path: '/paletas', label: 'Paletas de color' },
    { path: '/favoritos', label: 'Mis favoritos' },
  ];
}
