import { Component, input } from '@angular/core';
import { BannerDiscount } from '../../models/stack-entry';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offer-box',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './offer-box.component.html',
  styleUrl: './offer-box.component.scss'
})
export class OfferBoxComponent {
  data = input.required<BannerDiscount>();

}
