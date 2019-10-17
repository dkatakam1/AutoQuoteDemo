import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserBasicInfoComponent } from './components/user-basic-info/user-basic-info.component';


const routes: Routes = [{
  path:'', component:UserBasicInfoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
