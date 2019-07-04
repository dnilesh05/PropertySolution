import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule ,Routes }from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from "@angular/forms";
import { PropertyresultModule } from './propertyresult/propertyresult.module';
import { DashboardComponent } from './propertyresult/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    PropertyresultModule,
    RouterModule.forRoot([
      { path:'', redirectTo: 'home', pathMatch: 'full' },
      { path:'home', component:DashboardComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
