import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../Services/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-coach-login',
  templateUrl: './coach-login.page.html',
  styleUrls: ['./coach-login.page.scss'],
})
export class CoachLoginPage implements OnInit {
  formEmail:any;
  formPassword:any;
  formLogin: FormGroup
  modell: any;
  platformm: any;
  device_tokenn: any;
  userTypeCheck: any;
  uuidd: any;
  userTypeEmail: any;



  constructor(private service:UserService, public navCtrl: NavController, public routs: Router, public formBuilder: FormBuilder) { }

  ngOnInit() {
    // this. sendLoginDetails()
    this.formLogin = new FormGroup({
      myEmail:new FormControl('', Validators.required),
      myPassword:new FormControl('', Validators.required)
    
    })
 
  }
  Back(){
    this.navCtrl.back();
  }

  submitForm(){
    // console.log('value is =', this.formEmail )
    // console.log('value is =', this.formPassword )
      var body ={
      userId :this.formEmail, 
      password :this.formPassword,
      uuid:'111111',
      model : "222222",
      platform : "android",
      device_token : this.device_tokenn,
        }
          
      this.service.login(body).subscribe(res=>{
        console.log('three')
        
        this.userTypeEmail = res['Data']['email']
        this.userTypeCheck = res['Data']['userType']
        console.log(this.userTypeEmail)
        if(res['StatusCode']==200 && this.userTypeCheck==1){
          console.log('four')
          this.routs.navigate(['/player-dashboard']);
        }
        else{
          this.routs.navigate(['/coach-dashboard']);
         }
      }
          )
  // get errorControl() {
  //   return this.ionicForm.controls;
  // }
  // submitForm() {
  //   this.isSubmitted = true;
  //   if (!this.loginForm.valid) {
  //     console.log('Please provide all the required values!')
  //     return false;
  //   } else {
  //     console.log(this.loginForm.value)
  //   }
  // }

//   sendLoginDetails(){
//     console.log('one')
//     var body ={
//       userId : 'this.userIdd', 
//       password : this.passwordd,
//       uuid : this.uuidd,
//       model : this.modell,
//       platform : this.platformm,
//       device_token : this.device_tokenn,

//       email : 's.mukhtar86@gmail.com', 
//       password : 'password',
//       uuid : "111111",
//       model : "222222",
//       platform : "android",
//       device_token : this.device_tokenn,
//     }
//     console.log('two')
//     if(body.email != " " && body.password != ""){
//       this.service.login(body).subscribe(res=>{
//         console.log('three')
//         console.log(res)
//         if(res['StatusCode']==200){
//           console.log('four')
//          this.userTypeCheck = res['Data']['userType']
         
//        if(this.userTypeCheck==1){
//         this.routs.navigate(['/player-dashboard']);
//        }
//        else{
//         this.routs.navigate(['/coach-dashboard']);
//        }
//         }
//       })
//     if(body.userId != " " && body.password != "" && body.uuid != "" && body.model != "" && body.platform != "" && body.device_token != ""){
//       this.service.sendEnquiry(body).subscribe(res=>{
//         if(res['StatusCode']==200){
//           console.log('three')
//          this.userTypeDetails = res['userType']
//          console.log('message')
//          console.log(this.userTypeDetails)
//         }
//       })
//     }
//   }
//  loginForm = this.formBuilder.group({
//     name: ['', [Validators.required, Validators.minLength(8)]],
//     email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
//   })
// }
          }
}
