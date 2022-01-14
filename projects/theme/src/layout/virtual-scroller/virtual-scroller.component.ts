import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ProjectTemplate } from '../../api/project-template';

@Component({
  selector: 'fu-layout-virtual-scroller',
  templateUrl: 'virtual-scroller.component.html',
  styleUrls: ['virtual-scroller.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
})
export class VirtualScrollerComponent {
  @Input() value!: any[];
  @Input() itemSize!: number;
  @Input() style!: any;
  @Input() styleClass!: string;
  @Input() scrollHeight!: any;
  @Input() lazy: boolean = false;
  @Input() rows!: number;
  @Input() minBufferPx!: number;
  @Input() maxBufferPx!: number;
  @Input() delay: number = 250;
  @Input() trackBy: Function = (index: number, item: any) => item;

  @Input() get totalRecords(): number {
    return this._totalRecords;
  }
  set totalRecords(val: number) {
    this._totalRecords = val;
    console.log("totalRecords is deprecated, provide a value with the length of virtual items instead.");
  }

  @Input() get first(): number {
    return this._first;
  }
  set first(val:number) {
    this._first = val;
    console.log("first property is deprecated, use scrollToIndex function to scroll a specific item.");
  }

  @Input() get cache(): boolean {
    return this._cache;
  }
  set cache(val: boolean) {
    this._cache = val;
    console.log("cache is deprecated as it is always on.");
  }

  @ViewChild(CdkVirtualScrollViewport, {static: true}) viewport!: CdkVirtualScrollViewport;

  @ContentChildren(ProjectTemplate) templates!: QueryList<any>;

  @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();

  itemTemplate!: TemplateRef<any>;
  loadingItemTemplate!: TemplateRef<any>;
  _totalRecords: number = 0;
  page: number = 0;
  _first: number = 0;
  _cache!: boolean;
  virtualScrollTimeout!: any;
  virtualPage!: number;

  constructor(
    public el: ElementRef
  ) { }
}
