import {Injectable, Input, EventEmitter} from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/Rx';
import { EventObj } from './event'

@Injectable()

export class CategoriesService {

  resultsUpdate = new EventEmitter();

  @Input() link: string;
  eventResult: any;

  constructor(private http: Http) {}

  getCategories() {
    return this.http.get('https://api.meetup.com/2/categories?offset=0&format=json&photo-host=public&page=100&order=shortname&desc=false&sig_id=13612177&sign=true&key=54347e276174919776f82826417369')
      .map((response: Response) => response.json())
  }

  // getEvents() {
  //   return this.http.get(this.link)
  //     .map((response: Response) => response.json())
  //     .subscribe((data: any) => {
  //         this.eventResult = data.result;
  //         console.log(this.eventResult);
  //         this.resultsUpdate.emit();
  //       }
  //     )
  // }

  getEvents() {
    return this.http.get(this.link)
      .map((response: Response) => response.json())
      .subscribe((data: any) => {
          this.eventResult = data.result;
          this.resultsUpdate.emit();
        }
      );
  }

}
