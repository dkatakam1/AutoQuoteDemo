import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


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
   
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      isACGFirstCompanyContacted: ['', Validators.required]
    });
    this.initFormData();
  }

  initFormData(){
    
    //this.memberships = this.webStorageService.getFromLocalStorage("memberships");
    //this.rentersInsurance = this.webStorageService.getFromLocalStorage("rentersInsurance");
    //this.lifeInsurance = this.webStorageService.getFromLocalStorage("lifeInsurance");
    //this.homeCondoOwners = this.webStorageService.getFromLocalStorage("homeCondoOwners");
    //this.isYes = this.webStorageService.getFromLocalStorage("isYes");
    //this.isNo = this.webStorageService.getFromLocalStorage("isNo");
    
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


  storeValueToLocalStorage(event: Event){
    let targetId = (event.target as Element).id;

    if(targetId == "memberships"){
      this.memberships = this.toggleOption(this.memberships);
      //this.webStorageService.saveToLocalStorage(targetId, this.memberships);
    }
    
    if(targetId == "rentersInsurance"){
      this.rentersInsurance = this.toggleOption(this.rentersInsurance);
       //this.webStorageService.saveToLocalStorage(targetId, this.rentersInsurance);
    }
    
    if(targetId == "lifeInsurance"){
      this.lifeInsurance = this.toggleOption(this.lifeInsurance);
       //this.webStorageService.saveToLocalStorage(targetId, this.lifeInsurance);
    }
    
    if(targetId == "homeCondoOwners"){
      this.homeCondoOwners = this.toggleOption(this.homeCondoOwners);
       //this.webStorageService.saveToLocalStorage(targetId, this.homeCondoOwners);
    }

    if(targetId == 'isYes'){
      this.isNo = false;
      this.isYes = true;
      this.form.setValue({ isACGFirstCompanyContacted: "Yes"});
      //this.webStorageService.saveToLocalStorage(targetId, this.isYes);
    } 
    
    if(targetId == 'isNo')
    {
      this.isNo = true;
      this.isYes = false;
      this.form.setValue({ isACGFirstCompanyContacted: "No"});
       //this.webStorageService.saveToLocalStorage(targetId, this.isNo);
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