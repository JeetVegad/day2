import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from 'Firebaseconfig';
import { FooditemService } from '../fooditem.service';
import { FoodItem } from '../Model/FoodItem';
import { FoodMaster } from '../Model/FoodMaster';
import { Restaurant } from '../Model/Restaurant';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-fooditemadmin',
  templateUrl: './fooditemadmin.component.html',
  styleUrls: ['./fooditemadmin.component.css']
})
export class FooditemadminComponent implements OnInit {
  fooditems!:any;
  fooditem!:any;
  restaurants: Array<any> = [];
  foodmaster!:any;
  file:any;
  fileURL:any;
  constructor( private service:RepositoryService,private fb:FormBuilder,private fooditemservice:FooditemService) { }

  fooditemdetails = this.fb.group({
    fooditemid:[0],
    foodid:[1],
    foodname:[''],
    restaurant:[],
    price:[0],
    restaurantid:[5],
    // foodImage:[''],
    // quantity:[0],
    description:[''],
    images:[''],
    food:[],
    customizations:[],
  })

  ngOnInit(): void {
    this.service.get('Restaurant').subscribe((p: Array<Restaurant>) => {
      this.restaurants = p;
    });
    this.service.get('foodmaster').subscribe((p:Array<FoodMaster>)=>{
      this.foodmaster = p;});

    this.fooditemservice.getfoodtems().subscribe((p:Array<FoodItem>)=>{
      this.fooditems = p;
    })

  }
  postFooditem(){
     this.fooditemdetails.controls.foodid.setValue(parseInt(this.fooditemdetails.controls.foodid.value!.toString()));
     this.fooditemdetails.controls.restaurantid.setValue(parseInt(this.fooditemdetails.controls.restaurantid.value!.toString()));
     this.fooditemdetails.controls['images'].setValue(this.fileURL);
    this.fooditem = this.fooditemdetails.value;
    this.fooditemservice.postfooditem(this.fooditem).subscribe((arg:any)=>{
      this.fooditem=arg
      this.ngOnInit();
      console.log(this.fooditem);
  })
  }

  editFooditem(fooditem:any){
    this.fooditemdetails.setValue(fooditem);
  }

  updateFooditem(){
    this.fooditemdetails.controls.foodid.setValue(parseInt(this.fooditemdetails.controls.foodid.value!.toString()));
    this.fooditemdetails.controls.restaurantid.setValue(parseInt(this.fooditemdetails.controls.restaurantid.value!.toString()));
    this.fooditem = this.fooditemdetails.value;
    this.fooditemservice.putfooditem(this.fooditem,this.fooditem.fooditemid).subscribe((arg:any)=>{
      this.fooditem =arg
      this.ngOnInit();
    })
  }
  deleteFooditem(fooditemid:number){
    this.fooditem = this.fooditemdetails.value;
    this.fooditemservice.deletefooditem(fooditemid).subscribe((arg:any)=>{
      this.fooditem =arg
      this.ngOnInit();
    })
  }

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

