import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-sub-status-bar',
  templateUrl: './sub-status-bar.component.html',
  styleUrls: ['./sub-status-bar.component.scss']
})
export class SubStatusBarComponent implements OnInit {
  steps = [
    {id: 'selectVehicles', order: 1, name: 'Select Vehicles'},
    {id: 'vehicleDetails', order: 2, name: 'Vehicle Details'}];
  @Input() activeStepId: string;

  constructor() {
  }

  ngOnInit() {
  }

  getDisplayClass(stepId: string): string {
    if (this.activeStepId === stepId) {
      return 'current';
    }
    const activeStep = this.steps.find(step => step.id === this.activeStepId);
    const thisStep = this.steps.find(step => step.id === stepId);
    if (activeStep && thisStep && thisStep.order < activeStep.order) {
      return 'finished';
    } else {
      return '';
    }
  }
}