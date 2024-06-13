import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../shared/persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styles: []
})
export class PersonsComponent implements OnInit {
  constructor(public service: PersonsService){}
  ngOnInit(): void {
    
  }
}
