import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateslice'
})
export class DateslicePipe implements PipeTransform {

  transform(value: any): any {
    
    let date:any = value.slice(0,10)
    
    
    
    return date;
  }

}
