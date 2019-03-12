import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

import { BusinessService } from '../services/business.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  ngForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private businessService: BusinessService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.ngForm = this.formbuilder.group({
      person_name: [ '', Validators.required ],
      business_name: [ '', Validators.required ],
      business_number: [ '', Validators.required ]
    });
  }

  addBusiness(person_name, business_name, business_number) {
    this.businessService.addBusiness(person_name, business_name, business_number);
  }

}
