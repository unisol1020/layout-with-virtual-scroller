import { Component, forwardRef, Host, Inject, Injector, Input, SkipSelf } from '@angular/core';
import { LayoutComponent } from '../../../projects/theme/src/layout/layout.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  title = 'founder';
  data: any = [];

  constructor() {
    this.data = Array.from({length: 1000}).map(() => '123');
    /*setTimeout(() => {
      this.alive = false;
    }, 10000);*/
  }

  onScrollIndexChange(index: number) {}

  ngAfterViewInit() {
    console.log(document.querySelector('.test'))
  }
}

@Component({
  selector: 'sb',
  template: '<div>test: {{ test }}</div>'
})
export class SBComponent {
  test = '';

  ngOnInit(data: any) {
    console.log('data', data);
  }
}
