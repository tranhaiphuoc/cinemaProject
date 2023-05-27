import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beforeAfterNoon'
})
export class BeforeAfterNoonPipe implements PipeTransform {

  transform(value: number): string {
    return (value <= 12) ? 'AM' : 'PM';
  }

}
