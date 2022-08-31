import { Component, Input, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Restaurant } from '../Model/Restaurant';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  providers:[CrudService]
})
export class BodyComponent implements OnInit {

  Restaurants : Array<Restaurant>=[];
  resta!: Restaurant;
  constructor(private service:RepositoryService) { }

   @Input() searchText = '';
  ngOnInit(): void {
    this.service.get('Restaurant').subscribe((p: Array<Restaurant>) => {
      this.Restaurants = p;
    });
  }

}
