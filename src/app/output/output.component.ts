import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../inputs/categories.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }

  getEvents() {
    this.categoriesService.getEvents().subscribe(
      (data: any) => {
        console.log(data.results)
      }
    )
  }

  ngOnInit() {
    this.getEvents();
  }

}
