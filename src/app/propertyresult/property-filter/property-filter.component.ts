import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-filter',
  templateUrl: './property-filter.component.html',
  styleUrls: ['./property-filter.component.css']
})
export class PropertyFilterComponent implements OnInit {
  location:any=[{
    name:'Mumbai',
    subcity:['Dadar','Bandra','Mahim','Santacruz','Andheri'],
  },{
    name:'Navi Mumbai',
    subcity:['Koparkhairane','Ghansoli','Vashi','Panvel']
  }
  ];
   
        
  
  constructor() { }

  ngOnInit() {
    console.log(this.location[0].name);
  }

}
