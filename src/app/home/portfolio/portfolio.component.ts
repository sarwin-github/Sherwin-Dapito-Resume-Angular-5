import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
import { scrollAnimation } from '../../animations/slide-from-left';
import { fadeInFrom } from '../../animations/fade-in-from';
import { mainAnimations } from '../../animations/all-animation';

@Component({
	selector: 'home-portfolio',
	animations: [fadeIn, scrollAnimation, fadeInFrom, mainAnimations],
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	state = 'hide';
	constructor(public el: ElementRef) { }

	ngOnInit() {
	}

	@HostListener('window:scroll', ['$event']) checkScroll() {

		const div = document.getElementById('section-skills').offsetTop;
		const componentPosition = this.el.nativeElement.offsetTop
		const scrollPosition = window.pageYOffset;

		if (scrollPosition >= 1500) {
			this.state = 'show';
		} else {
			this.state = 'hide';
		}

	}

}
