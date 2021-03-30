import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookModule } from 'ngx-facebook';
import { GdevMessengerDirective } from './messenger.directive';
import { MessengerComponent } from './messenger.component';
import { AdminMessengerComponent } from "./admin-messenger/admin-messenger.component";
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FirebaseModule } from '../shared/firebase.module';


@NgModule({
  declarations: [
    GdevMessengerDirective,
    MessengerComponent,
    AdminMessengerComponent
  ],
  imports: [
    CommonModule,
    FacebookModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FirebaseModule
  ],
  exports: [
    MessengerComponent,
    AdminMessengerComponent
  ]
})
export class GdevMessengerModule { }
