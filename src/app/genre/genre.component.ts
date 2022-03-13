import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountGenre } from '../shared/models/countGenre';
import { HttpService } from '../shared/service/httpservice';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  constructor(private httpservice: HttpService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getGenres();
  }

  byGenre: CountGenre[] = []
  getGenres() {
    this.httpservice.getCountByGenre().subscribe((data) => {
      this.byGenre = JSON.parse(JSON.stringify(data));
      console.log(this.byGenre)
    })
  }
}
