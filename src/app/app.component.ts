import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'TCC CC';
	constructor(
		private router: Router
	){}

	canShowHeader(){
		return (
			this.router.url === '/' ||
			this.router.url === '/register' ||
			this.router.url === '/activate' ||
			this.router.url === '/register/profile-type-choice' ||
			this.router.url === '/register/complete-registration'
		) ? false : true;
	}
}
