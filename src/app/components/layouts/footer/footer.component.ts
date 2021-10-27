import { Component, OnInit } from '@angular/core';
import { DamPharm, Product } from 'src/app/Dentist';
import { DentistserviceService } from 'src/app/dentistservice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  dampharm: DamPharm;
  year = new Date().getFullYear();

  constructor(private dampharmService: DentistserviceService) { }

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


}
