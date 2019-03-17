import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  id: string = '';
  customer_id: string = '';
  customer_name: string = '';
  customer_email: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.getCustomer(this.route.snapshot.params['id']);
    this.customerForm = this.formBuilder.group({
      'customer_id': [null, Validators.required],
      'customer_name': [null, Validators.required],
      'customer_email': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    let id = this.route.snapshot.params['id'];
    console.log(form)
    this.api.updateCustomer(id, form)
      .subscribe(res => {
        this.router.navigate(['/customer-details', id]);
      }, (err) => {
        console.log(err);
      });
  }

  getCustomer(id) {
    this.api.getCustomer(id).subscribe(data => {
      id = data._id;
      this.customerForm.setValue({
        customer_id: data.customer_id,
        customer_name: data.customer_name,
        customer_email: data.customer_email,
      });
    });
  }
}
