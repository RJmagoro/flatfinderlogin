import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users:FormGroup;
  display = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder) {
  this.users =this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    cellnumber:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required],
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }
  login(){
    this.display = 1;
  }
  home(){
    this.navCtrl.push("HomePage");
  }
  signup(){
    this.navCtrl.push("HomePage")
  }

}
