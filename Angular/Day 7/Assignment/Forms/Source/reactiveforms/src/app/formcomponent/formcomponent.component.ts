import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {
  stdForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.stdForm = this.fb.group({
      Name: this.fb.group({
        firstName: [],
        middleName: [],
        lastName: []
      }),
      DOB: ['', [Validators.required]],
      POB: ['', [Validators.required]],
      FL: ['', [Validators.required]],
      Address: this.fb.group({
        city: [],
        state: [],
        country: [],
        pin: []
      }),
      email: ['', [Validators.required, Validators.email]],
      eduDetail: ['', [Validators.required]],
      profession: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      mName: this.fb.group({
        mfirstName: [],
        mmiddleName: [],
        mlastName: []
      }),
      memail: ['', [Validators.required, Validators.email]],
      meduDetail: ['', [Validators.required]],
      mprofession: ['', [Validators.required]],
      mdesignation: ['', [Validators.required]],
      mphone: ['', [Validators.required, Validators.minLength(10)]],
      emergency: this.fb.array([new FormControl()]),
      relation: ['', [Validators.required]],
      refDetail: ['', [Validators.required]],
      refThrough: ['', [Validators.required]]
    })
  }

  
  get dob() {
    return this.stdForm.get("DOB") as FormControl;
  }

  get pob() {
    return this.stdForm.get("POB") as FormControl;
  }
  get fl() {
    return this.stdForm.get("FL") as FormControl;
  }
  get em() {
    return this.stdForm.get("email") as FormControl;
  }
  get ed() {
    return this.stdForm.get("eduDetail") as FormControl;
  }
  get pro() {
    return this.stdForm.get("profession") as FormControl;
  }
  get des() {
    return this.stdForm.get("designation") as FormControl;
  }
  get ph() {
    return this.stdForm.get("phone") as FormControl;
  }
  get mem() {
    return this.stdForm.get("memail") as FormControl;
  }
  get med() {
    return this.stdForm.get("meduDetail") as FormControl;
  }
  get mpro() {
    return this.stdForm.get("mprofession") as FormControl;
  }
  get mdes() {
    return this.stdForm.get("mdesignation") as FormControl;
  }
  get mph() {
    return this.stdForm.get("mphone") as FormControl;
  }
  get emg() {
    return this.stdForm.get("emergency") as FormArray;
  }
  get rel() {
    return this.stdForm.get("relation") as FormArray;
  }
  

  ngOnInit(): void {
  }
  addemg() {
    this.emg.push(new FormControl());
  }

  stdlist : Array<any> = []
  @Output() notify =new EventEmitter<any>();
  submitdata() {

   this.stdlist.push(this.stdForm.value);
    console.log(this.stdlist);
    this.notify.emit(this.stdlist);
    console.log(this.stdForm.status)
  }
  
}
