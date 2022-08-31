import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nested = new FormGroup({
    firstName: new FormControl('',[Validators.required,
    Validators.minLength(4)]),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });
  onpress(){
    console.log(this.nested.value);
    console.log(this.nested.status)
  }
  get name(){
    return this.nested.get("firstName") as FormControl;
  }
}
