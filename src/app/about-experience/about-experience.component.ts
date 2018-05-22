import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';

@Component({
	selector: 'app-about-experience',
	animations: [fadeIn],
	templateUrl: './about-experience.component.html',
	styleUrls: ['./about-experience.component.scss']
})
export class AboutExperienceComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
	}

}
