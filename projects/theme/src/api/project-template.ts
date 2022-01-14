import { Directive, Input, NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[fuTemplate]',
  host: {}
})
export class ProjectTemplate {
  @Input() type!: string;
  @Input('fuTemplate') name!: string;

  constructor(
    public template: TemplateRef<any>
  ) { }

  getType(): string {
    return this.name;
  }
}

@NgModule({
  declarations: [ProjectTemplate],
  imports: [CommonModule],
  exports: [ProjectTemplate]
})
export class ProjectTemplateModule {
}
