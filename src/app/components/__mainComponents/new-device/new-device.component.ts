import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent implements OnInit{
  types: string[] = ['Drohne', 'Flarm'];
  chooseDeviceForm: FormGroup;
  deviceChosen = false;
  device: string = '';

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    this.chooseDeviceForm = this.formbuilder.group(
      {deviceType: ['', Validators.required]}
    )
    this.chooseDeviceForm.controls['deviceType'].valueChanges.subscribe(value => {
      console.log(value);
      this.device = value;
    });
  }



  onChosen() {
    this.deviceChosen = true;
  }

  onCancel() {
    this.chooseDeviceForm.reset();
    this.deviceChosen = false;
  }

  onReset() {

  }


}
