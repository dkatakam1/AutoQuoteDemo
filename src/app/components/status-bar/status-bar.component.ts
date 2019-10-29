import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  steps = [
    {id: 'details', order: 1, name: 'Details'},
    {id: 'vehicles', order: 2, name: 'Vehicles'},
    {id: 'drivers', order: 3, name: 'Drivers'},
    {id: 'quote', order: 3, name: 'Quote'}];
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