import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-additional-info',
  templateUrl: './user-additional-info.component.html',
  styleUrls: ['./user-additional-info.component.css']
})
export class UserAdditionalInfoComponent implements OnInit {


    memberships = false;
    rentersInsurance = false;
    lifeInsurance = false;
    homeCondoOwners = false;
    isYes:boolean;
    isNo:boolean;
    goBack = false;
    goNext = false;
   
  constructor(private router: Router) { }

  ngOnInit() {
  }


  hasInValidValue(fName: string){
    return false;
  }

  getFieldDisplayClass(fName: string){

  }

  toggleOption(status: boolean){
    if(status == true) return false;
    else return true;
  }

  radioButtonChecked(event: Event){
    
    console.log("Radio button checked");

    const targetId = (event.target as Element).id;
    if(targetId == 'yes'){
      this.isNo = false;
      this.isYes = true;
    } else {
      this.isNo = true;
      this.isYes = false;
    }
 
  }

  productCheck(option: number){

    if(option == 1){
      this.memberships = this.toggleOption(this.memberships);
    }
    
    if(option == 2){
      this.rentersInsurance = this.toggleOption(this.rentersInsurance);
    }
    
    if(option == 3){
      this.lifeInsurance = this.toggleOption(this.lifeInsurance);
    }
    
    if(option == 4){
      this.homeCondoOwners = this.toggleOption(this.homeCondoOwners);
    }
  
  }

  prevPage(){
    this.goBack = true;
    this.router.navigate(['/contactInfo']);
  }

  nextPage(){
    this.goNext = true;
    /* 
      Get the value of selected checkboxes and radio button using the boolean value(true) in the below variables
        this.memberships
        this.rentersInsurance
        this.lifeInsurance
        this.homeCondoOwners
        this.isYes
        this.isNo
    */
  }

}