import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let fbq:Function;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'app';
	constructor(private router: Router) {
		// facebook pixel tracker
		router.events.subscribe((routes: NavigationEnd) => {
			if(routes instanceof NavigationEnd){
				fbq('track', 'PageView');
			}
		});
	}
}
