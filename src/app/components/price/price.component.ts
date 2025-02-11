import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-price',
  imports: [],
  standalone: true,
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {
  @Input() price!: number;

}
