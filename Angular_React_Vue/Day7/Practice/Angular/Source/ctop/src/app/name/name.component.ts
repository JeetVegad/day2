import { Component, OnInit ,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
   message=""
  @Output() getValue= new EventEmitter<any>();
 nam:string='';
  constructor() { }

  ngOnInit(): void {
  }
  submitinfo()
  {
    this.nam =this.message;
    this.getValue.emit(this.nam);
    //console.log(this.message)
  }
}
