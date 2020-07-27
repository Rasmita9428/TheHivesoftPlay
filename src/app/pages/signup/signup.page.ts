import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email:any;
  password:any;
  confirmpassword:any;
  constructor(public navctrl:NavController) { }

  ngOnInit() {
  }
  signin(){
    this.navctrl.navigateRoot('signin');
  }
  signup(){
    this.navctrl.navigateRoot('signin');

  }
}
