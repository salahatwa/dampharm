import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  useLanguage(): void {
    if (localStorage.getItem('lang') == 'ar')
    {
      localStorage.setItem('lang','en');
      this.translate.use('en');
    }
    else
    {
      localStorage.setItem('lang','ar');
      this.translate.use('ar');
    }
  }

}
