import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicles-provide-details',
  templateUrl: './vehicles-provide-details.component.html',
  styleUrls: ['./vehicles-provide-details.component.css']
})
export class VehiclesProvideDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private activatedRoute : ActivatedRoute) { }

  form: FormGroup;
  typeDescOptions = ['', 'Private Passenger', 'Low Speed Vehicle'];
  vehicleOwnershipOptions = ['', 'Owned', 'Financed', 'Leased'];
  yearList = [''];
  makeList = [''];
  modelList = [''];
  trimList = [''];
  isGaragedAtPolicyAddressYes = false;
  isGaragedAtPolicyAddressNo = false;
  isPreviouslyTitledYes = false;
  isPreviouslyTitledNo = false;
  cYear = '';
  cMake = '';
  cModel = '';
  cTrim = '';
  cVin = '';

 

  ngOnInit() {
    this.form = this.formBuilder.group({
      vin: ['', []],
      year: ['', []],
      make: ['', []],
      model: ['', []],
      trim: ['', []],
      vehicleTypeDescription: ['', Validators.required],
      vehicleOwnership: [''],
      isPreviouslyTitled: ['', Validators.required],
      isGaragedAtPolicyAddress: ['', Validators.required]
    });

    this.initializeDropDowns();
    this.activatedRoute.queryParams.subscribe(queryParams => {
        this.cYear = queryParams.year;
        this.cMake = queryParams.make;
        this.cModel = queryParams.model;
        this.cTrim = queryParams.trim;
        this.cVin = queryParams.vin;
    })
  }

  initializeDropDowns(){

    this.yearList.push('2001');
    this.makeList.push('ASTON MARTIN');
    this.modelList.push('FIESTA 4DR');
    this.trimList.push('TITANIUM');

  }

  storeValueToLocalStorage(event: Event){
    let targetId = (event.target as Element).id;
    let value = this.form.get(targetId).value;
    console.log("Clicked on the form : " + targetId);
    console.log("Value : " + value);
    if(targetId == "isGaragedAtPolicyAddress"){
      if(value == "Yes"){
        this.isGaragedAtPolicyAddressYes = true;
        this.isGaragedAtPolicyAddressNo = false;
      } else {
        this.isGaragedAtPolicyAddressNo = true;
        this.isGaragedAtPolicyAddressYes = false;
      }
    }
    if(targetId == "isPreviouslyTitled"){
      if(value == "Yes"){
        this.isPreviouslyTitledYes = true;
        this.isPreviouslyTitledNo = false;
      } else {
        this.isPreviouslyTitledNo = true;
        this.isPreviouslyTitledYes = false;
      }
    }
    
  }

  displayFormValues(){
    console.log(this.form.get('vin').value);
    console.log(this.form.get('year').value);
    console.log(this.form.get('make').value);
    console.log(this.form.get('model').value);
    console.log(this.form.get('trim').value);
    console.log(this.form.get('vehicleTypeDescription').value);
    console.log(this.form.get('vehicleOwnership').value);
    console.log(this.form.get('isPreviouslyTitled').value);
    console.log(this.form.get('isGaragedAtPolicyAddress').value);
  }

}
