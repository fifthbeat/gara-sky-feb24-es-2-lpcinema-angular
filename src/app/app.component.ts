import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { AccordionGroup, BannerDiscount, BaseEntry, CardList, Carousel, HeadingEditorial, Hero, Separator, StackEntry, Sticky } from './models/stack-entry';
import { FooterComponent } from './components/footer/footer.component';
import { HeroCtaComponent } from "./components/hero-cta/hero-cta.component";
import { Banner3ImagesComponent } from "./components/banner-3-images/banner-3-images.component";
import { TitleComponent } from "./components/title/title.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { OfferBoxComponent } from "./components/offer-box/offer-box.component";
import { HeroCardsComponent } from "./components/hero-cards/hero-cards.component";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { StickyOfferComponent } from "./components/sticky-offer/sticky-offer.component";
import { Store } from '@ngrx/store';
import { AppState } from './app.config';
import { SeoService } from './services/seo.service';
import { loadLandingPages } from './services/landing-page/landing-page.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HeroCtaComponent, Banner3ImagesComponent, TitleComponent, CarouselComponent, OfferBoxComponent, HeroCardsComponent, AccordionComponent, StickyOfferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  stack: StackEntry | undefined | null;
  store = inject(Store<AppState>);
  seoService = inject(SeoService);

  constructor() {
    this.store.select<StackEntry | null>((state : AppState) => state.landingPages.stackEntry).subscribe(stackEntry => {
      this.stack = stackEntry;
      if (stackEntry) {
        this.seoService.updateSeo(stackEntry);
      }
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadLandingPages());
  }

  get sticky() {
    return this.stack?.sticky && this.stack.sticky[0];
  }

  isSticky(entry: BaseEntry): entry is Sticky {
    return entry._content_type_uid === 'sticky';
  }

  isHeadingEditorial(entry: BaseEntry): entry is HeadingEditorial {
    return entry._content_type_uid === 'heading_editorial';
  }

  isHeroCta(entry: BaseEntry): entry is Hero {
    return entry._content_type_uid === 'hero';
  }

  isBanner3Images(entry: BaseEntry): entry is Separator {
    return entry._content_type_uid === 'separator';
  }

  isCarousel(entry: BaseEntry): entry is Carousel {
    return entry._content_type_uid === 'carousel';
  }

  isOfferBox(entry: BaseEntry): entry is BannerDiscount {
    return entry._content_type_uid === 'banner_discount';
  }

  isHeroCards(entry: BaseEntry): entry is CardList {
    return entry._content_type_uid === 'card_list';
  }

  isAccordion(entry: BaseEntry): entry is AccordionGroup {
    return entry._content_type_uid === 'accordion_group';
  }
}
