import {Component} from '@angular/core';
import {PriceComponent} from '../price/price.component';

@Component({
  selector: 'app-hero-cta',
  imports: [
    PriceComponent
  ],
  standalone: true,
  templateUrl: './hero-cta.component.html',
  styleUrl: './hero-cta.component.scss'
})
export class HeroCtaComponent {

}
