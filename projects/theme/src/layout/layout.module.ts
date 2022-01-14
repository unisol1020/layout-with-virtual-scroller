import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { ColumnComponent } from './column/column.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { LayoutSidebarDirective } from './layout-sidebar.directive';
import { VirtualScrollerComponent } from './virtual-scroller/virtual-scroller.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SkipScrollingDirective } from './virtual-scroller/skip-scrolling.directive';

@NgModule({
  imports: [
    CommonModule,
    ScrollingModule
  ],
  declarations: [
    LayoutComponent,
    VirtualScrollerComponent,
    SkipScrollingDirective,
    HeaderComponent,
    ColumnComponent,
    FooterComponent,
    LayoutSidebarDirective
  ],
  exports: [
    LayoutComponent,
    VirtualScrollerComponent,
    SkipScrollingDirective,
    HeaderComponent,
    ColumnComponent,
    FooterComponent,
    LayoutSidebarDirective
  ]
})
export class LayoutModule { }
