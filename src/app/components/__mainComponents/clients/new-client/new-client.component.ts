import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent {
  addDevices = false;

  constructor(private router: Router) {
  }
  saveAndAddDevices() {
    alert("Saved");
    this.router.navigate(['new-device'])
  }

}
