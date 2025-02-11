import { Inject, Injectable, InjectionToken } from '@angular/core';
import Contentstack from 'contentstack';
import { Stack, Config } from 'contentstack';
import { from, Observable } from 'rxjs';
import { CONTENTSTACK_CONFIG } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class ContentStackService {
  private stack: Stack;

  constructor(@Inject(CONTENTSTACK_CONFIG) private config: Config) {
    this.stack = Contentstack.Stack(config);
  }

  fetchLandingPages(): Observable<any> {
    const Query = this.stack.ContentType('landing_page').Query();
    Query.where('title', 'Angular');  // Filter for entries with title "Angular | Prova"
    Query.includeReference(["dynamic", "dynamic.info.modal", "sticky", "sticky.info.modal"]); // Include references
    return from(Query.toJSON().find());
  }
}
