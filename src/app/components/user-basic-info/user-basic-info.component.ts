import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-basic-info',
  templateUrl: './user-basic-info.component.html',
  styleUrls: ['./user-basic-info.component.css']
})
export class UserBasicInfoComponent implements OnInit {

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
  goNext = false;
  goBack = false;

  prefixSelected = '';
  suffixSelected = '';
  isprefixDDExpanded = false;
  issuffixDDExpanded = false;


   
    single = new FormControl();
    married = new FormControl();
    widowed = new FormControl();
    male = new FormControl();
    female = new FormControl();
    nonBinary = new FormControl();
    

  constructor(private formBuilder: FormBuilder, private router: Router) { }


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

  togglePrefixSuffix(value : number){
    if(value == 1){
      if(this.isprefixDDExpanded){ this.isprefixDDExpanded = false;}
      else { this.isprefixDDExpanded = true;}
    } else {
      if(this.issuffixDDExpanded){ this.issuffixDDExpanded = false;}
      else { this.issuffixDDExpanded = true;}
    }

  }

  selectPrefix(prefix: string){
    this.prefixSelected = prefix;
    this.togglePrefixSuffix(1);
  }

  selectSuffix(suffix: string){
    this.suffixSelected = suffix;
    this.togglePrefixSuffix(2);
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

  prevPage(){
    this.goBack = true;
  }

  nextPage(){
    
    console.log("Data collected in this form : ");
    console.log("Prefix : " + this.form.controls.prefix.value);
    console.log("FirstName : " + this.form.controls.firstName.value);
    console.log("LastName : " +this.form.controls.lastName.value );
    console.log("Suffix : " + this.form.controls.suffix.value);
    console.log("Email : " + this.form.controls.email.value);
    console.log("BirthDate : " + this.form.controls.birthDay.value);
    console.log("BirthMonth : " +this.form.controls.birthMonth.value );
    console.log("BirthYear : " + this.form.controls.birthYear.value);
    console.log("Gender : " +this.maritalStatusFinal );
    console.log("Marital Status : " + this.genderFinal);
    console.log("Contact Number: " + this.form.controls.contactNumber.value);
    console.log("Mobile Checked: " + this.mobileChecked);
    this.goNext = true;
    this.router.navigate(['/contactInfo']);
    
  }

}
