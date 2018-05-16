import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';

@Component({
  selector: 'app-contact-us',
  animations: [fadeIn],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	window.scroll(0, 0);
  }

}
