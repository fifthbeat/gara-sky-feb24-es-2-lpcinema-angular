import { Component, input } from '@angular/core';
import { BannerDiscount } from '../../models/stack-entry';
import { CommonModule } from '@angular/common';
import { PriceComponent } from "../price/price.component";

@Component({
  selector: 'app-offer-box',
  imports: [CommonModule, PriceComponent],
  standalone: true,
  templateUrl: './offer-box.component.html',
  styleUrl: './offer-box.component.scss'
})
export class OfferBoxComponent {
  data = input.required<BannerDiscount>();

}
