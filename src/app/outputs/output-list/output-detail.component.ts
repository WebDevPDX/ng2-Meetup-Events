import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-output-detail',
  templateUrl: './output-detail.component.html',
  styleUrls: ['./output-detail.component.css'],
})

export class OutputDetailComponent {

  @Input() event: any;
  @Input() eventId: number;

  constructor() { }

  onCollapse() {
    console.log('clicked')
  }

}
