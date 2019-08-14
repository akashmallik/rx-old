import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { AdviceService } from '../services/advice.service';
import { EncounterService } from '../services/encounter.service';
import { ToastrService } from 'ngx-toastr';

export interface Patient {
  id: number;
  name: string;
  phone: number;
  email: string;
  address: string;
  sex: string;
  age: number;
  blood_group: string;
  avatar: string;
}
export interface Patient {
  id: number;
  name: string;
  phone: number;
  email: string;
  address: string;
  sex: string;
  age: number;
  blood_group: string;
  avatar: string;
}

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
  patient: Patient[] = [];
  advices: any[] = [];
  encounters: any[] = [];
  filteredEncounters: any[] = [];
  public id: any;
  public encounterId: any;

  visit: Visit[] = [
    { key: 'ODP', value: 'ODP'},
  ];

  constructor(
    private patientService: PatientService,
    private adviceService: AdviceService,
    private encounterService: EncounterService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
      route.queryParamMap.subscribe(
        params => {
          this.encounterId = params.get('encounter');
        }
      );
      this.id = this.route.snapshot.paramMap.get('id');
      this.patientService.get(this.id)
      .subscribe(
        (data: Patient[]) => {
          this.patient = data;
        }
      );
      this.adviceService.getAll()
      .subscribe(
        (data: any[]) => {
          this.advices = data.filter(p => p.patient == this.id);
        }
      );
      this.encounterService.getAll()
      .subscribe(
        (data: any[]) => {
          this.encounters = data.filter(p => p.patient == this.id);
        }
      );
    }

  ngOnInit() {
  }

  advice(data) {
    const formData: FormData = new FormData();
    formData.append('advice', data.advice);
    formData.append('patient', this.id);
    console.log(formData);
    this.adviceService.create(formData)
    .subscribe(
      (x: any[]) => {
        console.log(x);
      }
    );
  }

  encounter(data) {
    const formData: FormData = new FormData();
    formData.append('visit_type', data.visit_type);
    formData.append('patient', this.id);
    console.log(formData);
    this.encounterService.create(formData)
    .subscribe(
      (response: any[]) => {
        this.toastr.success('Successfully Added', 'Success');
      }
    );
  }

  deleteAdvice(id) {
    this.adviceService.delete(id)
    .subscribe(
      data => {
        this.toastr.success('Successfully Deleted', 'Success');
      }
    );

  }

}