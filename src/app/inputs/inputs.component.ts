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
    const value = form.value;
    // console.log(value)
    this.categoriesService.input = form.value
  }

  ngOnInit() {
    this.getCategories();
  }

}
