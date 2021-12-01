import { DateFormats } from "./constants";
import * as moment from 'moment';

export default class Utilities {
	static convertDateToShow(date: string, format: string) {
		return moment(date, format).format(DateFormats.DateOnlyFormatPtBr);
	}

	static convertTimeToShow(date: string, format: string) {
		return moment(date, format).format(DateFormats.TimeDefaultFormat);
	}

	static convertDateToSend(date: string, format: string) {
		return moment(date, format).format(DateFormats.DateTimeZoneISO);
	}

	static dateIsGreaterThan(dateGreater: string, formatOfTheGreater: string, dateLess: string) {
		return moment(dateGreater, formatOfTheGreater).isBefore(dateLess);
	}
}
