import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlideTestPageRoutingModule } from './slide-test-routing.module';

import { SlideTestPage } from './slide-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideTestPageRoutingModule
  ],
  declarations: [SlideTestPage]
})
export class SlideTestPageModule {}
