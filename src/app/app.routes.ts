import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home-component/home-component';
import {FansSection} from './public/pages/fans-section/fans-section';
import {ArtistSection} from './public/pages/artist-section/artist-section';
import {PageNotFound} from './public/pages/page-not-found/page-not-found';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },// Default
  { path: 'home', component: HomeComponent },
  { path: 'fans', component: FansSection },
  { path: 'artists', component: ArtistSection },
  { path: '**', component: PageNotFound }
];
