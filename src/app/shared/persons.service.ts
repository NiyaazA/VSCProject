import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persons } from './persons.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  url:string = environment.apiBaseUrl+'/Persons'
  formData : Persons = new Persons()
  constructor(private http:HttpClient) { }

  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next: res => {
        console.log(res);
      },
      error: err=> {console.log(err)}      
    })
  }

  PostPersons(){
   return this.http.post(this.url,this.formData)
  }
}
