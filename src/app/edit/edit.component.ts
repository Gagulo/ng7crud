import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  business: any = {};
  ngForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private businessService: BusinessService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.ngForm = this.formBuilder.group({
      person_name: ['', Validators.required],
      business_name: ['', Validators.required],
      business_number: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.businessService.editBusiness(
        params['id'].subscribe(res => {
          this.business = res;
        })
      );
    });
  }

  updateBusiness(person_name, business_name, business_number) {
    this.route.params.subscribe(params => {
      this.businessService.updateBusiness(
        person_name,
        business_name,
        business_number,
        params['id']
      );
      this.router.navigate(['business']);
    });
  }
}
