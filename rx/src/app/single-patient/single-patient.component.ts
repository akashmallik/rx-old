import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { AdviceService } from '../services/advice.service';
import { EncounterService } from '../services/encounter.service';
import { ToastrService } from 'ngx-toastr';
import { MedicineService } from '../services/medicine.service';
import { ExaminationService } from '../services/examination.service';
import { SymptomService } from '../services/symptom.service';

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
export interface Examination {
  id: string;
  pulse: number;
  bp: string;
  temp: number;
  resp_rate: number;
  height: number;
  lifestyle: string;
  patient: string;
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
  @ViewChild('print', { read: ElementRef, static: false }) print: ElementRef;
  // patient
  id: number;
  patient: Patient[] = [];
  // encount
  encounterId: any;
  encount: any[] = [];
  encounters: any[] = [];
  // symptom
  symp: any[] = [];
  symptoms: any[] = [];
  // examination
  examination: any[] = [];
  // medicine
  medicines: any[] = [];
  // advice
  advic: any[] = [];
  advices: any[] = [];

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
      this.id = +this.route.snapshot.paramMap.get('id');
      this.patientService.get(this.id)
      .subscribe(
        (data: Patient[]) => {
          this.patient = data;
          this.encounters = data['encounters'];
          this.encount = this.encounters[0];
          this.encount['symptoms_id']= this.encount['symptoms'].map(item => item.id);
          this.encount['medicines_id']= this.encount['medicines'].map(item => item.id);
          this.encount['advices_id']= this.encount['advices'].map(item => item.id);          
          this.examination = this.encount['examination'];
        }
      );
      route.queryParamMap.subscribe(
        params => {
          this.encounterId = params.get('encounter');
          if (this.encounterId) {
            this.patientService.get(this.id)
            .subscribe(
              (data: Patient[]) => {
                this.patient = data;
                this.encounters = data['encounters'];
                this.encount = this.encounters.find(element => element.id == this.encounterId);
                this.encount['symptoms_id']= this.encount['symptoms'].map(item => item.id);
                this.encount['medicines_id']= this.encount['medicines'].map(item => item.id);
                this.encount['advices_id']= this.encount['advices'].map(item => item.id); 
                this.examination = this.encount['examination'];
              }
            );
          }
        }
      );
    }

  ngOnInit() {
    // get all symptoms
    this.symptomService.getAll()
    .subscribe(
      (data: any[]) => {
        this.symptoms = data;
      }
    );

    // get all medicines
    this.medicineService.getAll()
    .subscribe(
      (data: any[]) => {
        this.medicines = data;
      }
    );

    // get all advices
    this.adviceService.getAll()
    .subscribe(
      (data: any[]) => {
        this.advices = data;
      }
    );
  }

  encounter(data) {
    const formData: FormData = new FormData();
    formData.append('date', data.date);
    formData.append('visit_type', data.visit_type);
    formData.append('patient', this.id.toString());
    this.encounterService.create(formData)
    .subscribe(
      response => {
        this.encounters.splice(this.encounters.length, 0 , response);
        this.toastr.success('Successfully Added', 'Success');
      }
    );
  }

  symptom(data) {    
    this.encounterService.partial_update(this.encounterId, data)
    .subscribe(
      (response: any) => {
        this.toastr.success('Successfully Updated', 'Success');
      }
    );
  }

  medicine(data) {
    this.encounterService.partial_update(this.encounterId, data)
    .subscribe(
      (response: any) => {
        this.toastr.success('Successfully Updated', 'Success');
      }
    );
  }

  advice(data) {    
    this.encounterService.partial_update(this.encounterId, data)
    .subscribe(
      (response: any) => {
        this.toastr.success('Successfully Updated', 'Success');
      }
    );
  }

  report(value)  {
    const formData: FormData = new FormData();
    formData.append('pulse', value.pulse);
    formData.append('bp', value.bp);
    formData.append('temp', value.temp);
    formData.append('resp_rate', value.resp_rate);
    formData.append('height', value.height);
    formData.append('lifestyle', value.lifestyle);
    formData.append('patient', this.id.toString());
    if (value.id) {
      formData.append('id', value.id);
      this.examinationService.update(value.id, formData)
      .subscribe(
        (response: any) => {
          this.examination = response;
          this.toastr.success('Successfully Updated', 'Success');
        }
      );
    } else {
      this.examinationService.create(formData)
      .subscribe(
        (response: any) => {
          this.examination = response;
          this.toastr.success('Successfully Added', 'Success');
        }
      );
    }
  }


  // deleteAdvice(item) {
  //   const index = this.advices.indexOf(item);
  //   this.adviceService.delete(item.id)
  //   .subscribe(
  //     data => {
  //       this.advices.splice(index, 1);
  //       this.toastr.success('Successfully Deleted', 'Success');
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  // }

  printPage() {
    window.print();
  }

}
