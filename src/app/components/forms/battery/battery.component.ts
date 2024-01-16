import { Component } from '@angular/core';
import {Battery} from "../../../models/battery";
import {Cycle} from "../../../models/cycle";
import {Condition} from "../../../models/condition";
import {BatteryProblem} from "../../../models/batteryProblem";

@Component({
  selector: 'app-battery',
  templateUrl: './battery.component.html',
  styleUrls: ['./battery.component.css']
})
export class BatteryComponent {
  mockBatteryCycles: Cycle[] = [
    {
      cycleNumber: 1,
      cycleNumberDate: new Date(2022, 12, 12),
    },
    {
      cycleNumber: 2,
      cycleNumberDate: new Date(2022, 12, 23),
    }
  ]
  mockBatteryProblem: BatteryProblem[] = [
    {
      batteryCondition: "leicht gebläht",
      batterConditionDescription: 'deutlich erkennbar an der Vorderseite',
      batterProblemStatus: 'onHold'
    }
  ]

}
