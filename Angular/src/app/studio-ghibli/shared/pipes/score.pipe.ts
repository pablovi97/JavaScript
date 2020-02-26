import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score',
  pure: true
})
export class ScorePipe implements PipeTransform {
//Creamos un pipe dependiendo de la puntuacion escribira una cosa u otra
  transform(score: number): string {
    const bad: number = 50;
    const good: number = 70;
    
    if (score <= bad) {
      return 'mala (' + score + ')';
    }
    if (score >= good) {
      return 'muy buena (' + score + ')';
    }else{
      return 'buena (' + score + ')';
    }
  

  }

}
