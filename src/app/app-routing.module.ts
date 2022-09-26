import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckDetailsComponent } from './pages/deck-details/deck-details.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { YourDecksComponent } from './pages/your-decks/your-decks.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'decks', component: YourDecksComponent },
  { path: 'decks/:id', component: DeckDetailsComponent },
  { path: 'decks/new', component: NewDeckComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
