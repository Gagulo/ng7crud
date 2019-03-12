import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  ngForm: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.ngForm = this.formbuilder.group({
      person_name: [ '', Validators.required ],
      business_name: [ '', Validators.required ],
      business_number: [ '', Validators.required ]
    });
  }

  ngOnInit() {
  }

}
