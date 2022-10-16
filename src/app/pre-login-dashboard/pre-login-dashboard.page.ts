import { Component, OnInit } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import * as internal from 'stream';
import { UserService } from '../Services/user.service';
@Component({
  selector: 'app-pre-login-dashboard',
  templateUrl: './pre-login-dashboard.page.html',
  styleUrls: ['./pre-login-dashboard.page.scss'],
})
export class PreLoginDashboardPage implements OnInit {
  option = {
    slidesPerView: 1.5,
    // centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    autoplay:true,
  }
  eventResult: any;
  eventbanner: any;
  constructor(private service:UserService,) { }
  slidesDidLoad(slides: IonSlides): void {
    slides.startAutoplay();
  }
  ngOnInit() {
    this.eventInfo()
  }
 
  eventInfo(){
    this.service.event().subscribe(res =>{
      console.log(res);
      if(res['StatusCode'] == 200){
       this.eventResult = res['Data'];
       console.log( this.eventResult)
      }
     },
     )
  }

}
function index(index: any) {
  throw new Error('Function not implemented.');
}

