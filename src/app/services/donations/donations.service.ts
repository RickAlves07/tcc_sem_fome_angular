import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DonationsService {

	private url = environment.apiUrl + '/donations';

	public newDonation: any;

	public distributorData: any;

	constructor(private http: HttpClient) { }

	saveNewDonation(data: any){
		return this.http.post(`${this.url}/new`, data );
	}

	getListHistory(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: 'history'} });
	}

	getListAvailableToShip(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: 'available'} });
	}

	getListOnTheWayDonations(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: 'on-the-way'} });
	}

	getListDonationsReceived(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: 'received'} });
	}

	getListDonationsInprogress(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: 'in-progress'} });
	}

	updateDonationAction(action: actionDonation)
	{
		return this.http.post(`${this.url}/update`, action);
	}
}

type actionDonation ={
	donation_id: number,
	action: string,
}
