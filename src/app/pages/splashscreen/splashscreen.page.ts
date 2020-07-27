import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(public navctrl:NavController) { }

  ngOnInit() {
    setTimeout(() => {
        this.navctrl.navigateRoot('signin');
    }, 5000);
  }

}
