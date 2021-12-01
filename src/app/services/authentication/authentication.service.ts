import { emptyString, profilesTypes, profileTypeIcon, translatedProfilesTypes } from './../../shared/utils/constants';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate{

	private readonly headerPostOptions: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
	private url = environment.apiUrl + '/login';

	cachedRequests: Array<HttpRequest<any>> = [];
	constructor(
		private http: HttpClient,
		private router: Router,) {
	}


	public collectFailedRequest(request: any): void {
		this.cachedRequests.push(request);
	}

	async canActivate(route: any, state: any) {
		const hasLocalStorage = await this.checkLoggedIn();
		if (hasLocalStorage) {
			return true;
		}

		this.router.navigate(['/']);
		return false;
	}

	login(userLogin: {}){
		return this.http.post(`${this.url}`, userLogin, {headers: this.headerPostOptions});
	}

	logout() {
		this.removeLocalStorage();
		this.router.navigate(['/']);
	}

	checkLoggedIn() {
		const verifyIfHasData = localStorage.getItem('token') || '';
		if(verifyIfHasData === emptyString){
			return false;
		}
		return true;
	}

	getHeaderDataInfo()
	{
		return {
			userName: localStorage.getItem('userName'),
			organizationName: localStorage.getItem('organizationName'),
			profileType: localStorage.getItem('profileTypePtBr'),
			profileIcon: localStorage.getItem('profileIcon'),
		}
	}

	getProfileType() {
		const profile = localStorage.getItem('profileType');
		let profileString : string = emptyString;
		if(profile === null){
			this.logout();
		} else {
			profileString = profile;
		}
		return profileString;
	}

	getUserId() {
		const profile = Number(localStorage.getItem('userId'));
		let userId : number = 0;
		if(profile === null){
			this.logout();
		} else {
			userId = profile;
		}
		return userId;
	}

	getToken() {
		const token = localStorage.getItem('token');
		if(token === null){
			this.logout();
			return
		}
		return token;
	}

	async setLocalStorage(userData: any) : Promise<void>{
		const icon = this.getProfileIcon(userData.profileType);
		const profile = this.getProfileTypePortuguese(userData.profileType);

		localStorage.setItem('userId', userData.userId);
		localStorage.setItem('userName', userData.userName);
		localStorage.setItem('profileType', userData.profileType);
		localStorage.setItem('token', userData.token);
		localStorage.setItem('profileIcon', icon);
		localStorage.setItem('profileTypePtBr', profile);
		this.checkIfSetOrganizationInStorage(userData.organizationName);
	}

	checkIfSetOrganizationInStorage(organizationName: string)
	{
		organizationName? localStorage.setItem('organizationName', organizationName) : false ;
	}

	private removeLocalStorage(){
		localStorage.removeItem('userId');
		localStorage.removeItem('userName');
		localStorage.removeItem('profileType');
		localStorage.removeItem('organizationName');
		localStorage.removeItem('token');
		localStorage.removeItem('profileIcon');
		localStorage.removeItem('profileTypePtBr');
	}

	getProfileIcon(profile: string){
		let iconProfile = emptyString;

		switch(profile){
			case profilesTypes.Donor:
				iconProfile = profileTypeIcon.Donor;
				break;
			case profilesTypes.Transporter:
				iconProfile = profileTypeIcon.Transporter;
				break;
			case profilesTypes.Distributor:
				iconProfile = profileTypeIcon.Transporter;
				break;
			default:
				iconProfile = emptyString;
				break;
		}
		return iconProfile;
	}

	getProfileTypePortuguese(profile: string){
		let profileText = emptyString;

		switch(profile){
			case profilesTypes.Donor:
				profileText = translatedProfilesTypes.donor;
				break;
			case profilesTypes.Transporter:
				profileText = translatedProfilesTypes.transporter;
				break;
			case profilesTypes.Distributor:
				profileText = translatedProfilesTypes.distributor;
				break;
			default:
				profileText = emptyString;
				break;
		}
		return profileText;
	}

	goToHome(data: any){
		this.setLocalStorage(data);
		this.router.navigate(['/home']);
	}
}
