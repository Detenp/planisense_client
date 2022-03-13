import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CountArrondissement } from '../models/countArrondissement';
import { CountGenre } from '../models/countGenre';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    apiUrl = 'http://localhost:8080/'

    constructor(private http: HttpClient) {}

    getCountByArrondissement(): Observable<CountArrondissement[]> {
        return this.http.get<CountArrondissement[]>(this.apiUrl + 'byarrondissement');
    }

    getCountByGenre(): Observable<CountGenre[]> {
        return this.http.get<CountGenre[]>(this.apiUrl + 'bygenre');
    }
}