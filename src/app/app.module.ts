import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import {EmployeeComponent} from './Test1/employee.component';
import {ListComponent} from './Test2/list.component';
import { MoviesService } from './services/movies.service';


@NgModule({
  declarations: [
    AppComponent,EmployeeComponent, ListComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
