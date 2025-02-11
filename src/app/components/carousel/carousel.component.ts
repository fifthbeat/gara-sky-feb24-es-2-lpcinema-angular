import { Component, input } from '@angular/core';
import { Carousel } from '../../models/stack-entry';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  data = input.required<Carousel>();
}
