import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DamPharm } from './../../../dampharm.model';
import { DamPharmService } from './../../../dampharm.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {


  constructor(private dampharmService: DamPharmService, private router: Router) {

  }

  dampharm: DamPharm;

  ngOnInit(): void {
    this.dampharmService.currentUser.subscribe((data) => {
      this.dampharm = data;
    });
  }
}