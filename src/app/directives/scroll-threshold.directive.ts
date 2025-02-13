import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[scrollThreshold]',
  standalone: true,
})
export class ScrollThresholdDirective {
  @Input({ required: false }) threshold: number = 100;
  @Input() thresholdClass: string = 'fade-in';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', []) onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop >= this.threshold) {
      this.renderer.addClass(this.el.nativeElement, this.thresholdClass);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.thresholdClass);
    }
  }
}
