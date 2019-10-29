import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareSelectedVehiclesService {

  private selectedVehicles = new BehaviorSubject([]);
  currentVehicle = this.selectedVehicles.asObservable();

  constructor() { }

  shareSelectedVehicles(sVehicles: any){
    this.selectedVehicles.next([...sVehicles])
  }

}
