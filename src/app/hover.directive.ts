import { Directive, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core'


@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @HostListener("mouseover") onhover() {
    this.el.nativeElement.style.backgroundColor = 'gray'
  }

  @HostListener("mouseout") onunhover() {
    this.el.nativeElement.style.backgroundColor = 'white'
  }

  

  constructor(private el: ElementRef) { }

}
