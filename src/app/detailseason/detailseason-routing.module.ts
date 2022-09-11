import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailseasonPage } from './detailseason.page';

const routes: Routes = [
  {
    path: '',
    component: DetailseasonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailseasonPageRoutingModule {}
