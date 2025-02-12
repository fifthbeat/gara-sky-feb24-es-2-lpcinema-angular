import {Component, input, Input} from '@angular/core';
import {SplitPricePipe} from '../../pipe/split-price.pipe';
import {CommonModule} from '@angular/common';
import {Hero, Price} from '../../models/stack-entry';

@Component({
  selector: 'app-price',
  imports: [
    CommonModule,
    SplitPricePipe
  ],
  standalone: true,
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {

  price = input.required<Price>();

  constructor() {
  }

  makeAriaLabel(param: (any)[]) {
    return param.join(' ');
  }
}
