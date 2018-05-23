import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import { slideIn } from '../animations/slide-in';
import { scrollAnimation } from '../animations/slide-from-left';

@Component({
	selector: 'app-home',
	animations: [fadeIn, slideIn, scrollAnimation],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	frameZone: any;
	state = 'hide'

	constructor(public el: ElementRef) { 

	}

	ngOnInit() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

		this.frameZone = Array.from(document.querySelectorAll('a[href^="#"]'));

		this.frameZone.forEach(anchor => {
		    anchor.addEventListener('click', function (e) {
		        e.preventDefault();

		        document.querySelector(this.getAttribute('href')).scrollIntoView({
		            behavior: 'smooth'
		        });
		    });
		});
	}

	@HostListener('window:scroll', ['$event'])
	    checkScroll() {
	      const componentPosition = 900
	      const scrollPosition = window.pageYOffset;

	      if (scrollPosition >= componentPosition) {
	        this.state = 'show';
	        console.log(scrollPosition)
	      } else {
	        this.state = 'hide';
	        console.log(scrollPosition)
	      }

	    }

}
