import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-india-usa',
  templateUrl: './india-usa.component.html',
  styleUrls: ['./india-usa.component.css']
})
export class IndiaUsaComponent implements OnInit {

  constructor(private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
  }
  viaAtlantic() {
    this.route.navigate(['atlantic'], { relativeTo: this.router });
  }

  viaPacific() {
    this.route.navigate(['pacific'], { relativeTo: this.router });
  }

  AtlanticMenu: Array<any> = [
    { id: 1, item: 'samosa' },
    { id: 2, item: 'Manchurian' },
    { id: 3, item: 'Noodles' },
    { id: 4, item: 'soup' }
  ]

  PacificMenu: Array<any> = [
    { id: 1, item: 'p-samosa' },
    { id: 2, item: 'p-Manchurian' },
    { id: 3, item: 'p-Noodles' },
    { id: 4, item: 'p-soup' }
  ]

  atlanticMenu(id: any) {
    this.route.navigate(['atlantic', id], { relativeTo: this.router })
  }
  pacificMenu(id: any) {
    this.route.navigate(['pacific', id], { relativeTo: this.router })
  }
}
