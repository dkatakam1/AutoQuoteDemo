import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserBasicInfoComponent } from './components/user-basic-info/user-basic-info.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserAdditionalInfoComponent } from './components/user-additional-info/user-additional-info.component';
import { UserContactInfoComponent } from './components/user-contact-info/user-contact-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserBasicInfoComponent,
    StatusBarComponent,
    UserAdditionalInfoComponent,
    UserContactInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
