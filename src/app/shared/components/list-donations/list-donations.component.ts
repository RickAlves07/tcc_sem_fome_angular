import { DonationsService } from 'src/app/services/donations/donations.service';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { actionsDonation, emptyString, profilesTypes } from 'src/app/shared/utils/constants';
import { Component, Input, OnInit } from '@angular/core';
import { donationPackagesStatus } from '../../utils/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-donations',
  templateUrl: './list-donations.component.html',
  styleUrls: ['./list-donations.component.scss']
})
export class ListDonationsComponent implements OnInit {

	readonly constActions = actionsDonation;

	readonly constProfilesTypes = profilesTypes;

	@Input("donationsList") donationsList: any = [{}];

	userProfileId: number = 0;
	userProfileType: string = emptyString;


	constructor(
		private authenticationService: AuthenticationService,
		private router: Router,
		private donationsService: DonationsService,
	) { }

	ngOnInit(): void {
		this.userProfileId = this.authenticationService.getUserId();
		this.userProfileType = this.authenticationService.getProfileType();
	}

	canConfirmCollected(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		const userIdDonor = this.donationsList[listIndex]?.user_donor_id;
		const userIdTransporter = this.donationsList[listIndex]?.donation_shipment?.user_transporter_id;
		return ((
			(status === donationPackagesStatus.WaitingForPickup) &&
			(this.userProfileId === userIdDonor || this.userProfileId === userIdTransporter)
		) ? true : false );
	}

	canConfirmReceived(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		const userIdDistributor = this.donationsList[listIndex]?.organization_distributor_id;
		return ((
			(status === donationPackagesStatus.OnDeliveryRoute || status === donationPackagesStatus.Delivered) &&
			(this.userProfileId === userIdDistributor)
		) ? true : false );
	}

	canConfirmDelivered(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		const userIdTransporter = this.donationsList[listIndex]?.donation_shipment?.user_transporter_id;
		return ((
			(status === donationPackagesStatus.OnDeliveryRoute) &&
			(this.userProfileId === userIdTransporter)
		) ? true : false );
	}

	canConfirmReturned(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		const userIdDonor = this.donationsList[listIndex]?.user_donor_id;
		return ((
			(status === donationPackagesStatus.ReturningToDonor) &&
			(this.userProfileId === userIdDonor)
		) ? true : false );
	}

	canConfirmDonateAgain(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		const userIdDonor = this.donationsList[listIndex]?.user_donor_id;
		return ((
			(status === donationPackagesStatus.Returned) &&
			(this.userProfileId === userIdDonor)
		) ? true : false );
	}

	canCancelDonation(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		const userIdDonor = this.donationsList[listIndex]?.user_donor_id;
		return ((
			(status === donationPackagesStatus.WaitingATransporter) &&
			(this.userProfileId === userIdDonor)
		) ? true : false );
	}

	canAcceptTransport(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		return ((
			(status === donationPackagesStatus.WaitingATransporter) &&
			(this.userProfileType === profilesTypes.Transporter)
		) ? true : false );
	}

	canCancelTransport(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		const userIdTransporter = this.donationsList[listIndex]?.donation_shipment?.user_transporter_id;
		return ((
			(status === donationPackagesStatus.WaitingForPickup) &&
			(this.userProfileType === profilesTypes.Transporter) &&
			(this.userProfileId === userIdTransporter)
		) ? true : false );
	}

	canCancelTransportAndReturn(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		const userIdTransporter = this.donationsList[listIndex]?.donation_shipment?.user_transporter_id;
		return ((
			(status === donationPackagesStatus.OnDeliveryRoute) &&
			(this.userProfileType === profilesTypes.Transporter) &&
			(this.userProfileId === userIdTransporter)
		) ? true : false );
	}

	canTransferDonation(listIndex: number)
	{
		const status = this.donationsList[listIndex]?.status;
		const userIdDistributor = this.donationsList[listIndex]?.organization_distributor_id;
		return ((
			(status === donationPackagesStatus.Delivered || status === donationPackagesStatus.Received) &&
			(this.userProfileType === profilesTypes.Distributor) &&
			(this.userProfileId === userIdDistributor)
		) ? true : false );
	}

	setActionAndDonationId(listIndex: number, action: string){
		const actionToSend: actionDonation = {
			donation_id: this.donationsList[listIndex]?.id,
			action: action,
		}
		this.sendActionDonation(actionToSend);
	}

	sendActionDonation(action: actionDonation){
		this.donationsService.updateDonationAction(action)
		.subscribe((data: any) => {
			this.goToHome()
		})
	}

	goToHome(){
		this.router.navigate(['/home']);
	}
}

type actionDonation ={
	donation_id: number,
	action: string,
}
