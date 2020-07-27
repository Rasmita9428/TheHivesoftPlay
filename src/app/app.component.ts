import { Component, OnInit, ViewChild } from '@angular/core';

import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { CommonService } from './utills/common.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent  {  
  @ViewChild(IonRouterOutlet, { static: false }) routerOutlet: IonRouterOutlet;
  counter: any = 1;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    public common:CommonService

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   
    this.platform.backButton.subscribeWithPriority(0, () => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/home') {

        if (this.counter == 2) {
          navigator['app'].exitApp();
        } else {
          this.common.showToast('Press again to exit');
          this.counter++;
        }

        setTimeout(() => {
          this.counter = 1;
        }, 3000);
      }
    });
  }

  ngOnInit() {
   
  }
}
