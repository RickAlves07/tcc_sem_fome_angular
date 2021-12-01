import { emptyString } from 'src/app/shared/utils/constants';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	userInfo: any = {
		userName: emptyString,
		organizationName: emptyString,
		profileType: emptyString,
		profileIcon: 'uil uil-crockery',
	}

	constructor(
		private authenticationService: AuthenticationService
	) { }

	ngOnInit(): void {
		this.getUserInfos();
	}

	getUserInfos()
	{
		this.userInfo = this.authenticationService.getHeaderDataInfo();
	}

	logout()
	{
		this.authenticationService.logout();
	}
}
