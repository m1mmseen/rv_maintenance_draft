import {Component, ViewChild} from '@angular/core';
import {NgxScannerQrcodeComponent} from "ngx-scanner-qrcode";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-qr-input',
  templateUrl: './qr-input.component.html',
  styleUrls: ['./qr-input.component.css']
})
export class QrInputComponent {
  @ViewChild('scanner') scanner: NgxScannerQrcodeComponent;
  input= new FormControl('scan serial no.')

  ngOnInit() {
    this.input.valueChanges.subscribe(value => {
      console.log('Input value changed to: ', value);
    });
  }

  terminate(){
    if (this.scanner.data.value.length === 1) {
      this.scanner.stop();
    }
  }

}
