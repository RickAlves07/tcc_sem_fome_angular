import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ShipmentsHistoryComponent } from './pages/shipments-history/shipments-history.component';
import { TransferDonationComponent } from './pages/transfer-donation/transfer-donation.component';
import { ScheduledDonationsComponent } from './pages/scheduled-donations/scheduled-donations.component';
import { DonationsReceivedComponent } from './pages/donations-received/donations-received.component';
import { DonationsHistoryComponent } from './pages/donations-history/donations-history.component';
import { AvailableDonationsComponent } from './pages/available-donations/available-donations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NewDonationComponent } from './pages/new-donation/new-donation.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
	{ path: '', component: LoginComponent},
	{ path: 'sign-up', component: SignUpComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'donations/new', component: NewDonationComponent },
	{ path: 'donations/available', component: AvailableDonationsComponent},
	{ path: 'donations/history', component: DonationsHistoryComponent},
	{ path: 'donations/received', component: DonationsReceivedComponent},
	{ path: 'donations/scheduled', component: ScheduledDonationsComponent},
	{ path: 'donations/transfer', component: TransferDonationComponent},
	{ path: 'shipment/history', component: ShipmentsHistoryComponent},
	{ path: '**', component: NotFoundComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
