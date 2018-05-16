import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';

@Component({
	selector: 'app-skills',
	animations: [fadeIn],
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		window.scroll(0, 0);
	}

}
