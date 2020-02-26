import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appResaltaVida]'
})
export class ResaltaVidaDirective {
  @Input('appResaltaVida') hp: number;
  @Input() low: number;
  @Input() high: number;

  constructor(private _elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    const low = this.low || 100;
    const high = this.high || 300;
    if (this.hp < low) {
      this.resalta('10pt', 'lightcoral' ,'black');
    }
    else if (this.hp > high) {
      this.resalta('20pt', 'lightgreen' ,'black');
    }
    else {
      this.resalta('15pt', 'aquamarine' ,'red');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resalta(null, null ,null);
  }


  private resalta(tam: string|null, color: string|null , colortext: string|null): void {
    this._elem.nativeElement.style.fontSize = tam;
    this._elem.nativeElement.style.backgroundColor = color;
    this._elem.nativeElement.style.color = colortext;
  }

}

