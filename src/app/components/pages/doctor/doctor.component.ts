import { Component, OnInit } from '@angular/core';
import { Dentist } from 'src/app/Dentist';
import { DentistserviceService } from 'src/app/dentistservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {
  dentists:Dentist[];
  
  dentistNames = DENTIST_NAMES;

  
  constructor(private service: DentistserviceService, private router: Router) { 
  
  }
  dentist:Dentist = new Dentist();
  
  assignDentist(dentistName:string):void{
	this.dentist = this.service.getDentist(dentistName);  
  }   
  passDentist(){
	this.router.navigate(['./doctor-details'],{ queryParams: {dentistName: this.dentist.dentistName }});
  }

  getAllDentists(){
  	this.dentists = this.service.getAllDentists();
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
