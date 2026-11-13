import { Component, computed, inject } from '@angular/core';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-theme-toggle',
  template: `
    <button
      type="button"
      role="switch"
      [attr.aria-checked]="isLight()"
      aria-label="Modo claro"
      (click)="toggle()"
      class="group relative inline-flex h-9 w-16 shrink-0 cursor-pointer items-center rounded-full bg-white/10 ring-1 ring-white/15 transition duration-300 hover:ring-white/30 active:scale-95"
    >
      <span class="absolute inset-0 flex items-center justify-between px-2.5 text-ink-400" aria-hidden="true">
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
        <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      </span>

      <span
        class="absolute left-1 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-accent-400 text-on-accent shadow-md transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        [class.translate-x-7]="isLight()"
        aria-hidden="true"
      >
        @if (isLight()) {
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        } @else {
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        }
      </span>
    </button>
  `,
})
export class ThemeToggle {
  private readonly themeService = inject(ThemeService);

  protected readonly isLight = computed(() => this.themeService.theme() === 'light');

  protected toggle(): void {
    this.themeService.toggle();
  }
}
