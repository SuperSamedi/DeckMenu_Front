import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckDetailsComponent } from './pages/deck-details/deck-details.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { UnauthorizedComponent } from './pages/errors/unauthorized/unauthorized.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { YourDecksComponent } from './pages/your-decks/your-decks.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: ':username/decks', component: YourDecksComponent },
  { path: 'decks/new', component: NewDeckComponent },
  { path: 'decks/:id', component: DeckDetailsComponent },
  { path: ':username/menu', component: ShowcaseComponent },
  { path: 'error/not-found', component: NotFoundComponent },
  { path: 'error/unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
