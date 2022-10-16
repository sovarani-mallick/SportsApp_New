import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.page.html',
  styleUrls: ['./inquiry.page.scss'],
})
export class InquiryPage implements OnInit {
  centerResult: any;
  cityResult: any;
  sportsResult: any;
  spIdd;
  usrTypeIdd: any;
  cenIdd: any;
  cityIdd: any;
  namee: any;
  phonee: any;
  emaill: any;
  sendEnqDetails: any;
  constructor( public navCtrl: NavController, private service:UserService, ) { }
  ngOnInit() {
    console.log('Hello');
    this.sportsInfo()
    this.cityInfo()
    this.centerInfo()
    this.sendEnquiryDetails()
    }



    Back(){
      this.navCtrl.back();
    }
 
    
    sportsInfo(){
      this.service.selectSports().subscribe(res =>{
        console.log(res);
        if(res['StatusCode'] == 200){
         this.sportsResult= res['Data'];
         console.log('result');
         console.log(this.sportsResult)
        }
       },
       )
    }

    cityInfo(){
      this.service.selectCity().subscribe(res =>{
        console.log(res);
        if(res['StatusCode'] == 200){
         this.cityResult = res['Data'];
        }
       },
       )
    }

    centerInfo(){
      this.service.selectCenter().subscribe(res =>{
        console.log(res);
        if(res['StatusCode'] == 200){
         this.centerResult = res['Data'];
        }
       },
       )
    }

    sendEnquiryDetails(){
      console.log('one')
      var body ={
        spId : this.spIdd, 
        usrTypeId : this.usrTypeIdd,
        cityId : this.cityIdd,
        cenId : this.cenIdd,
        name : this.namee,
        phone : this.phonee,
        email : this.emaill,
      }
      console.log('two')
      if(body.spId != "" && body.usrTypeId != "" && body.cityId != "" && body.cenId != "" && body.name != "" && body.phone != "" && body.email){
        this.service.sendEnquiry(body).subscribe(res=>{
          if(res['StatusCode']==200){
            console.log('three')
           this.sendEnqDetails = res['message']
           console.log('message')
           console.log(this.sendEnqDetails)
          }
        })
      }
    }

}
