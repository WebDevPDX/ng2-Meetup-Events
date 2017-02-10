import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { CategoriesService } from "./inputs/categories.service";
import { OutputsComponent } from './outputs/outputs.component';
import { OutputListComponent } from './outputs/output-list/output-list.component';
import { OutputDetailComponent } from './outputs/output-list/output-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    OutputsComponent,
    OutputListComponent,
    OutputDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CategoriesService, ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
