import {Injectable, Input, EventEmitter} from '@angular/core';
import {Http, Response, URLSearchParams} from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class CategoriesService {

  updatedResults: EventEmitter<any[]> = new EventEmitter();

  link: string;
  eventList: any[];

  constructor(private http: Http) {}

  getCategories() {
    return this.http.get('https://api.meetup.com/2/categories?offset=0&format=json&photo-host=public&page=100&order=shortname&desc=false&sig_id=13612177&sign=true&key=54347e276174919776f82826417369')
      .map((response: Response) => response.json())
  }

  getEvents() {
    return this.http.get(this.link)
      .map((response: Response) => response.json())
  }
}
