import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MidllePage } from './midlle.page';

const routes: Routes = [
  {
    path: '',
    component: MidllePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MidllePageRoutingModule {}
