import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any, imgPath: string): any {
    return value === `${imgPath}null` ? 'assets/img/nophoto.png' : value;
  }

}
