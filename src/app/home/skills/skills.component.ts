import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
@Component({
	selector: 'home-skills',
	animations: [fadeIn],
	templateUrl: './skills.component.html',
	styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
	data: any;
	options: any;

	constructor() { 
		this.data = {
	        datasets: [{
	            data: [
	                9.1,
	                8.2,
	                7,
	                9,
	                8,
	                8.5
	            ],
	            backgroundColor: [
	                "#FF6384",
	                "#54F3AD",
	                "#4BC0C0",
	                "#FFCE56",
	                "#E7E9ED",
	                "#36A2EB"
	            ],
	            label: 'My dataset'
	        }],
	        labels: [
	            "JavaScript",
	            "TypeScript",
	            "SQL",
	            "NoSQL",
	            "Git",
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
	}

	ngOnInit() {
	}

}
