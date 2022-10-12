import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseCrossComponent } from 'src/app/modules/shared/components/close-cross/close-cross.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CloseCrossComponent,
    NavbarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    CloseCrossComponent,
    NavbarComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
