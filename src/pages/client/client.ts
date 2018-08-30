import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {
  clientForm:FormGroup;
  display = 0;
  signup:boolean=false;
  logins:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,private f: FormBuilder) {
  this.clientForm = this.f.group({
    email:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z0-9]'),Validators.required])],
    password:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z0-9]'),Validators.required])],
  })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }
  login(){
    this.display = 1;

    
  }


}
