import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import { slideIn } from '../animations/slide-in';
import { scrollAnimation } from '../animations/slide-from-left';
import { fadeInFrom } from '../animations/fade-in-from';

@Component({
	selector: 'app-home',
	animations: [fadeIn, slideIn, scrollAnimation, fadeInFrom],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	frameZone: any;
	state = 'show';
	navTop = 'hide';

	myParticleStyle: object = {};
    myParticleParam: object = {};
    width: number = 100;
    height: number = 100;

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

		this.particleStyle();
	}

	particleStyle(){
		this.myParticleStyle = {
            'position': 'absolute',
            'z-index': 0,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
		 
	    this.myParticleParam = {
            particles: {
                number: {
                    value: 35,
                },
                color: {
                    value: '#ff0000'
                },
                shape: {
					"type": "triangle"
				}
	        }
	    };
	}


	@HostListener('window:scroll', ['$event'])
	checkScroll() {

		const componentPosition = this.el.nativeElement.offsetTop
		const scrollPosition = window.pageYOffset;

		if (scrollPosition <= 250) {
			this.state = 'show';
			this.navTop = 'hide';
		} else {
			this.state = 'hide';
			this.navTop = 'show';
		}

	}

	navigateTop(){
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

}
