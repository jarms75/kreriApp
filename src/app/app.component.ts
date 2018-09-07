import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';
 
 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';
  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  state: any;
  placeholder = 'assets/img/avatar/girl-avatar.png';
  chosenPicture: any;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController
  ){
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'HomePage', active: true, icon: 'home' },
      { title: '연구보고서', component: 'ReportPage', active: false, icon: 'map' },
      { title: '학술지', component: 'JournalPage', active: false, icon: 'ionic' },
      { title: '감정평가법률정보', component: 'LawPage', active: false, icon: 'ionic' },
      { title: '자본환원율', component: 'CapitalizationPage', active: false, icon: 'archive' },
      { title: '공지사항', component: 'NoticePage', active: false, icon: 'body' },
      { title: '연구원소개', component: 'IntroPage', active: false, icon: 'body' }
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menuCtrl.enable(false, 'right'); // <- 추가
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page); // <- 추가
  }

   
}
