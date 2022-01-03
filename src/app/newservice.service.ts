import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  employees:any=[];
  constructor() {
    this.employees=[
      {
        empcode:'001',
        name:'Risheik Dhir'
      },
      {
        empcode:'002',
        name:'Aman Gupta'
      },
      {
        empcode:'003',
        name:'Prateik Dhir'
      },
      {
        empcode:'004',
        name:'Diksha Dhir'
      }
    ];
  }
  display(){
    return "Hello Risheik here:)";
  }
}
