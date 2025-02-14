import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit, signal } from '@angular/core';
import { Carousel } from '../../models/stack-entry';
import { CommonModule } from '@angular/common';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent implements AfterViewInit {

  data = input.required<Carousel>();
  swiperEl: SwiperContainer | null = null;

  isBeginning = signal(true);
  isEnd = signal(false);

  ngAfterViewInit() {
    this.swiperEl = document.querySelector('swiper-container');

    const swiperParams = {
      freeMode: true,
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        746: {
          slidesPerView: 2,
        },
        1240: {
          slidesPerView: 3,
        },
        1720: {
          slidesPerView: 4,
        },
        2200: {
          slidesPerView: 5,
        },
        2700: {
          slidesPerView: 6,
        },
      }
    };
    if (this.swiperEl) {
      Object.assign(this.swiperEl, swiperParams);
      this.swiperEl.initialize();
      // if (this.swiperEl?.swiper.isBeginning) {
      //   this.isBeginning.set(true);
      // }
      // if (this.swiperEl?.swiper.isEnd) {
      //   this.isEnd.set(true);
      // }
    }
  }

  nextSlide() {
    if (this.swiperEl) {
      this.swiperEl.swiper.slideNext();
      if (this.swiperEl.swiper.isEnd) {
        this.isEnd.set(true);
        this.isBeginning.set(false);
      }
    }
  }

  prevSlide() {
    if (this.swiperEl) {
      this.swiperEl.swiper.slidePrev();
      if (this.swiperEl.swiper.isBeginning) {
        this.isBeginning.set(true);
        this.isEnd.set(false);
      }
    }
  }

  setControlClasses(control: 'prev' | 'next') {
    if (this.swiperEl) {
      if (control === 'prev') {
        if (this.isBeginning()) {
          return { 'disabled': true, 'bg-secondary-subtle': true };
        } else {
          return { 'disabled': false, 'bg-secondary-subtle': false };
        }
      }
      if (control === 'next') {
        if (this.isEnd()) {
          return { 'disabled': true, 'bg-secondary-subtle': true };
        } else {
          return { 'disabled': false, 'bg-secondary-subtle': false };
        }
      }
    }
    return { 'disabled': false, 'bg-secondary-subtle': false };
  }
}
