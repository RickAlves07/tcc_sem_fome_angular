import { Component, Input, OnInit } from '@angular/core';
import { donationPackagesStatus } from '../../utils/constants';

@Component({
  selector: 'app-list-donations',
  templateUrl: './list-donations.component.html',
  styleUrls: ['./list-donations.component.scss']
})
export class ListDonationsComponent implements OnInit {

	@Input("donationsList") donationsList: any = [{}];

	constructor() { }

	ngOnInit(): void {
	}

	canConfirmCollected(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		return ((
			status !== donationPackagesStatus.WaitingForPickup &&
			status !== donationPackagesStatus.OnDeliveryRoute &&
			status === donationPackagesStatus.OnDeliveryRoute
		 ) ? true : false)
	}
}
