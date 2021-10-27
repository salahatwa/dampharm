import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DamPharm } from 'src/app/Dentist';
import { DentistserviceService } from 'src/app/dentistservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService, private dampharmService: DentistserviceService) { }

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
