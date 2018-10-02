import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import { mainAnimations } from '../animations/all-animation';

@Component({
	selector: 'app-portfolio',
	animations: [fadeIn, mainAnimations],
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

}
