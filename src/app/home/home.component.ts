import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import { slideIn } from '../animations/slide-in';
import { scrollAnimation } from '../animations/slide-from-left';
import { fadeInFrom } from '../animations/fade-in-from';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { MoveDirection, ClickMode, HoverMode, OutMode, tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";

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
	// particlesUrl = "http://foo.bar/particles.json";
	id = "tsparticles";

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

	/* or the classic JavaScript object */
	particlesOptions = {
		// background: {
		//   color: {
		// 	value: "#0d47a1"
		//   }
		// },
		fpsLimit: 35,
		interactivity: {
		  events: {
			onClick: {
			  enable: true,
			  mode: ClickMode.push
			},
			onHover: {
			  enable: true,
			  mode: HoverMode.repulse
			},
			resize: true
		  },
		  modes: {
			push: {
			  quantity: 4
			},
			repulse: {
			  distance: 200,
			  duration: 0.4
			},
			attract: {
				distance: 200,
			  duration: 0.4
			}
		  }
		},
		particles: {
		  color: {
			value: "#ff0000"
		  },
		  links: {
			color: "#ffffff",
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1
		  },
		  collisions: {
			enable: true
		  },
		  move: {
			direction: MoveDirection.none,
			enable: true,
			outModes: {
			  default: OutMode.bounce
			},
			random: false,
			speed: 2,
			straight: false
		  },
		  number: {
			density: {
			  enable: true,
			  area: 1600
			},
			value: 80
		  },
		  opacity: {
			value: 0.5
		  },
		  shape: {
			type: "circle"
		  },
		  size: {
			value: {min: 1, max: 5 },
		  }
		},
		detectRetina: true
	  };
	
	  particlesLoaded(container: Container): void {
		console.log(container);
	  }
	
	  async particlesInit(engine:any): Promise<void> {
		console.log(engine);
	
		// Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
		// tsParticles.load("tsparticles",this.particlesOptions);
	  }
}
