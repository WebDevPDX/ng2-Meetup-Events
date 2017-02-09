import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../inputs/categories.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
})
export class OutputComponent implements OnInit {

  eventList: any[];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.resultsUpdate
  }

}
