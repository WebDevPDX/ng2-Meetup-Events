import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { CategoriesService } from "./inputs/categories.service";
import { OutputComponent } from './output/output.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    OutputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CategoriesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
