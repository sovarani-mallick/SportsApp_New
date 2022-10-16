import { Component, OnInit, ViewChild} from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-jersey-view',
  templateUrl: './jersey-view.page.html',
  styleUrls: ['./jersey-view.page.scss'],
})
export class JerseyViewPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
@ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  };

  Back(){
    this.navCtrl.back();
  }

}
