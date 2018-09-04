import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

/**
 * Generated class for the ClientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-client',
  templateUrl: 'client.html',
})
export class ClientPage {
  clientForm:FormGroup;
  display = 0;
  client={
    firstname:"",
    lastname:"",
    cellnumber:"",
    email:"",
    password:"",
  }
  email: string;
  password;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,private f: FormBuilder) {
  this.clientForm = this.f.group({
    
      firstname:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z]'),Validators.required])],
      lastname:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z]'),Validators.required])],
      cellnumber:['',Validators.compose([Validators.maxLength(10),Validators.pattern('[0-9]'),Validators.required])],     
    
    email:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z]'),Validators.required])],
    password:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z0-9]'),Validators.required])],
  })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientPage');
  }
  login(){
    this.display = 1;
   
   

    
  }
  signup(){
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
      this.navCtrl.push("SignUPPage")
    })
  }
  logins(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user => {
      this.navCtrl.push("LoginPage")
    })

  }
  reset(){
    
    var auth = firebase.auth();
    var emailAddress = this.email;
    
    auth.sendPasswordResetEmail(emailAddress).then(function() {
      this.navCtrl.push("LoginPage");
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
  }


}
