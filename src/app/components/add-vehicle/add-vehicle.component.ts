import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private router: Router) { }

  form: FormGroup;
  typeDescOptions = ['', 'Private Passenger', 'Low Speed Vehicle'];
  vehicleOwnershipOptions = ['', 'Owned', 'Financed', 'Leased'];
  yearList = [''];
  makeList = [''];
  modelList = [''];
  trimList = [''];
  isVinIncomplete = true;
  isVehicleInfoIncomplete = true;


  ngOnInit() {
      this.form = this.formBuilder.group({
      vin: ['', [Validators.pattern('[A-Za-z0-9]'), Validators.minLength(17)]],
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
    if(targetId == "year" || targetId == "make" || targetId == "model" || targetId == "trim"  ){
        if(this.validateVehicleInfo()){
          this.isVehicleInfoIncomplete = false;
        } else {
          this.isVehicleInfoIncomplete = true;
        }
    }
  }

  validateVin(event: any){
      if(event.target.value.length == 17){
        this.isVinIncomplete = false;
      } else {
        this.isVinIncomplete = true;
      }
  }

  validateVehicleInfo(){
    if(this.form.controls.year.value != '' && 
      this.form.controls.make.value != '' && 
      this.form.controls.model.value != '' && 
      this.form.controls.trim.value != '' )
      return true;
    else return false;
  }

  displayFormValues(){
    console.log(this.form.get('vin').value);
    console.log(this.form.get('year').value);
    console.log(this.form.get('make').value);
    console.log(this.form.get('model').value);
    console.log(this.form.get('trim').value);
  }

  lookupVehicle(input: string){
    let vin='';
    let year='';
    let make='';
    let model='';
    let trim='';

    if(input == 'vin'){
      console.log("Lookup the data source using : " + this.form.get('vin').value);
      // Service/API call for vin lookup. 
      vin = this.form.get('vin').value;; // hardcoing the values for now
      year = '2009';
      make = 'TOYO';
      model = 'LE';
      trim = 'TITANIUM';

    } else {
      console.log("Lookup the data source using : " + this.form.get('year').value);
      console.log("Lookup the data source using : " + this.form.get('make').value);
      console.log("Lookup the data source using : " + this.form.get('model').value);
      console.log("Lookup the data source using : " + this.form.get('trim').value);
       // Service/API call for vehicle info lookup
       // hardcoing the values for now
       vin = '3GCPCREC0EG352446';
       year = this.form.get('year').value;
       make = this.form.get('make').value;
       model = this.form.get('model').value;
       trim = this.form.get('trim').value;
    }
    this.router.navigate(['/showOverlay'], {queryParams : {'vin':vin, 'year' : year, 'make': make, 'model':model, 'trim':trim}});
  }

 
}

