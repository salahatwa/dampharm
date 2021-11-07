export class Dentist {
	dentistName: string;
	dentistSpecialtyInstitution: string;
	dentistSpecialty: string;
	dentistClinic1: string;
	dentistCourses: string;
	dentistImage: string;
	dentistBio: string;
	constructor(dentistName?: string, dentistSpecialty?: string, dentistSpecialtyInstitution?: string, dentistClinic1?: string, dentistImage?: string, dentistBio?: string, dentistCourses?: string) {
		this.dentistName = dentistName;
		this.dentistSpecialtyInstitution = dentistSpecialtyInstitution;
		this.dentistSpecialty = dentistSpecialty;
		this.dentistClinic1 = dentistClinic1;
		this.dentistCourses = dentistCourses;
		this.dentistImage = dentistImage;
		this.dentistBio = dentistBio;
	}
}

export class ContactUs {
	phone: string;
	email: string;
	address: string;
}

export class DamPharm {
	phones?: Phone[];
	email?: string;
	address?: string;
	location?: string;
	products?: Product[];
	employees?: Employee[];
}

export class Employee {
	id?: string;
	name?: string;
	email?: string;
	phone?: string;
	about?: string;
	position?: string;
	img?: string;
	education?: string
}

export class Phone {
	code?: string;
	mob?: String;
}

export class Product {
	slug?:string;
	nameAr?: string;
	nameEn?: string;
	descAr?: string;
	descEn?: string;
	contains?:[];
	img:string;
}