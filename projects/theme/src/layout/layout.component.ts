import {
  Component,
  TemplateRef
} from "@angular/core";
import { LayoutSidebarPosition } from './layout-sidebar-position';

@Component({
  selector: 'fu-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.scss']
})
export class LayoutComponent {
  sidebar: Record<LayoutSidebarPosition, TemplateRef<any> | null> = {
    right: null,
    left: null
  };

  constructor() {}
}
