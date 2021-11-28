import { emptyString } from './../shared/utils/constants';
export class UserRegister {
	user: {
		name: string,
		cpf: string,
		email: string,
		phone_number: string,
		password: string,
		profile_type: string,
	};
	address: {
		zip_code: string,
		street: string,
		address_number: string,
		neighborhood: string,
		city: string,
		state: string,
		complement?: string,
	}
	organization?: {
		name: string,
		cnpj: string,
		email: string,
		phone_number: string,
	}
	representatives?: [{
		name: string,
		email: string,
		phone_number: string,
	}]

	constructor(){
		this.user = {
			name: emptyString,
			cpf: emptyString,
			email: emptyString,
			phone_number: emptyString,
			password: emptyString,
			profile_type: emptyString,
		},
		this.address = {
			zip_code: emptyString,
			street: emptyString,
			address_number: emptyString,
			neighborhood: emptyString,
			city: emptyString,
			state: emptyString,
			complement: emptyString,
		}
	}
}
