import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-vehicle-overlay',
  templateUrl: './add-vehicle-overlay.component.html',
  styleUrls: ['./add-vehicle-overlay.component.css']
})
export class AddVehicleOverlayComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
