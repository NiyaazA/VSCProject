import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../../shared/persons.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-persons-form',
  templateUrl: './persons-form.component.html',
  styles: []
})
export class PersonsFormComponent implements OnInit{
  constructor(public service:PersonsService){}
  ngOnInit(): void {
    
  }
  onSubmit(form:NgForm){
      this.service.PostPersons()
      .subscribe({
        next: res => {
          console.log(res);
        },
        error:err => {console.log(err)}
      })
  }

}
