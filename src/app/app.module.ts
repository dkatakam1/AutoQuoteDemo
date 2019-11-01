import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVehicleBackgroundComponent } from './components/add-vehicle-background/add-vehicle-background.component';
import { HeaderComponent } from './components/header/header.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { AddVehicleOverlayComponent } from './components/add-vehicle-overlay/add-vehicle-overlay.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { AddVehicleOverlayWithdataComponent } from './components/add-vehicle-overlay-withdata/add-vehicle-overlay-withdata.component';
import { VehiclesProvideDetailsComponent } from './components/vehicles-provide-details/vehicles-provide-details.component';
import { AddVehicleLookupComponent } from './components/add-vehicle-lookup/add-vehicle-lookup.component';
import { BridgeComponentComponent } from './components/bridge-component/bridge-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVehicleBackgroundComponent,
    HeaderComponent,
    StatusBarComponent,
    AddVehicleOverlayComponent,
    AddVehicleComponent,
    AddVehicleOverlayWithdataComponent,
    VehiclesProvideDetailsComponent,
    AddVehicleLookupComponent,
    BridgeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [AddVehicleOverlayComponent,AddVehicleOverlayWithdataComponent ]
})
export class AppModule { }
