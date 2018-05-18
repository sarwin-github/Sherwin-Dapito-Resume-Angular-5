import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';

@Component({
	selector: 'app-skills',
	animations: [fadeIn],
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

	mySkillDiv: ISkillDiv

	constructor() {
		this.mySkillDiv = <ISkillDiv>{
			nodeDiv    : false,
			expressDiv : false,
			mongoDiv   : false,
			jqueryDiv  : false,
			angularDiv : false,
			bootstrapDiv : false,
			awsDiv     : false,
			herokuDiv  : false,
		}
	}

	ngOnInit() {
		window.scroll(0, 0);
	}
}

interface ISkillDiv{
	nodeDiv    : boolean,
	expressDiv : boolean,
	mongoDiv   : boolean,
	jqueryDiv  : boolean,
	angularDiv : boolean,
	bootstrapDiv : boolean,
	awsDiv     : boolean,
	herokuDiv  : boolean
}
