import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nivel',
  pure: true
})
export class NivelPipe implements PipeTransform {

  transform(lvl: number): string {
    const low =  100;
    const high = 500;
    const superhigh = 1000;
    if (lvl > superhigh) {
     return 'OP ('+lvl+')';
    }
    else if (lvl < low) {
      return 'low ('+lvl+')';
    }
    else if (lvl > high) {
      return 'superPower ('+lvl+')';
    }
    else {
      return 'normal ('+lvl+')';
    }
  }

}
