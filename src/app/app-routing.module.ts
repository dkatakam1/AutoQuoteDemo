import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesProvideDetailsComponent } from './components/vehicles-provide-details/vehicles-provide-details.component';
import { AddVehicleComponent } from './components/add-vehicle/add-vehicle.component';
import { AddVehicleBackgroundComponent } from './components/add-vehicle-background/add-vehicle-background.component';
import { AddVehicleLookupComponent } from './components/add-vehicle-lookup/add-vehicle-lookup.component';
import { BridgeComponentComponent } from './components/bridge-component/bridge-component.component';


const routes: Routes = [
  {path:'', component:BridgeComponentComponent},
  {path:'showOverlay/:id', component:AddVehicleBackgroundComponent},
  {path:'addVehicle', component:AddVehicleComponent},
  {path:'lookupVehicle', component:AddVehicleLookupComponent},
  {path:'provideDetails', component:VehiclesProvideDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




