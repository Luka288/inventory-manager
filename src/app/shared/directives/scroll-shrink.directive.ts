import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollShrink]',
})
export class ScrollShrinkDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 100) {
      this.renderer.addClass(this.el.nativeElement, 'shrink');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'shrink');
    }
  }
}
