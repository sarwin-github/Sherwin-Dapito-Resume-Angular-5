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
	}

}
