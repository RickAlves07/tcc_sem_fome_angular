import { Provision } from './provision';
export type NewDonation = {
	comments?: string,
	scheduled_at?: Date | null;
	organization_distributor_id?: number,
	total_weight: number,
	total_items: number,
	provisions: Provision[],
}
