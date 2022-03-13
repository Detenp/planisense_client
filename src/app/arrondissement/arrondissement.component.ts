import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CountArrondissement } from '../shared/models/countArrondissement';
import { HttpService } from '../shared/service/httpservice';

@Component({
  selector: 'app-arrondissement',
  templateUrl: './arrondissement.component.html',
  styleUrls: ['./arrondissement.component.css']
})
export class ArrondissementComponent implements OnInit {

  constructor(private httpservice: HttpService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getArrondissements();
  }

  byArrondissements: CountArrondissement[] = []

  getArrondissements() {
    this.httpservice.getCountByArrondissement().subscribe((data) => {
      this.byArrondissements = JSON.parse(JSON.stringify(data));
      console.log(this.byArrondissements)
    })
  }
}
