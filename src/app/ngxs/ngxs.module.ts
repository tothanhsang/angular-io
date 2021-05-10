import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxsRoutingModule } from './ngxs-routing.module';
import { NgxsComponent } from './ngxs.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';


@NgModule({
  declarations: [
    NgxsComponent,
    CreateComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    NgxsRoutingModule
  ]
})
export class NgxsModule { }
