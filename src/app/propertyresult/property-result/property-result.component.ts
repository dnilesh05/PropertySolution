import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-result',
  templateUrl: './property-result.component.html',
  styleUrls: ['./property-result.component.css']
})
export class PropertyResultComponent implements OnInit {
  sortResult:any[]=['Date Published','Price: Lowest','Price: Highest']
  constructor() { }

  ngOnInit() {
  }

}
