import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() activeStep : string;
  @Output() nextAction = new EventEmitter();
  isActive = false;

  constructor() { }

  ngOnInit() {
 
  }

  notifyParent(){
    this.nextAction.emit("clicked");
  }

}
