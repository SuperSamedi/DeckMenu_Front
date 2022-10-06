import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseCrossComponent } from 'src/app/modules/shared/components/close-cross/close-cross.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    CloseCrossComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    CloseCrossComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
