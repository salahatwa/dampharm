import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Dentist } from './Dentist';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DentistserviceService {
	dentistAnabel:Dentist;
    dentistNadia:Dentist;
	dentistLuis:Dentist;
	dentistPamela:Dentist;
	dentistDiana:Dentist;
	dentistPahola:Dentist;
	dentistSamanta:Dentist;
	dentistSohad:Dentist;
	dentistSandra:Dentist;
    dentists:Dentist[] = [];
	
  constructor() {
	this.dentistAnabel = new Dentist("Dra. Anabel Argueta","Especialista en Estetica/Endodoncista","UNICAH(Honduras)","Mall La Galeria","assets/img/doctor/draanabel.jpg","Con más de 10 años de experiencia, tiempo en que ha cambiado vidas a través de nuevas sonrisas. Anabel se mantiene en constante actualización en las últimas tendencias en diseño de sonrisas. Anabel aparte de ser apacionada en su carrera profesional, también disfruta su tiempo libre con su familia, esposo e hijos.","Planificacion y diseño digital de Sonrisas por Dental Science SLP(MEXICO), Lentes Ceramicos en UNITEC(HONDURAS), Aprendiendo a disevar sonrisas por Zeyco y Dental Science");
	this.dentistNadia = new Dentist("Dra. Nadia Irias","Cirugia Oral y Maxilofacial","Universidad del Bosque(Bogota, Colombia)","Mall Multiplaza","assets/img/doctor/dranadia.jpg","La doctora Nadia Irías es especialista en el área de cirugía Oral y Maxiolofacial en la Universidad del Bosque (Bogota, Colomobia). Su área la consta en el estudio y tratamiento de la estructura anatómica de la cara, craneo, cuello y cavidad oral. La Dra. Irías también consta de una especialización en manejo de dolor en la Universidad de Salamanca (Salamanca, España). Así mismo la Dra Irías se destaca por ser una persona muy solidaria con los demás y en sus tiempos libres disfurta viajar, conocer nuevas experiencias, leer y tomar un buen café.");
  	this.dentistLuis = new Dentist("Dra. Luis Moncada","Ortodoncista y Ortopeda Maxilofacial","UNICAH(HONDURAS)","Mall Multiplaza","assets/img/doctor/drluis.jpg","Dr. Luis Moncada egresado de UNICAH (Universidad Católica de Honduras) especialista en Ortodoncia y Ortopedia Maxilofacial. El Dr. Moncada es muy profesional en su trabajo y amigable con sus pacientes. Además el Dr. Moncada disfurta de su tiempo libre con su familia y amigos y nunca puede faltar en su día a día escuchar música.");
  	this.dentistPamela = new Dentist("Dra. Pamela Escoto","Ortodoncista y Ortopeda Maxilofacial","UNITEC(MEXICO)","Mall La Galeria","assets/img/doctor/drapamela.jpg","Dra. Pamela Escoto es ortodoncista y ortopedia maxilofacial graduada de UNITEC(México), así también tiene un certificado en Invisalign y Ortodoncia Autoligado. La Dra. Escoto es muy apacionada no solamente en su trabajo si no también al compartir tiempo con su familia, para ella la familia está en primer lugar y su principal alegría en su vida.");
  	this.dentistDiana = new Dentist("Dra. Diana Anchecta","Odontopediatra","Universidad Autonoma de Puebla(BUAP)","Mall La Galeria","Courses","assets/img/doctor/draDiana.jpg","La Dra. Diana Marielos Anchecta es especialista en odontopediatría. Consta de una maestría en Estomatología pediática en la Universidad Autónoma de Puebla (BUAP). También es miembor de la AAPD (American Academy of pediateic dentistry). La Dra. Anchecta se destaca por ser una persona muy amigable y amorosa con los niños. Ama su trabajo y los niños la adoran. No dudes en poner en manos de la Dra. Anchecta a tus pequeños.");
	this.dentistSamanta = new Dentist("Dra. Samanta Espinoza","Odontologa General","Universidad Nacional Autonoma de Honduras(UNAH)","Mall La Galeria","assets/img/doctor/drasamantha.jpg","La Dra Samanta es no se.");
	this.dentistPahola = new Dentist("Dra. Pahola Viera","Odontologa General","Universidad Nacional Autonoma de Honduras(UNAH)","Mall Multiplaza","assets/img/doctor/draViera.jpg","La Dra. Viera es pequena.");
	this.dentistSohad = new Dentist("Dra. Sohad Aguilera","Odontologa General","Universidad Nacional Autonoma de Honduras(UNAH)","Mall La Galeria","assets/img/doctor/draSohad.jpg","La doctora Sohad es General.");
	this.dentists.push(this.dentistPahola);
	this.dentists.push(this.dentistSamanta);
	this.dentists.push(this.dentistAnabel);
    this.dentists.push(this.dentistNadia);
	this.dentists.push(this.dentistLuis);
	this.dentists.push(this.dentistPamela);
  	this.dentists.push(this.dentistDiana);
	this.dentists.push(this.dentistSohad);
  }
	
	private log(toLog:string){
		console.log(toLog);
	}
	private handleError<T>( operation = 'operation', result ?: T){
    return(error: any): Observable<T> => {
      console.error(error);
      this.log('${operation} failed: ${error.message}');
      return of(result as T);
   
      };
    }
	public getAllDentists():Dentist[]{
		return this.dentists;
	}
	public postDentist(dentist:Dentist):void{
		this.dentists.push(dentist);
	}
	public getDentist(id:string):Dentist{
		return this.dentists.find(Dentist => Dentist.dentistName === id);
	}

}
