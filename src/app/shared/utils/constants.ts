export const emptyString = '';

export const emptyArray = [];

export const DateFormats = {
	DateOnlyFormatPtBr: "DD/MM/YYYY",
	DateOnlyDefaultFormat: "YYYY-MM-DD",
	DateTimeOnlyFormatPtBr: "DD/MM/YYYY HH:mm",
	DateTimeDefaultFormat: "YYYY-MM-DDTHH:mm:ss",
	TimeDefaultFormat: "HH:mm",
	DateTimeZoneISO: 'YYYY-MM-DDTHH:mm:ss.sssZ'
}

export const donationPackagesStatus = {
	WaitingATransporter: 'Aguardando um Transportador',
	WaitingForPickup: 'Aguardando Coleta',
	OnDeliveryRoute: 'Em rota de Entrega',
	Delivered: 'Entregue',
	Received: 'Recebido',
	ReturningToDonor: 'Retornado ao Doador',
	Returned: 'Devolvido',
	Canceled: 'Cancelado',
}

export const donationsByStatusToReturnByRouteParam = {
	'in-progress': [
		donationPackagesStatus.WaitingATransporter,
		donationPackagesStatus.WaitingForPickup,
		donationPackagesStatus.OnDeliveryRoute,
		donationPackagesStatus.ReturningToDonor,
	],
	'history': [
		donationPackagesStatus.Delivered,
		donationPackagesStatus.Received,
		donationPackagesStatus.Returned,
		donationPackagesStatus.Canceled,
	],
	'available': [
		donationPackagesStatus.WaitingATransporter,
	],
	'on-the-way': [
		donationPackagesStatus.WaitingATransporter,
		donationPackagesStatus.WaitingForPickup,
		donationPackagesStatus.OnDeliveryRoute,
	],
	'received': [
		donationPackagesStatus.Delivered,
		donationPackagesStatus.Received,
	],
	'shipment-in-progress': [
		donationPackagesStatus.WaitingForPickup,
		donationPackagesStatus.OnDeliveryRoute,
		donationPackagesStatus.ReturningToDonor,
	]
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

export const personType = {
	JuridicalPerson: 'Pessoa Juridica',
	NaturalPerson: 'Pessoa Física',
}

export const profileTypeIcon = {
	Donor: 'uil uil-box',
	Transporter: 'uil uil-truck',
	Distributor: 'uil uil-crockery',
}

export const actionsDonation = {
	confirmCollected: 'confirm-collected',
	confirmReceived: 'confirm-received',
	confirmDelivered: 'confirm-delivered',
	confirmReturned: 'confirm-returned',
	confirmDonateAgain: 'confirm-donate-again',
	cancelDonation: 'cancel-donation',
	acceptTransport: 'accept-transport',
	cancelTransport: 'cancel-transport',
	cancelTransportReturn: 'cancel-transport-return',
}

export const statusToReturnByRouteParamList = {
	InProgress:'in-progress',
	History: 'history',
	Available: 'available',
	OnTheWay:'on-the-way',
	Received: 'received',
	ShipmentsInProgress: 'shipments-in-progress',
	ShipmentsHistory: 'shipments-history',
	TransfersHistory: 'transfers-history',
	TransfersInProgress: 'transfers-in-progress',
}
