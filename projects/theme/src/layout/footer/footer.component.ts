import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fu-layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @HostBinding('class.fixed') fixedValue = false;

  @Input()
  set fixed(val: boolean | string) {
    this.fixedValue = !val;
  }

  constructor() { }
}
