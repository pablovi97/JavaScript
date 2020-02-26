import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vida',
  pure: true
})
export class VidaPipe implements PipeTransform {

  // Recibo los puntos de hp
  transform(hp: number,
      low: number=100,
      high: number=300): string {


    if (hp <= low) {
      return 'débil (' + hp + ')';
    }
    if (hp >= high) {
      return 'fuerte (' + hp + ')';
    }
    return 'medio (' + hp + ')'

  }

}
