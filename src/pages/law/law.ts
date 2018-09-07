import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, Platform, ModalController, AlertController } from 'ionic-angular';

import { ServerProvider } from '../../providers/server/server'; 


@IonicPage()
@Component({
  selector: 'page-law',
  templateUrl: 'law.html',
})
export class LawPage {
  rootPage: any;
   
  title:  string = '감정평가 관련 개별법령 조사표';
  search: Array<{all: string, type1: string, type2: string, type3: string, type4: string, type5: string}>;
  isAndroid: boolean = false;

  icons: string[];
   
  laws: Array<{idx: string, enactmentDate: string, revisionDate: string, legalName: string, 
  ruleName: string }>;
   
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public platform: Platform, 
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private serverProvider:ServerProvider,
    ) {
      
    this.isAndroid = platform.is('android');
    //this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    //'american-football', 'boat', 'bluetooth', 'build'];
    this.laws = [];
   this.initializeItems();
       
  }

  initializeItems(){
     
    let body={search:this.search};
    let url="/Lawlist.php";
    this.serverProvider.post(url,body).then((res:any)=>{
      if(res.result='faild'){
        let alert =this.alertCtrl.create({
            title:'데이터 로딩에 실패했습니다.',
            buttons:['확인']
        });  
        
      }else{
         
        this.laws =res.result;

      }
    },(err)=>{
          console.log('post-err:'+JSON.stringify(err));
          let alert =this.alertCtrl.create({
              title:'서버와 통신에 문제가 있습니다.',
              buttons:['OK']
          });  

   });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  itemTapped(event, item) {
    this.navCtrl.push(item, {
      item: item
    });
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    //if (val && val.trim() != '') {
    //  this.laws = this.items.filter((item) => {
    //    return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
     // })
    //}
  } 



  // 추가 함수
   
  openHintModal() {
    this.openModal('HintModalPage');
  }
  
  openSearch() {
    this.navCtrl.push('SearchPage');
    
  }

  openSignupModal() {
    this.openModal('SignupModalPage');
  }

  openModal(pageName) {
    this.modalCtrl.create(pageName, null, { cssClass: 'inset-modal' })
                  .present();
  }
   

}
