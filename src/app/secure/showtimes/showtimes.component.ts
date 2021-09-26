import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.scss']
})
export class ShowtimesComponent implements OnInit {
  public searchStr: string = ""
  private searched: Array<string> = [];

  public modelChange(str: string): void {
    this.searchStr = str;
    console.log("Searching for " + this.searchStr);
    // Add code for searching here
    this.searched.push(str);
  }

  ngOnInit() {
  }

}
