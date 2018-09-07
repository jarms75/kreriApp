import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
/////////////////////////////////////////////////////////////
import { SharedModule } from './shared.module';
//import { ServerProvider } from '../providers/server/server';
import { MODULES, PROVIDERS } from './app.imports';
//import { HttpClientModule } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
/////////////////////////////////////////////////////////////

@NgModule({
  declarations: [
    MyApp,
     
  ],
  imports: [
    MODULES,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SharedModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    PROVIDERS,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
