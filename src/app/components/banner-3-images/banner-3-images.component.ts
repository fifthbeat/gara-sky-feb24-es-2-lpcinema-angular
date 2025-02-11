import { Component, input } from '@angular/core';
import { BannerDiscount, BaseEntry } from '../../models/stack-entry';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner-3-images',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './banner-3-images.component.html',
  styleUrl: './banner-3-images.component.scss'
})
export class Banner3ImagesComponent {

  data = input.required<BaseEntry>();

}
