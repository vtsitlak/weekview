import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-week-selector',
  templateUrl: './week-selector.component.html',
  styleUrls: ['./week-selector.component.scss']
})
export class WeekSelectorComponent {

  @Input() fromDate: string;
  @Input() toDate: string;
  @Output() weekNavigate: EventEmitter<number> = new EventEmitter<number>();

}
