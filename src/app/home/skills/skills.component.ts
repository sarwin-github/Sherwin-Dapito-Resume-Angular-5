import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
import { scrollAnimation } from '../../animations/slide-from-left';
import { fadeInFrom } from '../../animations/fade-in-from';

@Component({
	selector: 'home-skills',
	animations: [fadeIn, scrollAnimation, fadeInFrom],
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	data        : any;
	options     : any;
	optionSmall : any;
	state = 'hide';

	constructor(public el: ElementRef) { 
		this.data = {
			datasets: [{
				data: [
				8.7,
				8.2,
				7.3,
				8.5,
				8.5
				],
				backgroundColor: [
				"#FF6384",
				"#54F3AD",
				"#4BC0C0",
				"#FFCE56",
				"#36A2EB"
				],
				label: 'Web Technology and Framework'
			}],
			labels: [
			"JavaScript",
			"TypeScript",
			"SQL",
			"NoSQL",
			"CSS"
			]
		}

		this.options = {
			title: {
				display: true,
				text: '',
				fontSize: 16,
				fontColor: 'white'
			},
			legend: {
				position: 'right',
			},
		};

		this.optionSmall = {
			title: {
				display: true,
				text: '',
				fontSize: 16,
				fontColor: 'white'
			},
			legend: {

				position: 'top',
			},
			responsive: true,
			maintainAspectRatio: false
		}
	}

	@HostListener('window:scroll', ['$event']) checkScroll() {

		const div = document.getElementById('section-skills').offsetTop;
		const componentPosition = this.el.nativeElement.offsetTop
		const scrollPosition = window.pageYOffset;

		if (scrollPosition >= div - 500) {
			this.state = 'show';
		} else {
			this.state = 'hide';
		}

	}

	ngOnInit() {
	}

}
