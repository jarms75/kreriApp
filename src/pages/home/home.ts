import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  hpages: Array<{ title: string, component: any, active: boolean, icon: string, bDescription: string, banner: boolean, iconimg: string }>;

  constructor(public navCtrl: NavController, public menu: MenuController) {

    this.hpages = [
      
      { title: '연구보고서', component: 'ReportPage', active: false, icon: 'map', bDescription: '부동산 및 감정평가 분야', banner: true, iconimg: '../../assets/imgs/home/icon-report.png' },
      { title: '학술지', component: 'JournalPage', active: false, icon: 'ionic',bDescription: '한국연구재단 등재지, 부동산 및 감정평가 관련 논문 수록, 연4회 발간', banner: true, iconimg: '../../assets/imgs/home/icon-report2.png' },
      { title: '감정평가법률정보', component: 'LawPage', active: false, icon: 'ionic',bDescription: '개별법령 조사표 - 평가의뢰자, 목적별, 적용법규, 단수/복수 부분', banner: true, iconimg: '../../assets/imgs/home/icon-law.png' }, 
      { title: '자본환원율', component: 'CapitalizationPage', active: false, icon: 'archive', bDescription: '서울 오피스빌딩 자본환원율 산정 및 보조지표 정보', banner: true, iconimg: '../../assets/imgs/home/icon-coin.png' }, 
      { title: '공지사항', component: 'NoticePage', active: false, icon: 'body', bDescription: '공지사항', banner: true, iconimg: '../../assets/imgs/home/icon-report.png' },
      { title: '연구원소개', component: 'IntroPage', active: false, icon: 'body', bDescription: '연구원소개', banner: true, iconimg: '../../assets/imgs/home/icon-report.png' }
    ];

  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.setRoot(page.component);
    //this.activePage.next(page); // <- 추가
  }

}
