import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.scss']
})
export class SinglePatientComponent implements OnInit {
  patient: any[];
  id: any;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute) {
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.patientService.get(this.id)
      .subscribe(
        (data: any[]) => {
          this.patient = data;
        }
      );
    }

  ngOnInit() {
  }

}
