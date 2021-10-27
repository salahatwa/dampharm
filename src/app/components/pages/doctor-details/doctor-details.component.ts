import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DamPharm, Employee } from 'src/app/Dentist';
import { DentistserviceService } from 'src/app/dentistservice.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {

  dampharm: DamPharm;
  doctor: Employee;

  constructor(private route: ActivatedRoute, private dampharmService: DentistserviceService) {

  }


  ngOnInit(): void {
    this.dampharmService.currentUser.subscribe((data) => {
      this.route.queryParams.subscribe(params => {
        console.log(params['name']);
       
        this.dampharm = data;
        console.log(this.dampharm?.employees.filter(x => x.name === params['name']));
        this.doctor = this.dampharm?.employees.filter(x => x.name === params['name'])[0];
      });
    
     
    });

  
  }






}
