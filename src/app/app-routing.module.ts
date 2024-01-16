import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/__mainComponents/home/home.component";

import {MaintenanceComponent} from "./components/__mainComponents/maintenance/maintenance.component";
import {EntriesComponent} from "./components/__mainComponents/entries/entries.component";
import {ClientsComponent} from "./components/__mainComponents/clients/clients.component";
import {NewDeviceComponent} from "./components/__mainComponents/new-device/new-device.component";
import {NewClientComponent} from "./components/__mainComponents/clients/new-client/new-client.component";
import {ClientListComponent} from "./components/__mainComponents/clients/client-list/client-list.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clients', component: ClientsComponent, children: [
      {
        path: 'new-client', component: NewClientComponent
      },
      {
        path: '', component: ClientListComponent
      }
    ]
  },
  {
    path: 'new-device', component: NewDeviceComponent
  },
  {
    path: 'new-maintenance', component: MaintenanceComponent
  },
  {
    path: 'entries', component: EntriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
