import {Component, Input} from '@angular/core';
import {SplitPricePipe} from '../../pipe/split-price.pipe';
import {CommonModule} from '@angular/common';

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
  @Input() price!: number;
  @Input('text-price') textPrice?: string;

  constructor() {
  }


}
