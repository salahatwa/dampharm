import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DamPharm, Product } from 'src/app/dampharm.model';
import { DamPharmService } from 'src/app/dampharm.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  dampharm: DamPharm;

  constructor(private dampharmService: DamPharmService, private router: Router) {
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
