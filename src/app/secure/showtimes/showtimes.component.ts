import { Component, OnInit } from '@angular/core';
import { GetMoviesService } from 'src/app/shared/services/get-movies.service';
import { MovieInterface } from 'src/app/shared/models/movie-interface';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.scss']
})

export class ShowtimesComponent implements OnInit {
  public searchStr: string = ""
  private searched: Array<string> = [];
  movies: MovieInterface[];

  constructor(
    private getMoviesService: GetMoviesService
  ) { }

  public modelChange(str: string): void {
    this.searchStr = str;
    console.log("Searching for " + this.searchStr);
    // Add code for searching here
    this.searched.push(str);
  }

  ngOnInit() {
    this.getMovieList()
  }

  getMovieList() {
    this.getMoviesService.getMovies().subscribe((data: any) => {
      console.log(data);
      this.movies = data;
    })
  }

}
