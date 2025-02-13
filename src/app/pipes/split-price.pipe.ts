import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'splitPrice'
})
export class SplitPricePipe implements PipeTransform {

  transform(price: number, part: "integerPart" | "decimalPart"): string {
    return this.splitNumber(price)[part];
  }

  splitNumber(num: number) {
    const numStr = num.toFixed(2).toString();
    const [integerPart, decimalPart] = numStr.split('.');
    return {integerPart, decimalPart};
  }

}
