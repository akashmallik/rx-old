import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { EncounterService } from '../services/encounter.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { Patient } from '../model/patient';


export interface Visit {
  key: string;
  value: string;
}

@Component({
  selector: 'app-single-patient',
  templateUrl: './single-patient.component.html',
  styleUrls: ['./single-patient.component.scss']
})
export class SinglePatientComponent implements OnInit {
  @ViewChild('print', { read: ElementRef, static: false }) print: ElementRef;
  patientId: number;
  patient: Patient;
  encounters: any[] = [];
  encount: any[] = [];

  visit: Visit[] = [
    { key: 'ODP', value: 'ODP'},
  ];
  
  displayedColumns: string[] = ['position'];
  constructor(
    private patientService: PatientService,
    private encounterService: EncounterService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    public datepipe: DatePipe) {
      this.patientId = +this.route.snapshot.paramMap.get('id');
      
    }

  ngOnInit() {
    this.patientService.get(this.patientId)
    .subscribe(
      (response: Patient) => {
        this.patient = response;
        this.encounters = response['encounters'];
      }
    );
  }

  encounter(data) {
    const formData: FormData = new FormData();
    formData.append('date', this.datepipe.transform(data.date, 'yyyy-MM-dd'));
    formData.append('visit_type', data.visit_type);
    formData.append('patient', this.patientId.toString());
    
    this.encounterService.create(formData)
    .subscribe(
      response => {
        this.encounters.splice(this.encounters.length, 0 , response);
        this.toastr.success('Successfully Added', 'Success');
      }
    );
  }
}
