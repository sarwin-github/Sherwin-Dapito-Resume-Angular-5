import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
import { fadeInFrom } from '../../animations/fade-in-from';

@Component({
	selector: 'home-about',
	animations: [fadeIn, fadeInFrom],
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	state = 'show';

	constructor(public el: ElementRef) { }

	ngOnInit() {
	}

	@HostListener('window:scroll', ['$event'])
	checkScroll() {
		const div = document.getElementById('section-skills').offsetTop;
		const componentPosition = this.el.nativeElement.offsetTop
		const scrollPosition = window.pageYOffset;

		if (scrollPosition >= componentPosition && scrollPosition <= div) {
			this.state = 'show';
		} else {
			this.state = 'hide';
		}

	}

}
