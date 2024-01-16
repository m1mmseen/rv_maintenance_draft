import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { SidenavComponent } from './components/shared/sidenav/sidenav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NewDeviceComponent} from './components/__mainComponents/new-device/new-device.component'
import { EntriesComponent } from './components/__mainComponents/entries/entries.component';
import { FlarmComponent } from './components/forms/flarm/flarm.component';
import { DroneComponent } from './components/forms/drone/drone.component';
import { MaintenanceComponent } from './components/forms/maintenance/maintenance.component';
import { HomeComponent } from './components/__mainComponents/home/home.component';

import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { GeneralDeviceFormComponent } from './components/shared/general-device-form/general-device-form.component';
import { AccessoiresComponent } from './components/forms/accessoires/accessoires.component';
import { BatteryComponent } from './components/forms/battery/battery.component';
import { NgxScannerQrcodeModule, LOAD_WASM } from 'ngx-scanner-qrcode';
import { ClientsComponent } from './components/__mainComponents/clients/clients.component';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { QrInputComponent } from './components/shared/qr-input/qr-input.component';
import { NewClientComponent } from './components/__mainComponents/clients/new-client/new-client.component';
import { ClientListComponent } from './components/__mainComponents/clients/client-list/client-list.component';

LOAD_WASM().subscribe();

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    NewDeviceComponent,
    EntriesComponent,
    FlarmComponent,
    DroneComponent,
    MaintenanceComponent,
    HomeComponent,
    GeneralDeviceFormComponent,
    AccessoiresComponent,
    BatteryComponent,
    ClientsComponent,
    SortPipe,
    FilterPipe,
    QrInputComponent,
    NewClientComponent,
    ClientListComponent

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxScannerQrcodeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
