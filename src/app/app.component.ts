import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentStackService } from './services/content-stack.service';
import { HeaderComponent } from "./components/header/header.component";
import { StackEntry } from './models/stack-entry';
import { FooterComponent } from './components/footer/footer.component';
import { HeroCtaComponent } from "./components/hero-cta/hero-cta.component";
import { Banner3ImagesComponent } from "./components/banner-3-images/banner-3-images.component";
import { TitleComponent } from "./components/title/title.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { OfferBoxComponent } from "./components/offer-box/offer-box.component";
import { HeroCardsComponent } from "./components/hero-cards/hero-cards.component";
import { AccordionComponent } from "./components/accordion/accordion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HeroCtaComponent, Banner3ImagesComponent, TitleComponent, CarouselComponent, OfferBoxComponent, HeroCardsComponent, AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'es-2-lpcinema-angular';
  stack: StackEntry | undefined;

  constructor(readonly contentStackService: ContentStackService) {
    this.contentStackService.fetchLandingPages().subscribe(entries => {
      this.stack = entries[0] as StackEntry;
    })
  }
}
