import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MidllePageRoutingModule } from './midlle-routing.module';

import { MidllePage } from './midlle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MidllePageRoutingModule
  ],
  declarations: [MidllePage]
})
export class MidllePageModule {}
