import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DamPharm } from './../../../dampharm.model';
import { DamPharmService } from './../../../dampharm.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  dampharm: DamPharm;
  url:SafeResourceUrl;

  constructor(private dampharmService: DamPharmService,public sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    this.dampharmService.currentUser.subscribe((data) => {
      this.dampharm = data;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.dampharm?.location);  
    });
  }

}
