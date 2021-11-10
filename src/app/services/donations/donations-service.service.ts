import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DonationsService {

	private url = environment.apiUrl + '/donations';

	constructor(private http: HttpClient) { }

	saveNewDonation(data: any){
		return this.http.post(`${this.url}/new`, data );
	}

	getHistoryList(params: any){
		return this.http.get(`${this.url}/history`, { params: params });
	}

	getListAvailableToShip(){
		return this.http.get(`${this.url}/available`);
	}

	getListScheduledDonations(){
		return this.http.get(`${this.url}/scheduled`);
	}

	getListDonationsReceived(){
		return this.http.get(`${this.url}/received`);
	}
}
