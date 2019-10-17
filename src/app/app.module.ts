import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserBasicInfoComponent } from './components/user-basic-info/user-basic-info.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserBasicInfoComponent,
    StatusBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
