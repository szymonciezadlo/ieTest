import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) {
  }
  public getPresentations(){
    return this.http.get('https://ie2020.kisim.eu.org/api/presentations');
  }
}
