import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailseasonPageRoutingModule } from './detailseason-routing.module';

import { DetailseasonPage } from './detailseason.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailseasonPageRoutingModule
  ],
  declarations: [DetailseasonPage]
})
export class DetailseasonPageModule {}
