import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users:FormGroup;
  display = 0;
  email:string;
  password;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb: FormBuilder) {
  this.users =this.fb.group({
    firstname:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z]'),Validators.required])],
    lastname:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z]'),Validators.required])],
    cellnumber:['',Validators.compose([Validators.maxLength(10),Validators.pattern('[0-9]'),Validators.required])],
    email:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z]'),Validators.required])],
    password:['',Validators.compose([Validators.maxLength(25),Validators.pattern('[a-zA-Z0-9]'),Validators.required])],
  })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }
  logins(){
    this.display = 1;
    
  }
  home(){
    firebase.auth().signInWithEmailAndPassword(this.email,this.password).then(user => {
      this.navCtrl.push("LoginPage")
    })
   }
  signups(){
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(user => {
      this.navCtrl.push("SignupPage") 
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
