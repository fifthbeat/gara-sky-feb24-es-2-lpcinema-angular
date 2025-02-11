import { Component, input } from '@angular/core';
import { CardList } from '../../models/stack-entry';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-cards',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './hero-cards.component.html',
  styleUrl: './hero-cards.component.scss'
})
export class HeroCardsComponent {

  data = input.required<CardList>();
}
