import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  location:any[]=['Navi Mumbai','Mumbai'];
  propertyCategory:any[]=['All','Sale:Houses & Apartments','Rent: Houses & Apartments','Rent: Shops & Offices','Sale: Shops & Offices','PG & Guest Houses','Lands & Plots '];
  constructor() { }

  ngOnInit() {
  }

}
