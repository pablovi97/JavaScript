import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appScore]'
})
export class ScoreDirective {
  @Input('appScore') score: number;

  constructor(private _elem: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    //Creamos una directiva dependiendo del score de la pelicula se resaltará de una forma u otra
    const bad: number = 50;
    const good: number = 70;
       
    if (this.score <= bad) {
      this.resalta('5pt', 'lightcoral','black');
    }
    if (this.score >= good) {
      this.resalta('20pt', 'yellow' ,'black');
    }else{
      this.resalta('10pt', 'lightgreen' ,'black');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.resalta(null, null ,null);
  }


  private resalta(tam: string|null, color: string|null, textcolor: string|null): void {
    this._elem.nativeElement.style.fontSize = tam;
    this._elem.nativeElement.style.backgroundColor = color;
    this._elem.nativeElement.style.color = textcolor;
  }

}
