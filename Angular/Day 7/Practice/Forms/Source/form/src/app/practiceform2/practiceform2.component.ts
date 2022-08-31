import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-practiceform2',
  templateUrl: './practiceform2.component.html',
  styleUrls: ['./practiceform2.component.css']
})
export class Practiceform2Component implements OnInit {
    nested:FormGroup
  constructor(private fb:FormBuilder) { 
    this.nested = this.fb.group({
      firstName: ['',Validators.required],
      lastName: [''],
      address: this.fb.group({
        street: [''],
        city: [''],
        state: [''],
      }),
      Hobbies:this.fb.array([new FormControl(),new FormControl()])
    });
  }

  ngOnInit(): void {
  }


  onpress(){
    console.log(this.nested.value)
  }

  get getHobbies()
   {
     return this.nested.get("Hobbies") as FormArray;
   }

   addhobbies()
  {
    this.getHobbies.push(new FormControl());
  }
 
}
