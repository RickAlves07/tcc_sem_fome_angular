import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-infos',
  templateUrl: './profile-infos.component.html',
  styleUrls: ['./profile-infos.component.scss']
})
export class ProfileInfosComponent implements OnInit {

	@Input("donation") donation: any = {};

	constructor(
		private authenticationService: AuthenticationService,
	) { }

	ngOnInit(): void {
	}

	getUserId(){
		return this.authenticationService.getUserId();
	}

	getOrganizationName(){
		return this.authenticationService.getOrganizationName();
	}

}
