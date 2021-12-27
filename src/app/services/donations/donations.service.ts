import { statusToReturnByRouteParamList } from './../../shared/utils/constants';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DonationsService {

	private readonly headerPostOptions: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
	private url = environment.apiUrl + '/donations';

	public newDonation: any = {
		provisions: [],
	}

	public distributorData: any;

	constructor(private http: HttpClient) { }

	saveNewDonation(data: any){
		return this.http.post(`${this.url}/new`, data );
	}

	getListHistory(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: statusToReturnByRouteParamList.History} });
	}

	getListAvailableToShip(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: statusToReturnByRouteParamList.Available} });
	}

	getListOnTheWayDonations(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: statusToReturnByRouteParamList.OnTheWay} });
	}

	getListDonationsReceived(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: statusToReturnByRouteParamList.Received} });
	}

	getListDonationsInProgress(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: statusToReturnByRouteParamList.InProgress} });
	}

	getListShipmentInProgress(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: statusToReturnByRouteParamList.ShipmentsInProgress} });
	}

	getListShipmentHistory(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: statusToReturnByRouteParamList.ShipmentsHistory} });
	}

	getListTransfersHistory(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: statusToReturnByRouteParamList.TransfersHistory} });
	}

	getListTransfersInProgress(){
		return this.http.get(`${this.url}/list`, {
			params: { pageIndex: 1, pageSize: 10, route: statusToReturnByRouteParamList.TransfersInProgress} });
	}

	updateDonationAction(action: actionDonation)
	{
		return this.http.patch(`${this.url}/update`, action);
	}
}

type actionDonation ={
	donation_id: number,
	action: string,
}
