import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Example } from '../example';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private exampleList: Example[] = [
    { name: "Łukasz", surname: "Bąk" },
    { name: "Tomasz", surname: "Dudek" },
    { name: "Szymon", surname: "Ciężadło" },
    { name: "Aleksandra", surname: "Piechnik" },
    { name: "Jacek", surname: "Adamus" }
  ];
  constructor(private http: HttpClient) {
  }
  public getPresentations() {
    return this.http.get('https://ie2020.kisim.eu.org/api/presentations');
  }
  public getExamples() {
    return this.exampleList;
  }
}
