import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'restaurant-modal',
  templateUrl: './restaurant-modal.component.html',
  styleUrls: ['./restaurant-modal.component.scss']
})
export class RestaurantModalComponent implements OnInit {
	@Input() item: any;
  	constructor() { }

  	ngOnInit() {
  	}

}
