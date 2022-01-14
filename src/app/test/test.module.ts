import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';
import { CommonModule } from '@angular/common';
import { SBComponent, TestComponent } from './test.component';
import { LayoutModule } from '../../../projects/theme/src/layout/layout.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    TestComponent,
    SBComponent,
  ],
  imports: [
    CommonModule,
    LayoutModule,
    TestRoutingModule,
    ScrollingModule
  ]
})
export class TestModule { }
