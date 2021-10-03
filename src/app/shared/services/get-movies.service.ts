import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MovieInterface } from '../models/movie-interface';


@Injectable({
  providedIn: 'root'
})
export class GetMoviesService {
  moviesUrl = "../../../assets/data/movie_metadata.json";

  constructor(
    private httpClient: HttpClient,
  ) { }

  getMovies(): Observable<MovieInterface> {
    return this.httpClient.get<MovieInterface>(this.moviesUrl);
  }
}