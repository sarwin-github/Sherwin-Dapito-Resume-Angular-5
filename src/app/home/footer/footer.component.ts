import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../../animations/fade-in';
@Component({
  selector: 'home-footer',
	animations: [fadeIn],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
