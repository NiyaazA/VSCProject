import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component' ;
import { PersonsComponent } from './persons/persons.component';
import { PersonsFormComponent } from './persons/persons-form/persons-form.component';

@NgModule({
imports: [
BrowserModule,
FormsModule,
PersonsComponent,
PersonsFormComponent,
HttpClientModule
],
declarations: [
AppComponent,
PersonsComponent,
PersonsFormComponent,
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }