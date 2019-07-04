import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyResultComponent } from './property-result/property-result.component';
import { PropertyFilterComponent } from './property-filter/property-filter.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DashboardComponent, PropertyResultComponent, PropertyFilterComponent],
  exports:[DashboardComponent,PropertyResultComponent,PropertyFilterComponent]
})
export class PropertyresultModule { }
