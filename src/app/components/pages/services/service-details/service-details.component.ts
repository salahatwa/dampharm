import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DamPharm, Employee, Product } from 'src/app/dampharm.model';
import { DamPharmService } from 'src/app/dampharm.service';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {

  dampharm: DamPharm;
  product: Product;

  constructor(private route: ActivatedRoute, private dampharmService: DamPharmService) {

  }


  ngOnInit(): void {
    this.dampharmService.currentUser.subscribe((data) => {
      this.route.queryParams.subscribe(params => {
        console.log(params['name']);

        this.dampharm = data;
        this.product = this.dampharm?.products.filter(x => x.slug === params['name'])[0];
      });
    });
  }


}
