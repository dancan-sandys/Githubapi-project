import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {

    let today: Date = new Date();
    let todayWithNotime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    let difference: number = todayWithNotime - value
    let differenceInSeconds = difference / 1000
    let DifferenceInHours = differenceInSeconds / 3600

    return DifferenceInHours;
  }

}
