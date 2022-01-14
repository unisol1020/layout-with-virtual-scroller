import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fu-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent {
  @HostBinding('class.fixed') fixedValue = false;

  @Input()
  set fixed(val: boolean | string) {
    this.fixedValue = !val;
  }

  constructor() { }
}
