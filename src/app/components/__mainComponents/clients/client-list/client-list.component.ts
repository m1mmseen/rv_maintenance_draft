import { Component } from '@angular/core';
import {Client} from "../../../../models/client";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {
  clients: Client[] = [
    {
      id: '87eisdfs',
      name: "John Doe",
      company: "Fly around AG",
      email: "j.doe@fly-around.com",
      devices: [
        {
          deviceName: 'Mavic 3',
          deviceSerial: '29zusf67we0r28f6w',
          deviceFlightControllerSerial: '29zusf67we0r28f6w',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8,15),
          deviceNextMaintenance: new Date(2023, 8,15),
          deviceAccessoires: [],
          deviceBatteries: [],
        },
        {
          deviceName: 'Mini 3',
          deviceSerial: 'a89a6s8dbasd8923r',
          deviceFlightControllerSerial: 'a89a6s8dbasd8923r',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8,15),
          deviceNextMaintenance: new Date(2023, 8,15),
          deviceAccessoires: [],
          deviceBatteries: [],
        }

      ],
    },
    {
      id: '87eisdfs',
      name: "John Doe",
      company: "Fly around AG",
      email: "j.doe@fly-around.com",
      devices: [
        {
          deviceName: 'Mavic 3',
          deviceSerial: '29zusf67we0r28f6w',
          deviceFlightControllerSerial: '29zusf67we0r28f6w',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8,15),
          deviceNextMaintenance: new Date(2023, 8,15),
          deviceAccessoires: [],
          deviceBatteries: [],
        },
        {
          deviceName: 'Mini 3',
          deviceSerial: 'a89a6s8dbasd8923r',
          deviceFlightControllerSerial: 'a89a6s8dbasd8923r',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8,15),
          deviceNextMaintenance: new Date(2023, 8,15),
          deviceAccessoires: [],
          deviceBatteries: [],
        }

      ],
    },
    {
      id: '87eisdfs',
      name: "John Doe",
      company: "Fly around AG",
      email: "j.doe@fly-around.com",
      devices: [
        {
          deviceName: 'Mavic 3',
          deviceSerial: '29zusf67we0r28f6w',
          deviceFlightControllerSerial: '29zusf67we0r28f6w',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8,15),
          deviceNextMaintenance: new Date(2023, 8,15),
          deviceAccessoires: [],
          deviceBatteries: [],
        },
        {
          deviceName: 'Mini 3',
          deviceSerial: 'a89a6s8dbasd8923r',
          deviceFlightControllerSerial: 'a89a6s8dbasd8923r',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8,15),
          deviceNextMaintenance: new Date(2023, 8,15),
          deviceAccessoires: [],
          deviceBatteries: [],
        }

      ],
    },
    {
      id: '87eisdfs',
      name: "John Doe",
      company: "Fly around AG",
      email: "j.doe@fly-around.com",
      devices: [
        {
          deviceName: 'Mavic 3',
          deviceSerial: '29zusf67we0r28f6w',
          deviceFlightControllerSerial: '29zusf67we0r28f6w',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8,15),
          deviceNextMaintenance: new Date(2023, 8,15),
          deviceAccessoires: [],
          deviceBatteries: [],
        },
        {
          deviceName: 'Mini 3',
          deviceSerial: 'a89a6s8dbasd8923r',
          deviceFlightControllerSerial: 'a89a6s8dbasd8923r',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8,15),
          deviceNextMaintenance: new Date(2023, 8,15),
          deviceAccessoires: [],
          deviceBatteries: [],
        }

      ]
    },
    {
      id: '87eisdfs',
      name: "John Doe",
      company: "Fly around AG",
      email: "j.doe@fly-around.com",
      devices: [
        {
          deviceName: 'Mavic 3',
          deviceSerial: '29zusf67we0r28f6w',
          deviceFlightControllerSerial: '29zusf67we0r28f6w',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8, 15),
          deviceNextMaintenance: new Date(2023, 8, 15),
          deviceAccessoires: [],
          deviceBatteries: [],
        },
        {
          deviceName: 'Mini 3',
          deviceSerial: 'a89a6s8dbasd8923r',
          deviceFlightControllerSerial: 'a89a6s8dbasd8923r',
          deviceDescription: 'string',
          deviceCarePackInfo: 'string',
          deviceStatus: 'In Betrieb',
          deviceInstallation: new Date(2022, 8, 15),
          deviceNextMaintenance: new Date(2023, 8, 15),
          deviceAccessoires: [],
          deviceBatteries: [],
        }

      ]
    }
  ]

  showClicks(event: Event) {
    console.log(event)
  }

  getDate(time: number) {
    return new Date();
  }

}
