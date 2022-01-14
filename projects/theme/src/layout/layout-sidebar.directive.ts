import { Directive, Input, TemplateRef } from '@angular/core';
import { LayoutSidebarPosition } from './layout-sidebar-position';
import { LayoutComponent } from './layout.component';

@Directive({
  selector: 'ng-template[layoutSidebar]'
})
export class LayoutSidebarDirective {
  @Input() layoutSidebar!: LayoutSidebarPosition;

  constructor(
    private layout: LayoutComponent,
    private template: TemplateRef<any>
  ) { }

  ngDoCheck(): void {
    if (this.layout.sidebar[this.layoutSidebar] !== this.template) {
      this.layout.sidebar[this.layoutSidebar] = this.template;
    }
  }

  ngOnDestroy() {
    if (this.layout.sidebar[this.layoutSidebar] === this.template) {
      this.layout.sidebar[this.layoutSidebar] = null;
    }
  }
}
