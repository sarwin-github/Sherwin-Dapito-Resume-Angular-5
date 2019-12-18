import { Injectable } from '@angular/core';
import { PortfolioDB } from '../../fake-db/portfolio-items';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PortfolioService {
	public portfolioItems;

  	constructor() { 
  		let portfolioDB = new PortfolioDB();
  		this.portfolioItems = portfolioDB.portfolio_items;
  	}

  	// get portfolioItems
	getPortfolioItems(){
		const rows = this.portfolioItems;
		return  of(rows.slice()).pipe(delay(500));
	}

}
