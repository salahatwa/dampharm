export class Dentist{
	dentistName:string;
	dentistSpecialtyInstitution:string;
	dentistSpecialty:string;
	dentistClinic1:string;
	dentistCourses:string;
	dentistImage:string;
	dentistBio:string;
	constructor(dentistName?:string,dentistSpecialty?:string,dentistSpecialtyInstitution ?:string, dentistClinic1?:string,dentistImage?:string, dentistBio?:string, dentistCourses ?:string){
		this.dentistName = dentistName;
		this.dentistSpecialtyInstitution = dentistSpecialtyInstitution;
		this.dentistSpecialty = dentistSpecialty;
		this.dentistClinic1 = dentistClinic1;
		this.dentistCourses = dentistCourses;
		this.dentistImage = dentistImage;
		this.dentistBio = dentistBio;
	}
}