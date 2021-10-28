import { Component, OnInit } from '@angular/core';
import { DamPharm, Product } from './../../../dampharm.model';
import { DamPharmService } from './../../../dampharm.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  dampharm: DamPharm;
  year = new Date().getFullYear();

  constructor(private dampharmService: DamPharmService) { }

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
