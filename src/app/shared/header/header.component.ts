import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  fixed: boolean;
  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll($event) {
    const number = $event.target.scrollTop;

    if (number > 40) {
      this.fixed = true;
    } else if (this.fixed && number < 10) {
      this.fixed = false;
    }
  }

}
