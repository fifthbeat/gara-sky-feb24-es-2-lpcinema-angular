import {Component, input} from '@angular/core';
import {PriceComponent} from '../price/price.component';
import {addTextStyle} from '../../services/utilities';
import {Hero} from '../../models/stack-entry';
import {CommonModule} from '@angular/common';


@Component({
  selector: 'app-hero-cta',
  imports: [
    CommonModule,
    PriceComponent
  ],
  standalone: true,
  templateUrl: './hero-cta.component.html',
  styleUrl: './hero-cta.component.scss'
})
export class HeroCtaComponent {

  data = input.required<Hero>()

  addTextStyle = addTextStyle;

}
