import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CityService } from '../city.service';
import { city } from '../Model/City';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city:any;
  citydetail = this.fb.group({
    cityid:[0],
    cityname:[''],
    restaurants:[]
  })
  constructor(private service:RepositoryService ,private cityservice:CityService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.service.get('City').subscribe((p:Array<city>)=>{
      this.city = p;
    })
  }

  postCity(){
    this.city = this.citydetail.value;
    this.cityservice.postCity(this.city).subscribe((arg:any)=>{
      this.city=arg
      this.ngOnInit();
  })
  }

  
  editCity(city:any){
    this.citydetail.setValue(city);
  }

  updateCity(){
    this.citydetail.controls.cityid.setValue(parseInt(this.citydetail.controls.cityid.value!.toString()));
    this.city = this.citydetail.value;
    this.cityservice.putCity(this.city,this.city.cityid).subscribe((arg:any)=>{
      this.city =arg
      this.ngOnInit();
    })
  }

  deleteCity(id:any){
    this.city = this.citydetail.value;
    this.cityservice.deleteciry(id).subscribe((arg:any)=>{
      this.city=arg
      this.ngOnInit();
  })
}
}
