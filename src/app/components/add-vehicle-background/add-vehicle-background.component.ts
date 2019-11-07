import { Component, OnInit, ViewChild } from '@angular/core';
import { ShareSelectedVehiclesService } from 'src/app/share-selected-vehicles.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddVehicleOverlayComponent } from '../add-vehicle-overlay/add-vehicle-overlay.component';
import { AddVehicleOverlayWithdataComponent } from '../add-vehicle-overlay-withdata/add-vehicle-overlay-withdata.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-add-vehicle-background',
  templateUrl: './add-vehicle-background.component.html',
  styleUrls: ['./add-vehicle-background.component.css']
})
export class AddVehicleBackgroundComponent implements OnInit {

  isVehiclesFound = false;
  isVehiclesNotSelected = true;
  vehicles = [];
  selectedVehicleIndices = [];
  vehiclesLength = 0;
  displayVehicles = 0;
  membershipOverlayOff = false;
  @ViewChild(FooterComponent, {static: false}) footer;
  constructor(private shareSvc: ShareSelectedVehiclesService, 
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private modalService: NgbModal) { }

  ngOnInit() {

    // this.openBackDropCustomClass();
   /** 
    this.shareSvc.currentVehicle.subscribe(vehicles => {
        this.vehicles = [...vehicles];
        this.displayVehicles = this.vehicles.length;
    })
    */


        // Hard coding vehicles array
        this.vehicles.push({ "year" :  "2020",
              "make" : "AUDI",
              "model" : "A6",
              "vin" : "AYTCXT9087Y3YD5W"});
        this.vehicles.push({ "year" :  "2017",
            "make" : "MERCEDES",
            "model" : "S550",
            "vin" : "VTRERN77TKID98465"});  
        this.vehicles.push({ "year" :  "2009",
            "make" : "HOND",
            "model" : "COUPE",
            "vin" : "VTRERN77TKID98465"});

            
        this.activatedRoute.queryParams.subscribe(queryParams => {      
                if(queryParams.year != undefined ) {
                    this.vehicles.push( {"year" : queryParams.year,
                    "make": queryParams.make,
                    "model": queryParams.model,
                    "vin" : queryParams.vin,
                    "removed": false });
                    this.displayVehicles ++;
                    this.selectedVehicleIndices.push(this.vehicles.length - 1);
                    this.membershipOverlayOff = true;
                }    
           });

          
            this.displayVehicles = this.vehicles.length;
            this.vehiclesLength = this.vehicles.length;

    this.vehicles.forEach(vehicle => {
      vehicle.removed = false;
    })
  }
  onMemberhsipOverlayClose(){
    this.membershipOverlayOff = true;
  }

  vehicleSelected(index: number){
   console.log("checked : " + index);
   this.footer.isActive = true;
    let idx = this.selectedVehicleIndices.findIndex((value) =>{
        return value == index;
    })

    if(idx == -1){
    this.selectedVehicleIndices.push(index);
    } else {
      this.selectedVehicleIndices.splice(idx, 1);
    } 

    if(this.selectedVehicleIndices.length == 0){
      console.log("All unchecked");
      this.footer.isActive = false;
    }

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

    nextStep(event: String){
      let i, j;
      //console.log(event );
      if(event == "clicked"){
         this.isVehiclesNotSelected = false;
      }

      console.log(this.vehicles.length);
      console.log(this.selectedVehicleIndices.length);

          for(i=0; i<this.vehicles.length; i++){
            
              let indexNotFound = true;
              for(j=0; j<this.selectedVehicleIndices.length;j++){
                if(i == this.selectedVehicleIndices[j]){
                  indexNotFound = false;
                  break;
                }
              }

              if(indexNotFound){
                console.log("Index removed: " + i);
                this.vehicles[i].removed = true;
              } else {
                console.log("Index : " + i);
              }
           
          }
      
    }

  
}
