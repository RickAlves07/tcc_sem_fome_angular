export const emptyString = '';

export const emptyArray = [];

export const DateFormats = {
	DateOnlyFormatPtBr: "DD/MM/YYYY",
	DateOnlyDefaultFormat: "YYYY-MM-DD",
	DateTimeOnlyFormatPtBr: "DD/MM/YYYY HH:mm",
	DateTimeDefaultFormat: "YYYY-MM-DDTHH:mm:ss",
	DateTimeZoneISO: 'YYYY-MM-DDTHH:mm:ss.sssZ'
}

export const donationPackagesStatus = {
	WaitingATransporter: 'waiting a transporter',
	WaitingForPickup:'waiting for pickup',
	OnDeliveryRoute: 'on delivery route',
	InTransport:'in transport',
	Delivered: 'delivered',
	Received: 'received',
	ReturningToDonor: 'returning to donor',
	Returned: 'returned',
	Canceled: 'canceled',
}

export const profilesTypes = {
	Donor: 'donor',
	Transporter: 'transporter',
	Distributor: 'distributor',
}

export const translatedProfilesTypes = {
	donor: 'Doador',
	transporter: 'Transportador',
	distributor: 'Distribuidor',
}

export const donationsByStatusToReturnByRouteParam = {
	InProgress: 'in-progress',
	History: 'history',
	Available: 'available',
	OnTheWay: 'on-the-way',
	Received: 'received',
}

export const personType = {
	JuridicalPerson: 'Pessoa Juridica',
	NaturalPerson: 'Pessoa Física',
}

export const profileTypeIcon = {
	Donor: 'uil uil-box',
	Transporter: 'uil uil-truck',
	Distributor: 'uil uil-crockery',
}
