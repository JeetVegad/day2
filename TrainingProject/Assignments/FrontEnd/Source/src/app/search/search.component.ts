import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../Model/Restaurant';
import { RepositoryService } from '../repository.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:RepositoryService) { }
  Restaurants : Array<Restaurant>=[];
  searchText = '';
  ngOnInit(): void {
    this.service.get('Restaurant').subscribe((p: Array<Restaurant>) => {
      this.Restaurants = p;
    });
  }
  }

