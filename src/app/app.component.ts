import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddVehicleOverlayComponent } from './components/add-vehicle-overlay/add-vehicle-overlay.component';
import { AddVehicleOverlayWithdataComponent } from './components/add-vehicle-overlay-withdata/add-vehicle-overlay-withdata.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'VehicleScreens';

  constructor(private modalService: NgbModal) {}

  ngOnInit(){
    this.openBackDropCustomClass();
  }

  open() {
    this.modalService.open(AddVehicleOverlayWithdataComponent);
  }

  openBackDropCustomClass() {
    this.modalService.open(AddVehicleOverlayWithdataComponent, {backdropClass: 'dark-blue-bg-modal', centered: true});
  }

}
