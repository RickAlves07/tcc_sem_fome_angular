import { Provision } from './provision';
import { emptyString } from './../shared/utils/constants';
export class DonationPackage {
	id?: number;
	status: string;
	total_items: number;
	total_weight: number;
	comments?: string;
	shipment_id?: number | null;
	user_donor_id?: number;
	address_donor_id?: number;
	organization_distributor_id?: number;
	scheduled_at: Date | null;
	collected_at?: Date | null;
	created_at?: Date;
	updated_at?: Date;
	provisions: Provision[];

	constructor()
	{
		this.status = emptyString;
		this.total_items = 0;
		this.total_weight = 0;
		this.provisions = [];
		this.scheduled_at = new Date();
	}
};
