import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FestkickService {

  constructor(private http : HttpClient) { }

  url = 'assets/events.json';

getConcert(){
  return this.http.get(this.url);
}
}
