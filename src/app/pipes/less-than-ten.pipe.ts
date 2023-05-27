import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lessThanTen'
})
export class LessThanTenPipe implements PipeTransform {

  transform(value: number): string {
    return (value < 10) ? `0${value}` : `${value}`;
  }

}
