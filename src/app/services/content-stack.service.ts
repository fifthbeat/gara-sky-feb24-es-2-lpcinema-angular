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
    Query.where('title', 'Angular');  // Filter for entries with title "angular"
    // Wrap the promise in an Observable
    return from(Query.toJSON().find());
  }
}

// Versione da Esempio

// import { Injectable, Inject, InjectionToken } from '@angular/core';
// import * as Utils from "@contentstack/utils";
// import * as contentstack from 'contentstack';
// import { Region } from 'contentstack';

// export const CONFIG_TOKEN = new InjectionToken<Config>('Config');

// // api host url
// export const customHostUrl = (baseUrl: string): string => {
//   return baseUrl.replace("api", "cdn");
// };
// // generate prod api urls
// export const generateUrlBasedOnRegion = (): string[] => {
//   return Object.keys(contentstack.Region).map((region) => {
//     if (region === "US") {
//       return `cdn.contentstack.io`;
//     }
//     return `${region}-cdn.contentstack.com`;
//   });
// };
// // prod url validation for custom host
// export const isValidCustomHostUrl = (url: string): boolean => {
//   return url ? !generateUrlBasedOnRegion().includes(url) : false;
// };

// interface Config {
//   api_key: string;
//   delivery_token: string;
//   environment: string;
//   branch: string;
//   region: Region | undefined;
//   api_host: string;
//   app_host: string;
//   preview_token: string;
//   preview_host: string;
//   live_preview: string | boolean;
// }

// @Injectable({ providedIn: 'root' })
// export class ContentstackQueryService {

//   Stack: any = {};

//   customHostUrl: string="";

//   stackConfig: { api_key: string; delivery_token: string; environment: string; branch: string; region: Region | undefined; stackDetails: { apiKey: string; environment: string; }; };

//   constructor(@Inject(CONFIG_TOKEN) config: Config) {
//     this.stackConfig = {
//       api_key: config.api_key,
//       delivery_token: config.delivery_token,
//       environment: config.environment,
//       branch: config.branch,
//       region: config.region,
//       stackDetails: {
//         apiKey: config.api_key,
//         environment: config.environment,
//       },
//     };
//     this.customHostUrl = config.api_host? customHostUrl(config.api_host):"";
//     this.Stack = contentstack.Stack(this.stackConfig);
//     if (this.customHostUrl && isValidCustomHostUrl(this.customHostUrl)) {
//       this.Stack.setHost(this.customHostUrl);
//     }
//   }

//   public stack() {
//     return {
//       contentstack: this.Stack
//     };
//   }

//   renderOption = {
//     ["span"]: (node: any, next: any) => {
//       return next(node.children);
//     },
//   }

//   getEntry(contentTypeUid: string, references = [], jsonRtePath = []): Promise<any> {

//     return this.stack().contentstack.ContentType(contentTypeUid)
//       .Query()
//       .includeReference(references)
//       .toJSON()
//       .find()
//       .then((entry: any) => {
//         jsonRtePath.length > 0 &&
//           Utils.jsonToHTML({
//             entry,
//             paths: jsonRtePath,
//             renderOption: this.renderOption,
//           });
//         return entry;
//       }, (err: Error) => {
//         console.log(err, 'err');
//       });
//   }

//   getEntryWithQuery(contentTypeUid: string, { key, value }: { key: string, value: string }, references = [], jsonRtePath = []): Promise<any> {
//     return this.stack().contentstack.ContentType(contentTypeUid)
//       .Query()
//       .where(key, value)
//       .includeReference(references)
//       .toJSON()
//       .find()
//       .then((entry: any) => {
//         jsonRtePath.length > 0 &&
//           Utils.jsonToHTML({
//             entry,
//             paths: jsonRtePath,
//             renderOption: this.renderOption,
//           });
//         return entry;
//       }, (err: Error) => {
//         console.log(err, 'err');
//       });
//   }
// }
