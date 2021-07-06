import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'reversePipe'
})
export class ReversePipePipe implements PipeTransform {
  transform(value: any): any {

    let item = "";
    for (let i = value.length - 1; i >= 0; i--) {
      item += value[i]
    }
    return item;

  }
}

