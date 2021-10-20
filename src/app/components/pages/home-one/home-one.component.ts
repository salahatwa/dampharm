import { Component, OnInit } from '@angular/core';
import { Dentist } from 'src/app/Dentist';
import { DentistserviceService } from 'src/app/dentistservice.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
  dentist:Dentist = new Dentist();
  dentists:Dentist[] = [];
	dentistNames = DENTIST_NAMES;
	

	constructor(private service:DentistserviceService, private router:Router) {
		this.dentists = this.service.getAllDentists();
	}
 	assignDentist(dentistName:string){
		this.dentist = this.service.getDentist(dentistName);
  	}
	
	getAllDentists(){
		return this.service.getAllDentists();
 	}
  	  
	passDentist(){
		this.router.navigate(['./doctor-details'],{ queryParams: { dentistName:this.dentist.dentistName }});
	}
	
	ngOnInit(): void {
  	
	}
}
export const DENTIST_NAMES = {
	'dentistAnabel':'Dra. Anabel Argueta',
	'dentistPamela':'Dra. Pamela Escoto',
	'dentistNadia':'Dra. Nadia Irias',
	'dentistDiana':'Dra. Diana Anchecta',
	'dentistLuis':'Dr. Luis Moncada',
	'dentistSamanta':'Dra. Samanta Espinoza',
	'dentistPahola':'Dra. Pahola Viera',
	'dentistSohad':'Dra. Sohad Aguilera'	
}