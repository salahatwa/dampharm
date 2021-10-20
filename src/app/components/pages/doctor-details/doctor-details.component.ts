import { Component, OnInit, Input } from '@angular/core';
import { DentistserviceService } from 'src/app/dentistservice.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { Dentist } from 'src/app/Dentist';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  	
  constructor(private route:ActivatedRoute,private service:DentistserviceService) {
	
  }
  dentist:Dentist = new Dentist();  
  clinicPhoneNum:string;
  evaluateClinic(dentistClinic1:string):string{
  	if(dentistClinic1 === "Mall La Galeria"){
		 return "+504 3221-6104";
	}
	else{
		return "+504 9495-0002";
	}
  }  
  getThisDentist(){
  	this.dentist = this.service.getDentist(this.dentist.dentistName);	
  }   
  
  ngOnInit(): void {
  	this.route.queryParams.subscribe(params =>{
		this.dentist = this.service.getDentist(params['dentistName']);
	});		
  }

}
