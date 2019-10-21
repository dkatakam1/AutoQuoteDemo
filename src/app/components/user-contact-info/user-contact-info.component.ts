import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user-contact-info',
  templateUrl: './user-contact-info.component.html',
  styleUrls: ['./user-contact-info.component.css']
})
export class UserContactInfoComponent implements OnInit {

  goBack = false;
  goNext = false;
  isMapHidden = true;
  addressFieldBlank = true;
  googleMapLink: any;
  addresses = [
    {address:'8522 Gablebend Way, Tampa, FL',
     map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3517.347522926056!2d-82.36952368560429!3d28.166344711778898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b7478589705b%3A0xe930ca60e42131df!2s8522%20Gablebend%20Way%2C%20Tampa%2C%20FL%2033647%2C%20USA!5e0!3m2!1sen!2sin!4v1571594610364!5m2!1sen!2sin'
    },
    {address:'8522 Thunderstorm Way, Tampa, FL',
    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156.4676421518975!2d-89.27185688532983!3d37.70869972373249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88770dc3f31374d7%3A0x65b3739f458e1c50!2sThunderstorm%20Rd%2C%20Carbondale%2C%20IL%2C%20USA!5e0!3m2!1sen!2sin!4v1571601588007!5m2!1sen!2sin' 
    },
    {address:'8522 Pacific Street, Tampa, FL',
    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.520238355132!2d-82.6378534856126!3d27.824534826940464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e6b2efe74901%3A0x6733b2a13d26512e!2s8522%20Pacific%20St%20N%2C%20St.%20Petersburg%2C%20FL%2033703%2C%20USA!5e0!3m2!1sen!2sin!4v1571601691695!5m2!1sen!2sin'
    },
    {address:'8522 S Oak Dr, Tampa, FL',
    map:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.033159542114!2d-82.51097388561074!3d27.900955723565136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2dcd1c0ac7e99%3A0x18b3a0b9438b1357!2s8522%20S%20Oak%20Dr%2C%20Tampa%2C%20FL%2033611%2C%20USA!5e0!3m2!1sen!2sin!4v1571601764715!5m2!1sen!2sin'
    }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router, private sanitizer: DomSanitizer) { }


  form: FormGroup;

  ngOnInit() {
    this.form = this.formBuilder.group({
      address: ['', Validators.required],
      unitNo: ['', Validators.required]
    });
  }

  
  displayAddressSuggestions(event: Event){
    const targetId = (event.target as Element).id;
    let addressValue = this.form.get(targetId).value;
    console.log( "CLicked on the form : " + targetId);
    console.log("Value : " + addressValue);

    if(addressValue == '852'){
      this.addressFieldBlank = false;
    } else {
      this.addressFieldBlank = true;
    }
  }

  addressSelected(value: number){
      this.form.patchValue({
        address: this.addresses[value - 1].address
      }) 
      this.addressFieldBlank = true;
      this.isMapHidden = false;
      this.googleMapLink = this.sanitizer.bypassSecurityTrustResourceUrl(this.addresses[value - 1].map);
      console.log(this.googleMapLink);
  }

  hasInValidValue(address: String){
    return false;
  }

  prevPage(){
    this.goBack = true;
    this.router.navigate(['/']);
  }

  nextPage(){
    
    console.log("Data collected in this form : ");
    console.log("Address : " + this.form.controls.address.value);
    console.log("Unit No: " + this.form.controls.unitNo.value);
    this.goNext = true;
    this.router.navigate(['/additionalInfo']);
    
  }

}

