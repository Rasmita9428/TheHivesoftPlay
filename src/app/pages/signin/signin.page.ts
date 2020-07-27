import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email:any;
  password:any;
  public type = 'password'; 
  public showPass = false;

  constructor(public navctrl:NavController) { }

  ngOnInit() {
   
  }
  login(){
      this.navctrl.navigateRoot('home');
   
  }
  signup(){
    this.navctrl.navigateRoot('signup');
  }
  forgotpassword(){
    this.navctrl.navigateRoot('forgotpassword');
  }


  showPassword() {
    this.showPass = !this.showPass;
          if(this.showPass){
              this.type = 'text';
               } else {
         this.type = 'password';
       }
     }
     
}
