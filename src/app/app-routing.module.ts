import { UserRegister } from 'src/app/models/user-register';
import { CompleteRegistrationComponent } from './pages/complete-registration/complete-registration/complete-registration.component';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShipmentsHistoryComponent } from './pages/shipments-history/shipments-history.component';
import { TransferDonationComponent } from './pages/transfer-donation/transfer-donation.component';
import { OnTheWayDonationsComponent } from './pages/on-the-way-donations/on-the-way-donations.component';
import { DonationsReceivedComponent } from './pages/donations-received/donations-received.component';
import { DonationsHistoryComponent } from './pages/donations-history/donations-history.component';
import { AvailableDonationsComponent } from './pages/available-donations/available-donations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewDonationComponent } from './pages/new-donation/new-donation.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DonationCheckUpComponent } from './pages/donation-check-up/donation-check-up.component';
import { ProfileTypeChoiceComponent } from './pages/profile-type-choice/profile-type-choice/profile-type-choice.component';

const routes: Routes = [
	{ path: '', component: LoginComponent},
	{ path: 'register', component: SignUpComponent},
	{ path: 'register/profile-type-choice', component: ProfileTypeChoiceComponent },
	{ path: 'register/complete-registration', component: CompleteRegistrationComponent },
	{ path: 'home', component: HomeComponent, canActivate: [AuthenticationService] },
	{ path: 'donations/new', component: NewDonationComponent, canActivate: [AuthenticationService] },
	{ path: 'donations/check-up', component: DonationCheckUpComponent, canActivate: [AuthenticationService] },
	{ path: 'donations/available', component: AvailableDonationsComponent, canActivate: [AuthenticationService] },
	{ path: 'donations/history', component: DonationsHistoryComponent, canActivate: [AuthenticationService] },
	{ path: 'donations/received', component: DonationsReceivedComponent, canActivate: [AuthenticationService] },
	{ path: 'donations/on-the-way', component: OnTheWayDonationsComponent, canActivate: [AuthenticationService] },
	{ path: 'donations/transfer', component: TransferDonationComponent, canActivate: [AuthenticationService] },
	{ path: 'donations/transfer/in-progress', component: TransferDonationComponent, canActivate: [AuthenticationService] },
	{ path: 'shipment/history', component: ShipmentsHistoryComponent, canActivate: [AuthenticationService] },
	{ path: '**', component: NotFoundComponent, canActivate: [AuthenticationService] },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
