import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.page.html',
  styleUrls: ['./leave-history.page.scss'],
})
export class LeaveHistoryPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  Back(){
    this.navCtrl.back();
  }
}
