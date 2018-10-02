import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import { mainAnimations } from '../animations/all-animation';

@Component({
	selector: 'app-skills',
	animations: [fadeIn, mainAnimations],
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
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
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
