import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
import { scrollAnimation } from '../../animations/slide-from-left';
import { fadeInFrom } from '../../animations/fade-in-from';

@Component({
	selector: 'home-contact-us',
	animations: [fadeIn, scrollAnimation, fadeInFrom],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	state = 'hide';
	constructor(public el: ElementRef) { }

	ngOnInit() {
	}

	@HostListener('window:scroll', ['$event']) checkScroll() {

		const div = document.getElementById('section-contact').offsetTop;
		const componentPosition = this.el.nativeElement.offsetTop
		const scrollPosition = window.pageYOffset;

		if (scrollPosition >= div - 500) {
			this.state = 'show';
		} else {
			this.state = 'hide';
		}

	}

}
