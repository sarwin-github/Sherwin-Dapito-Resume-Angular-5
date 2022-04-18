import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import { mainAnimations } from '../animations/all-animation';
import { PortfolioService } from '../shared/services/portfolio/portfolio.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-portfolio',
	animations: [fadeIn, mainAnimations],
	templateUrl: './portfolio.component.html',
	styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
	private req: Subscription;
	public portfolioItems;

	constructor(private PortfolioService: PortfolioService) { }

	ngOnInit() {
		window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });

		this.getPortfolioItems();
	}

	private getPortfolioItems(){
		this.req = this.PortfolioService.getPortfolioItems().subscribe(result => this.portfolioItems = result);
	}
}
