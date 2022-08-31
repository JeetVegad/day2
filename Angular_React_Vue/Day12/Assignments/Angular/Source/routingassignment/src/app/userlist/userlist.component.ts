import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userDetails:Array<any> = [{userID:1,userName:"Roy",Gender:"Male",designation:"Developer",PanNumber:"335454",ID:1},

{userID:2,userName:"Rohit",Gender:"Male",designation:"Junior Developer",PanNumber:"abcd",ID:2}];

Id:any="";
filteredlist:Array<any>=[];
  constructor(private activeroute:ActivatedRoute) { }

  ngOnInit(): void {

    this.activeroute.params.subscribe(p=>{
      this.Id = p["id"];
      this.filteredlist = this.userDetails.filter(p=>p.ID == this.Id);
    });
  }

}
