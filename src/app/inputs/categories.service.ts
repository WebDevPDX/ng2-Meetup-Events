import { Injectable, Input } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class CategoriesService {

  @Input() input;
  results = [];

  constructor(private http: Http) {}

  getCategories() {
    return this.http.get('https://api.meetup.com/2/categories?offset=0&format=json&photo-host=public&page=100&order=shortname&desc=false&sig_id=13612177&sign=true&key=54347e276174919776f82826417369')
      .map((response: Response) => response.json())
  }
  getEvents() {
    console.log(this.input)
    if(this.input) {
      return this.http.get(`http://api.meetup.com/2/open_events/?zip=${this.input.zip}&time=,1w&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=100&radius=25&category=${this.input.category}&desc=False&status=upcoming&sign=true&key=54347e276174919776f82826417369`)
        .map((response: Response) => response.json())
    }
  }

}
