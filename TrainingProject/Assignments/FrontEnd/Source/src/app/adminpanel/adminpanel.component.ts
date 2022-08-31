import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CityService } from '../city.service';
import { CrudService } from '../crud.service';
import { FooditemService } from '../fooditem.service';
import { city } from '../Model/City';
import { FoodItem } from '../Model/FoodItem';
import { FoodMaster } from '../Model/FoodMaster';
import { Restaurant } from '../Model/Restaurant';
import { RepositoryService } from '../repository.service';
import { storage } from "../../../Firebaseconfig";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
   restaurant!: any;
   city!:any;
  restaurants: Array<any> = [];
  resta!:Restaurant;
  fooditem!:any;
  foodmaster!:any;
  file:any;
  fileURL:any;
  constructor(private crudservice:CrudService, private service:RepositoryService,private fb:FormBuilder,private cityservice:CityService,private fooditemservice:FooditemService ) {
    
   }
   restaurantdetail = this.fb.group({
    restaurantid:[0],
    restaurantname:[''],
    restauranttype:[''],
    price:[0],
    addresss:[''],
    rating:[0],
    times:[0],
    coupen:[''],
    cityid:[1],
    images:[''],
    city:[],
    carts:[],
    orders:[],
    restaurantfooditems:[]
  });

  // fooditemdetails = this.fb.group({
  //   fooditemid:[0],
  //   foodid:[0],
  //   foodname:[''],
  //   restaurant:[],
  //   price:[0],
  //   restaurantid:[0],
  //   foodImage:[''],
  //   quantity:[0],
  //   description:['']
  // })

  citydetail = this.fb.group({
    cityname:['']
  })
  ngOnInit(): void {
    this.service.get('Restaurant').subscribe((p: Array<Restaurant>) => {
      this.restaurants = p;
    });
    this.service.get('City').subscribe((p:Array<city>)=>{
      this.city = p;
    })

    // this.service.get('fooditem').subscribe((p:Array<FoodItem>)=>{
    //   this.fooditem = p;
    // })

    this.fooditemservice.getfoodtems().subscribe((p:Array<FoodItem>)=>{
      this.fooditem = p;
    })

    this.service.get('foodmaster').subscribe((p:Array<FoodMaster>)=>{
      this.foodmaster = p;
    })

  }
  // post(){
  //  this.restaurant= this.restaurantdetail.value;
  //   this.service.post('Restaurant',this.restaurant).subscribe((arg:Restaurant)=>{
  //     this.restaurant =arg
  //     this.ngOnInit();
  //   })
  // }
  post(){
    this.restaurantdetail.controls.cityid.setValue(parseInt(this.restaurantdetail.controls.cityid.value!.toString()));
    this.restaurantdetail.controls['images'].setValue(this.fileURL);
    this.restaurant = this.restaurantdetail.value;
    this.crudservice.postrestaureant(this.restaurant).subscribe((arg:any)=>{
      this.restaurant=arg
      this.ngOnInit();
      console.log(this.restaurant);
  })
}



postCity(){
  this.city = this.citydetail.value;
  this.cityservice.postCity(this.city).subscribe((arg:any)=>{
    this.city=arg
    this.ngOnInit();
});
}

edit(restaurant:any){
  this.restaurantdetail.setValue(restaurant);

  }
  update(){
    this.restaurantdetail.controls.cityid.setValue(parseInt(this.restaurantdetail.controls.cityid.value!.toString()));
    this.restaurant = this.restaurantdetail.value;
    this.crudservice.putrestaurant(this.restaurant,this.restaurant.restaurantid).subscribe((arg:any)=>{
      this.restaurant =arg
      this.ngOnInit();
    });
  }
  delete(restaurantid:number){
  this.restaurant = this.restaurantdetail.value;
    this.crudservice.deleterestaurant(restaurantid).subscribe((arg:any)=>{
      this.restaurant=arg
      this.ngOnInit();

    });
  }


  // postFooditem(){
  //   // this.fooditemdetails.controls.foodid.setValue(parseInt(this.fooditemdetails.controls.foodid.value!.toString()));
  //   // this.fooditemdetails.controls.restaurantid.setValue(parseInt(this.fooditemdetails.controls.restaurantid.value!.toString()));
  
  //   this.fooditemservice.postfooditem(this.fooditem).subscribe((arg:any)=>{
  //     this.fooditem=arg
  //     this.ngOnInit();
  //     console.log(this.fooditem);
  // })
  // }
  uploadImage(val: any) {
    // Create the file metadata
    this.file = val.target.files[0];
    /** @type {any} */
    const metadata = {
      contentType: this.file.type
    };
    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, 'images/' + this.file.name);
    const uploadTask = uploadBytesResumable(storageRef, this.file, metadata);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            console.log('Hyy');

            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            console.log('Hyyssss');
            // User canceled the upload
            break;
          // ...
          case 'storage/unknown':
            console.log('Hyysssssss');
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          // alert("Image uploaded successfully...");
          this.fileURL = downloadURL;
        });
      }
    );
  }
}
