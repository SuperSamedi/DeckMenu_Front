
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CloseCrossComponent } from "src/app/modules/shared/components/close-cross/close-cross.component";
import { SharedModule } from "../shared/shared.module";
import { SignInComponent } from "./components/sign-in/sign-in.component";

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    SignInComponent,
  ]
})
export class SecurityModule { }
