import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { CategoriesService } from "./categories.service";

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
})

export class InputsComponent implements OnInit {

  results: any[];
  selectedValue: number;

  constructor(private categoriesService: CategoriesService) {

  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(
      (data: any) => {
        this.results = data.results
      }
    )
  }

  onSubmit(form: NgForm) {
    this.categoriesService.link = `http://api.meetup.com/2/open_events/?zip=${form.value.zip}&time=,1w&and_text=False&offset=0&format=json&limited_events=False&photo-host=public&page=100&radius=25&category=${form.value.category}&desc=False&status=upcoming&sign=true&key=54347e276174919776f82826417369`
    this.categoriesService.getEvents()
  }

  ngOnInit() {
    this.getCategories();
  }

}
