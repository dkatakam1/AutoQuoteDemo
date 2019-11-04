import { Component, OnInit } from '@angular/core';
import { ShareSelectedVehiclesService } from 'src/app/share-selected-vehicles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddVehicleOverlayComponent } from '../add-vehicle-overlay/add-vehicle-overlay.component';
import { AddVehicleOverlayWithdataComponent } from '../add-vehicle-overlay-withdata/add-vehicle-overlay-withdata.component';

@Component({
  selector: 'app-add-vehicle-background',
  templateUrl: './add-vehicle-background.component.html',
  styleUrls: ['./add-vehicle-background.component.css']
})
export class AddVehicleBackgroundComponent implements OnInit {

  isVehiclesFound = false;
  vehicles = [];
  displayVehicles = 0;
  constructor(private shareSvc: ShareSelectedVehiclesService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      console.log("THE ID IS : " + params.id);
      if(params.id == 2) this.isVehiclesFound = true;
    })

   // this.openBackDropCustomClass();
    this.shareSvc.currentVehicle.subscribe(vehicles => {
        this.vehicles = [...vehicles];
        this.displayVehicles = this.vehicles.length;
    })
    this.vehicles.forEach(vehicle => {
      vehicle.removed = "false";
    })

    

  }

  provideDetails(index: number){
    let vehicleData = { queryParams : {
        "year" : this.vehicles[index].year,
        "make" : this.vehicles[index].make,
        "model" : this.vehicles[index].model,
        "trim" : this.vehicles[index].trim,
        "vin" : this.vehicles[index].vin
    }};
    
    this.router.navigate(['/provideDetails'], vehicleData);
  }

  addNewVehicle(){
    console.log("Navigate to add vehicle");
    this.router.navigate(['/addVehicle']);
  }

  removeVehicle(index: number){
    console.log("Vehicle removeed");
      this.vehicles[index].removed = true;
      this.displayVehicles--;
  }

  openBackDropCustomClass() {

    if(this.isVehiclesFound){
       this.modalService.open(AddVehicleOverlayWithdataComponent, {backdropClass: 'dark-blue-bg-modal', centered: true});
    } else {
      this.modalService.open(AddVehicleOverlayComponent, {backdropClass: 'dark-blue-bg-modal', centered: true});
    }
 }

  
}
