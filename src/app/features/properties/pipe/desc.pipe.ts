import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.substring(0, 17);
  }

}
