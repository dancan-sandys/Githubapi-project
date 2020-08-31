import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourcount'
})
export class HourcountPipe implements PipeTransform {

  transform(value: any): number {

    let date: any = new Date(value.slice(0, 10))
    let today: any = new Date();
    let difference = today - date
    let differenceInSeconds = difference / 1000
    let differenceinHours = Math.round(differenceInSeconds / 3600)




    return differenceinHours;
  }

}
