import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShareSelectedVehiclesService } from 'src/app/share-selected-vehicles.service';


@Component({
  selector: 'app-add-vehicle-overlay',
  templateUrl: './add-vehicle-overlay.component.html',
  styleUrls: ['./add-vehicle-overlay.component.css']
})
export class AddVehicleOverlayComponent implements OnInit {

  vehicles = [];
  selectedVehicleIndices = [];
  selectedVehicles = [];
  vehiclesCount = 0;

  constructor(public activeModal: NgbActiveModal, private shareSvc: ShareSelectedVehiclesService) { }

  ngOnInit() {

    this.vehicles[0] = { "year" :  "2009",
                         "make" : "TOYO",
                         "model" : "LE",
                         "vin" : "2DDRN77TKID498464"};
    this.vehicles[1] = { "year" :  "2009",
                         "make" : "HOND",
                         "model" : "COUPE",
                         "vin" : "VTRERN77TKID98465"};     
    this.vehicles[2] = { "year" :  "2009",
                         "make" : "HOND",
                         "model" : "COUPE",
                         "vin" : "VTRERN77TKID98465"};   
    this.vehicles[3] = { "year" :  "2009",
                         "make" : "HOND",
                         "model" : "COUPE",
                         "vin" : "VTRERN77TKID98465"};    
    this.vehicles[4] = { "year" :  "2009",
                         "make" : "HOND",
                         "model" : "COUPE",
                         "vin" : "VTRERN77TKID98465"};   
    this.vehicles[5] = { "year" :  "2009",
                         "make" : "HOND",
                         "model" : "COUPE",
                         "vin" : "VTRERN77TKID98465"};  
    this.vehicles[6] = { "year" :  "2009",
                         "make" : "HOND",
                         "model" : "COUPE",
                         "vin" : "VTRERN77TKID98465"};    
    this.vehiclesCount = this.vehicles.length;                 
  }

  vehicleSelected(index: number){
    console.log("checked : " + index);
    let idx = this.selectedVehicleIndices.findIndex((value) =>{
        return value == index;
    })

    if(idx == -1){
    this.selectedVehicleIndices.push(index);
    } else {
      this.selectedVehicleIndices.splice(idx, 1);
    }  
  }

  displaySelectedVehicles(){
  
    console.log("dislay");
    this.selectedVehicleIndices.forEach((i) => {
      console.log("The VIN is : " + this.vehicles[i].vin);
      this.selectedVehicles.push(this.vehicles[i]);
    })
    
    this.shareSvc.shareSelectedVehicles([...this.selectedVehicles]);
    this.activeModal.close('Close click');
  }
}
