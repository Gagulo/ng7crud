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

  getBusinesses() {
    return this.http.get(`${this.url}`);
  }

  editBusiness(id) {
    return this.http.get(`${this.url}/edit/${id}`);
  }

  updateBusiness(person_name, business_name, business_number, id) {

    const obj = {
        person_name: person_name,
        business_name: business_name,
        business_number: business_number
      };
    this
      .http
      .post(`${this.url}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
}
