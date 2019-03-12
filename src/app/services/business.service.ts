import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  url = 'http://localhost:4200/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_number) {
    const object = {
      person_name: person_name,
      business_name: business_name,
      business_number: business_number
    };
    console.log(object);
    this.http.post(`${this.url}/add`, object)
        .subscribe(res => console.log('done'));
  }
}
