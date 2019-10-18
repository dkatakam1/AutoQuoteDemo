import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBasicInfoComponent } from './components/user-basic-info/user-basic-info.component';
import { UserAdditionalInfoComponent } from './components/user-additional-info/user-additional-info.component';
import { UserContactInfoComponent } from './components/user-contact-info/user-contact-info.component';


const routes: Routes = [
  {path:'', component:UserBasicInfoComponent},
  {path:'contactInfo', component:UserContactInfoComponent},
  {path:'additionalInfo', component:UserAdditionalInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
