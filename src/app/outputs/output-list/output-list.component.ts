import { Component, OnInit } from '@angular/core';

import { CategoriesService } from "../../inputs/categories.service";

@Component({
  selector: 'app-output-list',
  templateUrl: './output-list.component.html',
})
export class OutputListComponent implements OnInit {

  searchResult: any[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.updatedResults.subscribe(
      (update: any) => {
        this.searchResult = update
      }
    );
  }

}
