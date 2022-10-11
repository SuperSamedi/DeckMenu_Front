import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { YourDecksComponent } from './pages/your-decks/your-decks.component';
import { DeckDetailsComponent } from './pages/deck-details/deck-details.component';
import { NewDeckComponent } from './pages/new-deck/new-deck.component';
import { ShowcaseComponent } from './pages/showcase/showcase.component';
import { SecurityModule } from './modules/security/security.module';
import { SharedModule } from './modules/shared/shared.module';
import { UnauthorizedComponent } from './pages/errors/unauthorized/unauthorized.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    YourDecksComponent,
    DeckDetailsComponent,
    NewDeckComponent,
    ShowcaseComponent,
    UnauthorizedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SecurityModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
