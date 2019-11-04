import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bridge-component',
  templateUrl: './bridge-component.component.html',
  styleUrls: ['./bridge-component.component.css']
})
export class BridgeComponentComponent implements OnInit {

 
  constructor(private router:Router) { }

  ngOnInit() {
  }

  nextPage(){
    // Make API call to detect if there are any vehicles for the registered address
    //If yes pass 2 to the route or pass 1 if no data
    this.router.navigate(['/showOverlay', 2]);
  }

}
