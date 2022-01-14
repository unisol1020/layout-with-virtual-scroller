import { Directive, DoCheck, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: 'fu-layout-virtual-scroller[skipScrolling]'
})
export class SkipScrollingDirective implements DoCheck, OnDestroy {
  private scrollableElement!: HTMLElement;
  constructor(
    private el: ElementRef,
  ) {
    document.onscroll = () => {
      this.el.nativeElement.querySelector('cdk-virtual-scroll-viewport').scrollTop = document.body?.parentElement?.scrollTop;
    }
  }

  ngDoCheck(): void {
    const el = this.el.nativeElement.querySelector('.cdk-virtual-scroll-spacer');

    if (el?.offsetHeight > 1 && this.scrollableElement === undefined) {
      this.scrollableElement = document.createElement('div');
      this.scrollableElement.style.position = 'absolute';
      this.scrollableElement.style.height = el?.offsetHeight + 'px';
      this.scrollableElement.style.width = '1px';
      document.body?.appendChild(this.scrollableElement);
      (document.querySelector('.fu-center-wrapper') as HTMLElement).style.overflow = 'inherit';
      (document.querySelector('fu-layout') as HTMLElement).style.position = 'fixed';
      (document.querySelector('fu-layout') as HTMLElement).style.width = '100%';
      this.el.nativeElement.querySelector('cdk-virtual-scroll-viewport').style.overflow = 'hidden';
    }
  }

  ngOnDestroy(): void {
    document.body.removeChild(this.scrollableElement);
    (document.querySelector('.fu-center-wrapper') as HTMLElement).style.overflow = '';
    (document.querySelector('fu-layout') as HTMLElement).style.position = '';
    (document.querySelector('fu-layout') as HTMLElement).style.width = '';
  }
}
