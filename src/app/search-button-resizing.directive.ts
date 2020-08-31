import { Directive, HostListener } from '@angular/core';
import {ElementRef} from '@angular/core'

@Directive({
  selector: '[appSearchButtonResizing]'
})
export class SearchButtonResizingDirective {

  constructor( private el: ElementRef) { }

@HostListener('mouseover') onMouseOver(){
  this.el.nativeElement.style.color = 'blue' 
}
  

}
