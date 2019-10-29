import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleBackgroundComponent } from './components/add-vehicle-background/add-vehicle-background.component';
import { HeaderComponent } from './components/header/header.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { AddVehicleOverlayComponent } from './components/add-vehicle-overlay/add-vehicle-overlay.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { AddVehicleOverlayWithdataComponent } from './components/add-vehicle-overlay-withdata/add-vehicle-overlay-withdata.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleBackgroundComponent,
    HeaderComponent,
    StatusBarComponent,
    AddVehicleOverlayComponent,
    AddVehicleComponent,
    AddVehicleOverlayWithdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [AddVehicleOverlayComponent,AddVehicleOverlayWithdataComponent ]
})
export class AppModule { }
