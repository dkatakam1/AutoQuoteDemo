import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-user-additional-info',
  templateUrl: './user-additional-info.component.html',
  styleUrls: ['./user-additional-info.component.css']
})
export class UserAdditionalInfoComponent implements OnInit {

  maritalStatus = {
    single: false,
    married: false,
    widowed : false
  }

  gender = {
    male: false,
    female: false,
    nonBinary : false
  }

  mobileChecked = false;
  mobileUnChecked = true;
  maritalStatusFinal = '';
  genderFinal = '';
  isDateFocused = false;


   
    single = new FormControl();
    married = new FormControl();
    widowed = new FormControl();
    male = new FormControl();
    female = new FormControl();
    nonBinary = new FormControl();
    

  constructor(private formBuilder: FormBuilder) { }


  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      prefix: ['', []],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      suffix: [''],
      email: ['', [Validators.required, Validators.email]],
      birthDay: ['', Validators.required],
      birthMonth: ['', Validators.required],
      birthYear: ['', Validators.required],
      single: [this.single, Validators.required],
      married: [this.married, Validators.required],
      widowed: [this.widowed, Validators.required],
      male: [this.male, Validators.required],
      female: [this.female, Validators.required],
      nonBinary: [this.nonBinary, Validators.required],
      contactNumber: ['', Validators.required]
    });
  }



  onChangePrefix(event: Event){}

  storeValueToLocalStorage(event: Event){
    const targetId = (event.target as Element).id;
   // console.log( "CLicked on the form : " + targetId);
    //console.log("Value : " + this.form.get(targetId).value);

  // console.log(this.form.controls.prefix.value);
      if(targetId == 'single'){
          this.maritalStatus.single = true;
          this.maritalStatusFinal="Single";
          this.maritalStatus.married = false;
          this.maritalStatus.widowed = false;
      }
      if(targetId == 'married'){
        this.maritalStatus.single = false;
        this.maritalStatus.married = true;
        this.maritalStatusFinal="Married";
        this.maritalStatus.widowed = false;
    } 
    if(targetId == 'widowed'){
      this.maritalStatus.single = false;
      this.maritalStatus.married = false;
      this.maritalStatus.widowed = true;
      this.maritalStatusFinal="Widowed";
  }
  if(targetId == 'male'){
    this.gender.male = true;
    this.genderFinal="Male";
    this.gender.female = false;
    this.gender.nonBinary = false;
}
if(targetId == 'female'){
  this.gender.male = false;
  this.gender.female = true;
  this.genderFinal="Female";
  this.gender.nonBinary = false;
} 
if(targetId == 'non-binary'){
this.gender.male = false;
this.gender.female = false;
this.gender.nonBinary = true;
this.genderFinal="Other";
}
  }

  getMaritalStatusActive(){
    return {'marital-status-active' : true};
  }

  hasInValidValue(fName: string){
    return false;
  }

  getFieldDisplayClass(fName: string){

  }

  mobileNumberCheck(){
    if(this.mobileChecked){
      this.mobileChecked = false;
    } else {
      this.mobileChecked = true;
    }
    if(this.mobileUnChecked){
      this.mobileUnChecked = false;
    } else {
      this.mobileUnChecked = true;
    }
  }

  dateFocused(status: String){
    if(status == 'focus')
    this.isDateFocused = true;
    else
    this.isDateFocused = false;
  }

}