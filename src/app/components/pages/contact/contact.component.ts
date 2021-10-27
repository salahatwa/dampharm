import { Component, OnInit } from '@angular/core';
import { DamPharm } from 'src/app/Dentist';
import { DentistserviceService } from 'src/app/dentistservice.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  dampharm: DamPharm;
  url:SafeResourceUrl;

  constructor(private dampharmService: DentistserviceService,public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.dampharmService.currentUser.subscribe((data) => {
      this.dampharm = data;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.dampharm?.location);  
    });
  }

}
