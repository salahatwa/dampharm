import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DamPharm } from 'src/app/Dentist';
import { DentistserviceService } from 'src/app/dentistservice.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {


  constructor(private dampharmService: DentistserviceService, private router: Router) {

  }

  dampharm: DamPharm;

  ngOnInit(): void {
    this.dampharmService.currentUser.subscribe((data) => {
      this.dampharm = data;
    });
  }
}