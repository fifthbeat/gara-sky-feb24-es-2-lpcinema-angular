import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentStackService } from './services/content-stack.service';
import { HeaderComponent } from "./components/header/header.component";
import { AccordionGroup, BannerDiscount, BaseEntry, CardList, Carousel, HeadingEditorial, Hero, StackEntry } from './models/stack-entry';
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
      this.stack = entries[0][0] as StackEntry;
      console.log(this.stack);
    })
  }

  isHeadingEditorial(dynamic: BaseEntry): dynamic is HeadingEditorial {
    return dynamic._content_type_uid === 'heading_editorial';
  }

  isHeroCta(dynamic: BaseEntry): dynamic is Hero {
    return dynamic._content_type_uid === 'hero';
  }

  // isBanner3Images(dynamic: BaseEntry): dynamic is Banner {
  //   return dynamic._content_type_uid === 'banner_3_images';
  // }

  isCarousel(dynamic: BaseEntry): dynamic is Carousel {
    return dynamic._content_type_uid === 'carousel';
  }

  isOfferBox(dynamic: BaseEntry): dynamic is BannerDiscount {
    return dynamic._content_type_uid === 'banner_discount';
  }

  isHeroCards(dynamic: BaseEntry): dynamic is CardList {
    return dynamic._content_type_uid === 'card_list';
  }

  isAccordion(dynamic: BaseEntry): dynamic is AccordionGroup {
    return dynamic._content_type_uid === 'accordion_group';
  }
}
