import { Component } from '@angular/core';
import {Entry} from "../../../models/entry";

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent {

  entries: Entry[] = [
    {
      id: 1,
      client: 'John Doe',
      device: 'Mavic 3',
      type: 'Inbetriebnahme',
      date: new Date(),
      technician: 'Cyrill'
    },
    {
      id: 2,
      client: 'John Doe',
      device: 'Mini 3',
      type: 'Wartung',
      date: new Date(),
      technician: 'Cyrill'
    },
    {
      id: 3,
      client: 'Jane Blub',
      device: 'Agras T30',
      type: 'Inbetriebnahme',
      date: new Date(),
      technician: 'Manuel'
    },
    {
      id: 4,
      client: 'Max Mustermann',
      device: 'Flarm',
      type: 'Firmware-Update',
      date: new Date(),
      technician: 'David'
    },
    {
      id: 5,
      client: 'Testus Testemann',
      device: 'Matrice 300',
      type: 'Repair',
      date: new Date(),
      technician: 'Cyrill'
    },
    {
      id: 4,
      client: 'Max Mustermann',
      device: 'Flarm',
      type: 'Firmware-Update',
      date: new Date(),
      technician: 'David'
    },
    {
      id: 5,
      client: 'Testus Testemann',
      device: 'Matrice 300',
      type: 'Repair',
      date: new Date(),
      technician: 'Cyrill'
    },
    {
      id: 4,
      client: 'Max Mustermann',
      device: 'Flarm',
      type: 'Firmware-Update',
      date: new Date(),
      technician: 'David'
    },
    {
      id: 5,
      client: 'Testus Testemann',
      device: 'Matrice 300',
      type: 'Repair',
      date: new Date(),
      technician: 'Cyrill'
    },
    {
      id: 4,
      client: 'Max Mustermann',
      device: 'Flarm',
      type: 'Firmware-Update',
      date: new Date(),
      technician: 'David'
    },
    {
      id: 5,
      client: 'Testus Testemann',
      device: 'Matrice 300',
      type: 'Repair',
      date: new Date(),
      technician: 'Cyrill'
    },
  ]

  showClicks(event: Event) {
    console.log(event)
  }

  getDate(time: number) {
    return new Date();
  }

}
