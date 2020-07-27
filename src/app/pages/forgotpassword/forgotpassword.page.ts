import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {
  email:any;
  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  Forgotpassword(){
    this.navctrl.navigateRoot('signin');
  }
  signin(){
     this.navctrl.navigateRoot("signin");
  }
}
