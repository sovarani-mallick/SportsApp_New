import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.page.html',
  styleUrls: ['./leave-request.page.scss'],
})
export class LeaveRequestPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  Back(){
    this.navCtrl.back();
  }
}
