import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dentist, DamPharm, Product } from './../../../dampharm.model';
import { DamPharmService } from './../../../dampharm.service';

@Component({
	selector: 'app-home-one',
	templateUrl: './home-one.component.html',
	styleUrls: ['./home-one.component.scss']
})
export class HomeOneComponent implements OnInit {
	dentist: Dentist = new Dentist();
	dentists: Dentist[] = [];
	dentistNames = DENTIST_NAMES;

	dampharm: DamPharm;

	constructor(private dampharmService: DamPharmService, private router: Router) {
		// this.dentists = this.service.getAllDentists();
	}
	assignDentist(dentistName: string) {
		// this.dentist = this.service.getDentist(dentistName);
	}

	getAllDentists() {
		// return this.service.getAllDentists();
	}

	passDentist() {
		this.router.navigate(['./doctor-details'], { queryParams: { dentistName: this.dentist.dentistName } });
	}

	ngOnInit(): void {

		this.dampharmService.currentUser.subscribe((data) => {
			this.dampharm = data;
		});

	}

	getName(product: Product) {
		if (localStorage.getItem('lang') == 'ar')
			return product?.nameAr;
		else
			return product?.nameEn;

	}

	getDesc(product: Product) {
		if (localStorage.getItem('lang') == 'ar')
			return product?.descAr;
		else
			return product?.descEn;

	}

}
export const DENTIST_NAMES = {
	'dentistAnabel': 'Dra. Anabel Argueta',
	'dentistPamela': 'Dra. Pamela Escoto',
	'dentistNadia': 'Dra. Nadia Irias',
	'dentistDiana': 'Dra. Diana Anchecta',
	'dentistLuis': 'Dr. Luis Moncada',
	'dentistSamanta': 'Dra. Samanta Espinoza',
	'dentistPahola': 'Dra. Pahola Viera',
	'dentistSohad': 'Dra. Sohad Aguilera'
}