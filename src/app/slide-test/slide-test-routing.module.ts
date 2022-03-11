import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideTestPage } from './slide-test.page';

const routes: Routes = [
  {
    path: '',
    component: SlideTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideTestPageRoutingModule {}
