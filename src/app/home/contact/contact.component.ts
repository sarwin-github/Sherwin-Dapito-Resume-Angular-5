import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fadeIn } from '../../animations/fade-in';
import { scrollAnimation } from '../../animations/slide-from-left';
import { fadeInFrom } from '../../animations/fade-in-from';

@Component({
	selector: 'home-contact-us',
	animations: [fadeIn, scrollAnimation, fadeInFrom],
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	state = 'hide';
	contactForm : FormGroup;
	contact     : IContactInput;

	constructor(public el: ElementRef, 
		private formBuilder: FormBuilder) { 
		this.contact = <IContactInput>{}; 
	}

	ngOnInit() {
		this.contactForm = this.formBuilder.group({
			'email'   : [null, Validators.compose([Validators.required, Validators.email])],
	    	'subject' : [null, Validators.compose([Validators.required])],
	    	'name'    : [null, Validators.compose([Validators.required])],
	    	'message' : [null, Validators.compose([Validators.required])]
	    });
	}

	@HostListener('window:scroll', ['$event']) checkScroll() {

		const div = document.getElementById('section-contact').offsetTop;
		const componentPosition = this.el.nativeElement.offsetTop
		const scrollPosition = window.pageYOffset;

		if (scrollPosition >= div - 500) {
			this.state = 'show';
		} else {
			this.state = 'hide';
		}

	}

}


interface IContactInput{
	name            : string;
	email           : string;
	password        : string;
	confirmPassword : string;
	address         : string;
}