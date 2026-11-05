import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { IdeaGenerator } from './pages/idea-generator';
import { Palettes } from './pages/palettes';
import { Favorites } from './pages/favorites';

export const routes: Routes = [
  { path: '', component: Home, title: 'Idea Lab | Inicio' },
  { path: 'generador', component: IdeaGenerator, title: 'Idea Lab | Generador creativo' },
  { path: 'paletas', component: Palettes, title: 'Idea Lab | Paletas de color' },
  { path: 'favoritos', component: Favorites, title: 'Idea Lab | Mis favoritos' },
  { path: '**', redirectTo: '' },
];
