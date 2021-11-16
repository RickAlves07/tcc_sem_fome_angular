import { emptyString } from './../shared/utils/constants';
export class Provision {
	id?: number;
	description: string;
	quantity: number;
	unit_weight: number;
	total_weight: number;
	donation_package_id?: number;
	expiration_date: string;
	created_at?: Date;
	updated_at?: Date;

	constructor(){
		this.description = emptyString;
		this.quantity = 0;
		this.unit_weight = 0;
		this.total_weight = 0;
		this.expiration_date = new Date().toISOString();
	}
};
