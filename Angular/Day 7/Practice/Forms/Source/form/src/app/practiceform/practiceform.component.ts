import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-practiceform',
  templateUrl: './practiceform.component.html',
  styleUrls: ['./practiceform.component.css']
})
export class PracticeformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  profileform = new FormGroup({
    fname:new FormControl(''),
    lname:new FormControl('')
  });
name = new FormControl('');
update(){
  this.name.setValue('Robo')
}
  onSubmit(){
    console.log(this.profileform.value);
  }
  nested = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    })
  });

  onpress(){
    console.log(this.nested.value);
  }
  updateProfile() {
    this.nested.patchValue({
      firstName: 'Robo',
      address: {
        street: '92 Hello World'
      }
    });
  }
}
