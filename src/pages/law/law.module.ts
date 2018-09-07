import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LawPage } from './law';
import { SharedModule } from '../../app/shared.module'; // <-추가
import { HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    LawPage,
  ],
  imports: [
    IonicPageModule.forChild(LawPage),
    SharedModule,
    HttpClientModule,
    HttpModule,
  ],
  exports: [
    LawPage
  ]
})
export class LawPageModule {}
