import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawViewPage } from './law-view';

@NgModule({
  declarations: [
    LawViewPage,
  ],
  imports: [
    IonicPageModule.forChild(LawViewPage),
  ],
})
export class LawViewPageModule {}
