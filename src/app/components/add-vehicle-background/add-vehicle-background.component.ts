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
  membershipOverlayOff = false;
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
   /** 
    this.shareSvc.currentVehicle.subscribe(vehicles => {
        this.vehicles = [...vehicles];
        this.displayVehicles = this.vehicles.length;
    })
    */

        // Hard coding vehicles array
        this.vehicles[0] = { "year" :  "2020",
              "make" : "AUDI",
              "model" : "A6",
              "vin" : "AYTCXT9087Y3YD5W"};
        this.vehicles[1] = { "year" :  "2017",
            "make" : "MERCEDES",
            "model" : "S550",
            "vin" : "VTRERN77TKID98465"};     
        this.vehicles[2] = { "year" :  "2009",
            "make" : "HOND",
            "model" : "COUPE",
            "vin" : "VTRERN77TKID98465"}; 
            this.displayVehicles = this.vehicles.length;

    this.vehicles.forEach(vehicle => {
      vehicle.removed = "false";
    })
  }
  onMemberhsipOverlayClose(){
    this.membershipOverlayOff = true;
  }

  vehicleSelected(index: number){
    console.log("checked : " + index);
    /*
    let idx = this.selectedVehicleIndices.findIndex((value) =>{
        return value == index;
    })

    if(idx == -1){
    this.selectedVehicleIndices.push(index);
    } else {
      this.selectedVehicleIndices.splice(idx, 1);
    } */ 
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
       this.modalService.open(AddVehicleOverlayComponent, {centered: true});
    } else {
      this.modalService.open(AddVehicleOverlayComponent, {centered: true});
    }
 }

  
}
