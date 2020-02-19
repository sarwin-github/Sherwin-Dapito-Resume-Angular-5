declare let fbq:Function;
import {Component, Inject, PLATFORM_ID} from '@angular/core';

import {Router, NavigationEnd, NavigationStart, ActivatedRoute} from '@angular/router';
import {SeoService} from './shared/services/seo/seo.service';
import {isPlatformBrowser} from '@angular/common';

@Component({
	selector: 'app-root',
	providers: [SeoService],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private router: Router,
              private seoService: SeoService,
              @Inject(PLATFORM_ID) private platform: Object,
              @Inject('WINDOW') private windowProvided: any,
              private activatedRoute: ActivatedRoute) {

		// facebook pixel tracker
		router.events.subscribe((routes: NavigationEnd) => {
			if (isPlatformBrowser(this.platform)) {
			  if (routes instanceof NavigationEnd) {
			    if (fbq) {
			      fbq('track', 'PageView');
			    }
			  }
			  if (routes instanceof NavigationStart) {
			    seoService.reset();
			  }
			}
		});
	}
}
