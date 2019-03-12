import { Component, OnInit } from '@angular/core';

import { Business } from '../model/business';
import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  businesses: Business[];

  constructor(private businessService: BusinessService) { }

  ngOnInit() {
    this.businessService.getBusinesses().subscribe((data: Business[]) => {
      this.businesses = data;
    });
  }

  deleteBusiness(id) {
    this.businessService.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    })
  }

}
