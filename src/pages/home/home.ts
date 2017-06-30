import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  scanData: any = {};
  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner) {

  }

  startScanner(){
    this.barcodeScanner.scan().then((barcodeData) => {
      this.scanData = barcodeData;
    }, (err) => {
        // An error occurred
    });
  }

}
