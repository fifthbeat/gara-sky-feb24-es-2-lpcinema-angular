import { Component, input } from '@angular/core';
import { CardOffer } from '../../../models/stack-entry';

@Component({
  selector: 'app-hero-card',
  imports: [],
  standalone: true,
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss'
})
export class HeroCardComponent {

  data = input.required<CardOffer>();

}
