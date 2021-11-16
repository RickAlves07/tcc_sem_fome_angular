export const emptyString = '';

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
