import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    EducationComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
