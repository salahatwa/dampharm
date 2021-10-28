import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DamPharm } from './../../../dampharm.model';
import { DamPharmService } from './../../../dampharm.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService, private dampharmService: DamPharmService) { }

  dampharm: DamPharm;
  year = new Date().getFullYear();

  ngOnInit(): void {
    this.dampharmService.currentUser.subscribe((data) => {
      this.dampharm = data;
    });
  }


  useLanguage(): void {
    if (localStorage.getItem('lang') == 'ar') {
      localStorage.setItem('lang', 'en');
      this.translate.use('en');
    }
    else {
      localStorage.setItem('lang', 'ar');
      this.translate.use('ar');
    }
  }

}
