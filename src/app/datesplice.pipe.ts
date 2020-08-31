import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datesplice'
})
export class DatesplicePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
