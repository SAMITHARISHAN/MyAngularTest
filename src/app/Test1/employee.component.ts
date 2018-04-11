import {Component, OnInit} from '@angular/core'
import{ MyMovie } from '../shared/moviedata.model';
import{ MoviesService } from '../services/movies.service';


@Component( {

    selector :'my-employee',
    templateUrl :'employee.component.html',
    styleUrls: ['./employee.component.css']
    })

export class EmployeeComponent implements OnInit {

      movies: MyMovie[];
      totalMovies: number

    constructor(private movieservice:MoviesService ) { }
    ngOnInit() {

       this.movies  = this.movieservice.getMovies();
       this.totalMovies = this.movieservice.getTotalMovies(this.movies);
      }
    
    }

