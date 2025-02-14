import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { StackEntry } from '../models/stack-entry';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private titleService: Title, private metaService: Meta) {}

  updateSeo(stackEntry: StackEntry): void {
    this.titleService.setTitle(stackEntry.seo.title);

    this.metaService.updateTag({
      name: 'description',
      content: stackEntry.seo.description
    });

    let canonicalLink: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', stackEntry.seo.canonical);

    const robotsContent = `${stackEntry.seo.no_index ? 'noindex' : 'index'}, ${stackEntry.seo.no_follow ? 'nofollow' : 'follow'}`;
    this.metaService.updateTag({
      name: 'robots',
      content: robotsContent
    });
  }
}
