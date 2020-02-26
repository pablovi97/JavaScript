import { Directive, ElementRef, Input, HostListener  } from '@angular/core';

@Directive({
  selector: '[appResaltarNivel]'
})
export class ResaltarNivelDirective {
  @Input('appResaltarNivel') lvl: number;
  constructor(private _elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    const low =  100;
    const high = 500;
    const superhigh = 1000;
    if (this.lvl > superhigh) {
      this.resalta('30pt', 'red');
    }
    else if (this.lvl < low) {
      this.resalta('10pt', 'lightcoral');
    }
    else if (this.lvl > high) {
      this.resalta('20pt', 'lightgreen');
    }
    else {
      this.resalta('15pt', 'aquamarine');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resalta(null, null);
  }


  private resalta(tam: string|null, color: string|null): void {
    this._elem.nativeElement.style.fontSize = tam;
    this._elem.nativeElement.style.backgroundColor = color;
  }
}
