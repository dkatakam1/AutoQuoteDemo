import { Component, OnInit } from '@angular/core';
import { ShareSelectedVehiclesService } from 'src/app/share-selected-vehicles.service';

@Component({
  selector: 'app-add-vehicle-background',
  templateUrl: './add-vehicle-background.component.html',
  styleUrls: ['./add-vehicle-background.component.css']
})
export class AddVehicleBackgroundComponent implements OnInit {

  vehicles = [];
  displayVehicles = 0;
  constructor(private shareSvc: ShareSelectedVehiclesService) { }

  ngOnInit() {
    this.shareSvc.currentVehicle.subscribe(vehicles => {
        this.vehicles = [...vehicles];
        this.displayVehicles = this.vehicles.length;
    })
    this.vehicles.forEach(vehicle => {
      vehicle.removed = "false";
    })
  }

  provideDetails(){

  }

  removeVehicle(index: number){
    console.log("Vehicle removeed");
      this.vehicles[index].removed = true;
      this.displayVehicles--;
  }
  
}
