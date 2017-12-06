import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';


// Material Design components
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { MatButtonModule, MatCheckboxModule } from '@angular/material';
//import { MatInputModule, MatButtonModule } from '@angular/material';
import 'hammerjs';

//Service
import { DataService } from './services/data.service';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { VolunteersComponent } from './components/volunteers/volunteers.component';




// Create our Router configuration objects
export const ROUTES: Routes = [
  {
    path : '', /* Home Page*/
    component : HomeComponent,
    pathMatch : 'full'
  },
  {
    path : 'about',  
    component : AboutComponent,
    pathMatch : 'full'
  },
  {
    path : 'volunteers',
    component : VolunteersComponent,
    pathMatch : 'full'
  },
  {
    path : 'contact',  
    component : ContactComponent,
    pathMatch : 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VolunteersComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpModule, 
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
