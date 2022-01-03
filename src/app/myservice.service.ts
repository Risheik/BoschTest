import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  
  constructor() { }
  display(){
    return "Hello Risheik here:)";
  }
}
