import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Sticky } from '../../models/stack-entry';
import { ScrollThresholdDirective } from '../../directives/scroll-threshold.directive';
import { PriceComponent } from '../price/price.component';
import { addTextStyle } from '../../services/utilities';

@Component({
  selector: 'app-sticky-offer',
  imports: [CommonModule, ScrollThresholdDirective, PriceComponent],
  standalone: true,
  templateUrl: './sticky-offer.component.html',
  styleUrl: './sticky-offer.component.scss'
})
export class StickyOfferComponent {

  data = input.required<Sticky>();
  addTextStyle = addTextStyle;
}
