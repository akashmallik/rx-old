import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { AdviceService } from '../services/advice.service';
import { EncounterService } from '../services/encounter.service';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from '../services/medicine.service';
import { ExaminationService } from '../services/examination.service';
import { SymptomService } from '../services/symptom.service';
import {FormControl} from '@angular/forms';


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
  symptoms: any[] = [];
  examination: any[] = [];
  encount: any[] = [];
  medicines: any[] = [];
  id: any;
  encounterId: any;

  visit: Visit[] = [
    { key: 'ODP', value: 'ODP'},
  ];
  displayedColumns: string[] = ['position'];
  constructor(
    private patientService: PatientService,
    private adviceService: AdviceService,
    private encounterService: EncounterService,
    private medicineService: MedicineService,
    private examinationService: ExaminationService,
    private symptomService: SymptomService,
    private toastr: ToastrService,
    private route: ActivatedRoute) {
      route.queryParamMap.subscribe(
        params => {
          this.encounterId = params.get('encounter');
          if (this.encounterId) {
            this.encounterService.get(this.encounterId)
            .subscribe(
              (data: any[]) => {
                this.encount =  data;
              }
            );
          }
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
      this.symptomService.getAll()
      .subscribe(
        (data: any[]) => {
          this.symptoms = data.filter(p => p.patient == this.id);
        }
      );
      this.examinationService.getAll()
      .subscribe(
        (data: any[]) => {
          this.examination = data.find(p => p.patient == this.id);
        }
      );
      this.encounterService.getAll()
      .subscribe(
        (data: any[]) => {
          this.encounters = data.filter(p => p.patient == this.id);
        }
      );
      this.medicineService.getAll()
      .subscribe(
        (data: any[]) => {
          this.medicines = data;
        }
      );
    }

  ngOnInit() {
  }

  advice(data) {
    const formData: FormData = new FormData();
    formData.append('advice', data.advice);
    formData.append('patient', this.id);
    this.adviceService.create(formData)
    .subscribe(
      response => {
        this.advices.push(data);
        this.toastr.success('Successfully Added', 'Success');
      }
    );
  }
  symptom(data) {
    const formData: FormData = new FormData();
    formData.append('symptom', data.symptom);
    formData.append('patient', this.id);
    this.symptomService.create(formData)
    .subscribe(
      response => {
        this.symptoms.push(data);
        this.toastr.success('Successfully Added', 'Success');
      }
    );
  }

  encounter(data) {
    const formData: FormData = new FormData();
    formData.append('date', data.date);
    formData.append('visit_type', data.visit_type);
    formData.append('patient', this.id);
    this.encounterService.create(formData)
    .subscribe(
      response => {
        this.encounters.push(data);
        this.toastr.success('Successfully Added', 'Success');
      }
    );
  }
  medicine(data) {
    var json_arr = JSON.stringify(data.medicine);
    const formData: FormData = new FormData();
    formData.append('medicines[]', data.medicine);
    formData.append('patient', this.id);
    // formData.append('id', this.encounterId);
    this.encounterService.update(this.encounterId, data)
    .subscribe(
      response => {
        this.medicines.push(data);
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
